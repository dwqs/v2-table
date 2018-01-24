import Vue from 'vue';

import V2Table from '../src/index';
import DocsDemoBlock from './components/demo-block.vue';

import App from './app';

Vue.component('docs-demo-block', DocsDemoBlock);
Vue.use(V2Table);

new Vue({
    el: '#app',
    render: (h) => h(App)
});