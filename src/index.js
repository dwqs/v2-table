import 'beautify-scrollbar/dist/index.css';
import './style/index.less';

import Table from './components/table.vue';
import TableColumn from './components/table-column.vue';

import Bus from './bus.js';

function install (Vue) {
    Vue.component(Table.name, Table);
    Vue.component(TableColumn.name, TableColumn);
    Bus.saveVueRef(Vue);
};

const V2Table = {
    install
};

export default V2Table;

export { Table, TableColumn };

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(V2Table);
}
