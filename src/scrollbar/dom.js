function createDiv (className) {
    const div = window.document.createElement('div');
    div.className = className;
    return div;
};

function css (node, prop) {
    return window.getComputedStyle(node, null).getPropertyValue(prop);
}

// reference from perfect scrollbar
function getDeltaFromEvent (e) {
    let deltaX = e.deltaX;
    let deltaY = -1 * e.deltaY;

    if (typeof deltaX === 'undefined' || typeof deltaY === 'undefined') {
        // OS X Safari
        deltaX = -1 * e.wheelDeltaX / 6;
        deltaY = e.wheelDeltaY / 6;
    }

    if (e.deltaMode && e.deltaMode === 1) {
        // Firefox in deltaMode 1: Line scrolling
        deltaX *= 10;
        deltaY *= 10;
    }

    /* NaN checks */
    if (deltaX !== deltaX && deltaY !== deltaY) {
        // IE in some mouse drivers
        deltaX = 0;
        deltaY = e.wheelDelta;
    }

    if (e.shiftKey) {
        // reverse axis with shift key
        return [-deltaY, -deltaX];
    }

    return [deltaX, deltaY];
}

export {
    createDiv,
    css,
    getDeltaFromEvent
};
