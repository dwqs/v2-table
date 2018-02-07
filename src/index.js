import './style/index.less';

import Table from './components/table.vue';
import TableColumn from './components/table-column.vue';

function install (Vue) {
    Vue.component(Table.name, Table);
    Vue.component(TableColumn.name, TableColumn);
};

const V2Table = {
    install
};

export default V2Table;

export { Table, TableColumn };

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(V2Table);
}
