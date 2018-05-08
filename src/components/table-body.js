import TableCell from './table-cell';

export default {
    props: {
        columns: {
            type: Array,
            default: () => []
        },

        rows: {
            type: Array,
            default: () => []
        },
        hoverRowIndex: [Number],
        border: [Boolean]
    },

    inject: ['table'],

    components: {
        TableCell
    },

    methods: {
        getColStyle (col) {
            const style = {};
            style.width = `${col.$realWidth}px`;
            
            return style;
        },

        getRowClass (index) {
            const cls = ['v2-table__row'];
            if (this.table.stripe && (index + 1) % 2 === 0) {
                cls.push('v2-table__row-striped');
            }

            if (index === this.hoverRowIndex) {
                cls.push('row-hover');
            }

            // custom row class
            if (typeof this.table.rowClassName !== 'undefined') {
                const customRowClass = typeof this.table.rowClassName === 'function' ? this.table.rowClassName({ row: this.row, rowIndex: index }) : this.table.rowClassName;
                cls.push(typeof customRowClass === 'string' ? customRowClass : '');
            }

            return cls.join(' ');
        }
    },

    render (h) {
        return (
            <table
                class={{ 'v2-table__body': true, 'v2-table__border': this.border, 'v2-table__body-border': this.border }}
                cellspacing='0'
                border='0'
                cellpadding='0'>
                <colgroup>
                    {
                        this.columns.map(column => <col style={ this.getColStyle(column) } />)
                    }
                </colgroup>
                <tbody>
                    {
                        this.rows.map((row, i) => {
                            return (
                                <tr 
                                    on-mouseenter={ () => this.table.hoverRowIndex = i }
                                    on-mouseleave={ () => this.table.hoverRowIndex = -1 }
                                    class={ this.getRowClass(i) }>
                                    {
                                        this.columns.map((col, j) => {
                                            return (
                                                <table-cell 
                                                    column={col}
                                                    rowIndex={i}
                                                    height={this.table.cellHeight}
                                                    row={row}>
                                                </table-cell>
                                            );
                                        })
                                    }
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        );
    }
};
