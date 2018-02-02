import './scrollbar.less';

import {
    createDiv,
    getCSS,
    setCSS,
    getDeltaFromEvent,
    remove
} from './dom';

import throttle from './throttle';

export default class ScrollBar {
    constructor (element, props = {}) {
        this.element = element;
        this.props = props;

        this.wheelSpeed = 1;
        this.xBar = null;
        this.xThumb = null;
        this.xThumbWidth = null;
        this.yBar = null;
        this.yThumb = null;
        this.yThumbHeight = null;

        // for mouse drag
        this.startingMousePageY = 0;
        this.startingMousePageX = 0;
        this.yScrollFactor = 0;
        this.xScrollFactor = 0;
        this.dragDirect = '';

        // event binding
        this.wheelEventHandler = this._wheelEventHandler.bind(this);
        this.mouseMoveHandler = this._mouseMoveHandler.bind(this); // throttle(this._mouseMoveHandler.bind(this), 20, 10);
        this.mouseUpHandler = this._mouseUpHandler.bind(this);

        if (this.element.classList) {
            this.element.classList.add('v2-scroll-container');
        } else {
            const cls = this.element.className;
            this.element.className = cls + ' v2-scroll-container';
        }

        this.contentWidth = isNaN(props.contentWidth) ? element.clientWidth : props.contentWidth;
        this.contentHeight = isNaN(props.contentHeight) ? element.clientHeight : props.contentHeight;

        this.containerWidth = element.clientWidth;
        this.containerHeight = element.clientHeight;
        this.maxScrollLeft = this.contentWidth - this.containerWidth;
        this.maxScrollTop = this.contentHeight - this.containerHeight;

        this.createBarEle();
        this.bindWheelEvent();
    }

    createBarEle () {
        if (this.maxScrollTop > 0) {
            this.yBar = createDiv('v2-scroll__y-bar');
            this.element.appendChild(this.yBar);
            setCSS(this.yBar, { height: this.containerHeight, right: 0, top: 0 });
            this.yBar.setAttribute('tabindex', 0);

            this.yThumb = createDiv('v2-scroll__y-thumb');
            this.yBar.appendChild(this.yThumb);
            this.yThumbHeight = parseInt(this.containerHeight * this.containerHeight / this.contentHeight, 10);
            setCSS(this.yThumb, { top: 0, height: this.yThumbHeight });
            
            this.yScrollFactor = (this.contentHeight - this.containerHeight) / (this.containerHeight - this.yThumbHeight);
            this.yThumb.addEventListener('mousedown', this.mouseDownHandler.bind(this, 'y'), false);
        }

        if (this.maxScrollLeft > 0) {
            this.xBar = createDiv('v2-scroll__x-bar');
            this.element.appendChild(this.xBar);
            setCSS(this.xBar, { left: 0, width: this.containerWidth, bottom: 0 });
            this.xBar.setAttribute('tabindex', 0);

            this.xThumb = createDiv('v2-scroll__x-thumb');
            this.xBar.appendChild(this.xThumb);
            this.xThumbWidth = parseInt(this.containerWidth * this.containerWidth / this.contentWidth, 10);
            setCSS(this.xThumb, { left: 0, width: this.xThumbWidth });

            this.xScrollFactor = (this.contentWidth - this.containerWidth) / (this.containerWidth - this.xThumbWidth);
            this.xThumb.addEventListener('mousedown', this.mouseDownHandler.bind(this, 'x'), false);
        }
    }

    bindWheelEvent () {
        if (typeof window.onwheel !== 'undefined') {
            this.element.addEventListener('wheel', this.wheelEventHandler, false);
        } else if (typeof window.onmousewheel !== 'undefined') {
            this.element.addEventListener('mousewheel', this.wheelEventHandler, false);
        }
    }

    _mouseMoveHandler (e) {
        e.stopPropagation();
        e.preventDefault();

        if (this.dragDirect === 'x') {
            // this.element.scrollLeft + 
            const scrollLeft = this.xScrollFactor * (e.pageX - this.startingMousePageX);
            this.element.scrollLeft = scrollLeft > this.maxScrollLeft ? this.maxScrollLeft : scrollLeft;
        } else if (this.dragDirect === 'y') {
            // this.element.scrollTop + 
            const scrollTop = this.yScrollFactor * (e.pageY - this.startingMousePageY);
            this.element.scrollTop = scrollTop > this.maxScrollTop ? this.maxScrollTop : scrollTop;
        }

        this.updateScrollBarStyle();
    }

    _mouseUpHandler (e) {
        e.stopPropagation();
        e.preventDefault();

        this.element.ownerDocument.removeEventListener('mousemove', this.mouseMoveHandler);
        this.element.ownerDocument.removeEventListener('mouseup', this.mouseUpHandler);
    }

    mouseDownHandler (direct, e) {
        e.stopPropagation();
        e.preventDefault();

        if (direct === 'x') {
            this.startingMousePageX = e.pageX;
        }

        if (direct === 'y') {
            this.startingMousePageY = e.pageY;
        }
        this.dragDirect = direct;
        this.element.ownerDocument.addEventListener('mousemove', this.mouseMoveHandler, false);
        this.element.ownerDocument.addEventListener('mouseup', this.mouseUpHandler, false);
    }

    updateScrollBarStyle () {
        this.yBar && setCSS(this.yBar, { top: this.element.scrollTop, height: this.containerHeight, right: -this.element.scrollLeft });
        const yThumbTop = parseInt(this.element.scrollTop * (this.containerHeight - this.yThumbHeight) / this.maxScrollTop, 10);
        this.yThumb && setCSS(this.yThumb, { top: yThumbTop, height: this.yThumbHeight });

        this.xBar && setCSS(this.xBar, { left: this.element.scrollLeft, width: this.containerWidth, bottom: -this.element.scrollTop });
        const xThumbLeft = parseInt(this.element.scrollLeft * (this.containerWidth - this.xThumbWidth) / this.maxScrollLeft, 10);
        this.xThumb && setCSS(this.xThumb, { left: xThumbLeft, width: this.xThumbWidth });

        if (typeof this.props.callBack === 'function') {
            this.props.callBack(this.element.scrollLeft);
        }
    }

    _wheelEventHandler (e) {
        // avoid triggering browser scroll
        e.stopPropagation();

        if (this.maxScrollTop > 0) {
            e.preventDefault();
        }

        // e.currentTarget, e.target
        const [deltaX, deltaY] = getDeltaFromEvent(e);

        if (this.shouldUpdateScrollTop(deltaY)) {
            const scrollTop = this.element.scrollTop - deltaY * this.wheelSpeed;
            this.element.scrollTop = scrollTop > this.maxScrollTop ? this.maxScrollTop : scrollTop;
        }

        if (this.shouldUpdateScrollLeft(deltaX)) {
            const scrollLeft = this.element.scrollLeft + deltaX * this.wheelSpeed;
            this.element.scrollLeft = scrollLeft > this.maxScrollLeft ? this.maxScrollLeft : scrollLeft;
        } 

        this.updateScrollBarStyle();
    }

    shouldUpdateScrollLeft (deltaX) {
        if (this.element.scrollLeft === this.maxScrollLeft && deltaX > 0) {
            // right
            return false;
        }

        if (this.element.scrollLeft === 0 && deltaX <= 0) {
            // left
            return false;
        }

        return true;
    }

    shouldUpdateScrollTop (deltaY) {
        if (this.element.scrollTop === this.maxScrollTop && deltaY < 0) {
            // bottom
            return false;
        }

        if (this.element.scrollTop === 0 && deltaY >= 0) {
            // top
            return false;
        }

        return true;
    }

    removeAllEventListener () {
        this.element.removeEventListener('wheel', this.wheelEventHandler);
        this.element.removeEventListener('mousewheel', this.wheelEventHandler);
        this.xThumb.removeAllEventListener('mousedown');
        this.yThumb.removeAllEventListener('mousedown');
    }

    removeClasses () {
        this.element.className = this.element.className
            .split(' ')
            .filter(name => !name.match(/^v2\-scroll\-container$/))
            .join(' ');
    }

    destroy () {
        this.removeAllEventListener();
        this.removeClasses();

        this.element = null;

        this.yBar && remove(this.yBar);
        this.xBar && remove(this.xBar);

        this.xBar = null;
        this.xThumb = null;
        this.xThumbWidth = null;
        this.yBar = null;
        this.yThumb = null;
        this.yThumbHeight = null;

        this.wheelEventHandler = null;
        this.mouseMoveHandler = null;
        this.mouseUpHandler = null;
    }
};
