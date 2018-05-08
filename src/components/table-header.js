import CheckBox from './checkbox.vue';

export default {
    name: 'table-header',
    props: {
        columns: {
            type: Array,
            default: () => []
        },

        border: [Boolean],
        sort: {}
    },

    inject: ['table'],

    components: {
        CheckBox
    },

    methods: {
        getColumnClass (col, index) {
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
            style.width = `${col.$realWidth}px`;
            
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
            <table 
                class={{ 'v2-table__header': true, 'v2-table__border': this.border, 'v2-table__header-border': this.border }}
                cellspacing='0'
                border='0'
                cellpadding='0'>
                <colgroup>
                    {
                        this.columns.map(column => <col style={ this.getColStyle(column) } />)
                    }
                </colgroup>
                <thead>
                    <tr>
                        {
                            this.columns.map((column, index) => {
                                return (
                                    <th key={index}
                                        onClick={this.changeSortRule(column)} 
                                        class={ this.getColumnClass(column, index) }
                                        style= {{ height: this.table.colHeight + 'px' }} 
                                        colspan='1' 
                                        rowspan='1'>
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
                                    </th>
                                );
                            })
                        }
                    </tr>
                </thead>
            </table>
        );
    }
};
