import './scrollbar.less';

import {
    createDiv,
    getCSS,
    setCSS,
    getDeltaFromEvent,
    remove
} from './dom';

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

        console.log('22222 ScrollBar content', this.contentWidth, this.contentHeight);
        console.log('22222 ScrollBar container', this.containerWidth, this.containerHeight);
        console.log('22222 ScrollBar max', this.maxScrollLeft, this.maxScrollTop);

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
        }
    }

    bindWheelEvent () {
        if (typeof window.onwheel !== 'undefined') {
            this.element.addEventListener('wheel', this.wheelEventHandler.bind(this), false);
        } else if (typeof window.onmousewheel !== 'undefined') {
            this.element.addEventListener('mousewheel', this.wheelEventHandler.bind(this), false);
        }
    }

    updateScrollBarStyle () {
        this.yBar && setCSS(this.yBar, { top: this.element.scrollTop, height: this.containerHeight, right: -this.element.scrollLeft });
        const yThumbTop = parseInt(this.element.scrollTop * (this.containerHeight - this.yThumbHeight) / this.maxScrollTop, 10);
        this.yThumb && setCSS(this.yThumb, { top: yThumbTop, height: this.yThumbHeight });

        this.xBar && setCSS(this.xBar, { left: this.element.scrollLeft, width: this.containerWidth, bottom: -this.element.scrollTop });
        const xThumbLeft = parseInt(this.element.scrollLeft * (this.containerWidth - this.xThumbWidth) / this.maxScrollLeft, 10);
        this.xThumb && setCSS(this.xThumb, { left: xThumbLeft, width: this.xThumbWidth });
    }

    wheelEventHandler (e) {
        // avoid triggering browser scroll
        e.stopPropagation();
        // e.preventDefault();
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
        this.element.removeEventListener('wheel');
        this.element.removeEventListener('mousewheel');
    }

    destroy () {
        this.removeAllEventListener();

        this.element = null;

        this.yBar && remove(this.yBar);
        this.xBar && remove(this.xBar);

        this.xBar = null;
        this.xThumb = null;
        this.xThumbWidth = null;
        this.yBar = null;
        this.yThumb = null;
        this.yThumbHeight = null;
    }
};
