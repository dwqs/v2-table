import Vue from 'vue';
import V2Table from 'main/index';

Vue.use(V2Table);

export const createVM = (opts) => {
    return new Vue(opts).$mount();
};

export const destroyVM = (vm) => {
    vm.$destroy && vm.$destroy();
    vm.$el &&
    vm.$el.parentNode &&
    vm.$el.parentNode.removeChild(vm.$el);
};
