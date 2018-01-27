import './scrollbar.less';

import {
    createDiv,
    css,
    getDeltaFromEvent
} from './dom';

export default class ScrollBar {
    constructor (element, props = {}) {
        this.element = element;
        this.props = props;
        this.wheelSpeed = 1;

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

        console.log('22222 ScrollBar content', this.contentWidth, this.contentHeight);
        console.log('22222 ScrollBar container', this.containerWidth, this.containerHeight);

        // this.element.scrollLeft = 215;
        this.bindWheelEvent();
    }

    bindWheelEvent () {
        if (typeof window.onwheel !== 'undefined') {
            this.element.addEventListener('wheel', this.wheelEventHandler.bind(this), false);
        } else if (typeof window.onmousewheel !== 'undefined') {
            this.element.addEventListener('mousewheel', this.wheelEventHandler.bind(this), false);
        }
    }

    wheelEventHandler (e) {
        // avoid triggering browser scroll
        e.stopPropagation();
        e.preventDefault();
        // e.currentTarget, e.target
        const [deltaX, deltaY] = getDeltaFromEvent(e);
        console.log('222eeeeee', deltaX, deltaY, this);
        this.element.scrollTop -= deltaY * this.wheelSpeed;
        this.element.scrollLeft += deltaX * this.wheelSpeed;
    }
};
