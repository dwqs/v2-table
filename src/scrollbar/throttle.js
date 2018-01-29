export default function throttle (fn, delay, mustRunDelay) {
    let timer = null;
    let start;

    return function () {
        const context = this;
        clearTimeout(timer);
        const curTime = +new Date();

        if (!start) {
            start = curTime;
        }

        if (curTime - start >= mustRunDelay) {
            fn.apply(context, arguments);
            start = curTime;
        } else {
            timer = setTimeout(() => {
                fn.apply(context, arguments);
            }, delay);
        }
    };
};
