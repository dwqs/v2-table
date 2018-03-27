import CheckBox from './checkbox.vue';

export default {
    name: 'table-header',
    props: {
        columns: {
            type: Array,
            default: () => []
        },

        sort: {}
    },

    inject: ['table'],

    components: {
        CheckBox
    },

    methods: {
        getColumnClass (col) {
            const cls = ['v2-table__cell', 'v2-table__column-cell'];

            if (col.sortable && !col.type) {
                cls.push('sortable');
            }
            if (this.sort.prop === col.prop) {
                const order = this.sort.order || 'ascending';
                cls.push(order);
                this.$nextTick(() => {
                    this.table.resetDataOrder(col.prop, order);
                });
            }

            col.align === 'left' && cls.push('text-left');
            col.align === 'right' && cls.push('text-right');

            return cls.join(' ');
        },

        getColStyle (col) {
            const style = {};
            
            style.width = !isNaN(parseInt(col.width)) ? '90px' : `${parseInt(col.width, 10)}px`;
            style.height = !isNaN(parseInt(this.table.colHeight, 10)) ? '40px' : `${parseInt(this.table.colHeight, 10)}px`;

            // style.textAlign = ['left', 'center', 'right'].indexOf(col.align) > -1 ? col.align : 'center';
            
            return style;
        },

        changeSortRule (col) {
            return () => {
                if (col.sortable && !col.type) {
                    this.table.sortChange(col);
                }
            };
        }
    },

    render (h) {
        return (
            <div class='v2-table__table-thead'>
                <div class='v2-table__header-row'>
                    {
                        this.columns.map((column, index) => {
                            return (
                                <div key={index}
                                    onClick={this.changeSortRule(column)} 
                                    class={ this.getColumnClass(column) } 
                                    style={ this.getColStyle(column) }
                                >
                                    {
                                        typeof column.renderHeader === 'function' 
                                            ? column.renderHeader.call(this._renderProxy, h, { column, index })
                                            : column.label
                                    }
                                    {
                                        column.sortable && !column.type 
                                            ? <span class='v2-table__caret-wrapper'>
                                                <i class='v2-table__sort-caret ascending-caret'></i>
                                                <i class='v2-table__sort-caret descending-caret'></i>
                                            </span>
                                            : ''  
                                    }
                                    {
                                        column.type === 'selection'
                                            ? <check-box cur-row-index={-1}></check-box>
                                            : ''
                                    }
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
};
