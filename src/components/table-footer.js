export default {
    props: {
        columns: {
            type: Array,
            default: () => []
        },

        type: {
            type: String,
            default: 'normal' // normal/left/right
        },

        border: [Boolean]
    },

    inject: ['table'],

    data () {
        return {
            sums: []
        };
    },

    watch: {
        columns () {
            this.sums.length === 0 && this.computedSums();
        }
    },

    methods: {
        getColStyle (col) {
            const style = {};
            style.width = `${col.$realWidth}px`;
            
            return style;
        },

        computedSums () {
            if (typeof this.table.summaryMethod === 'function') {
                const res = this.table.summaryMethod({
                    columns: this.table.columns,
                    data: this.table.data
                });
                if (Array.isArray(res)) {
                    this.sums = [].concat(res.slice(0, this.columns.length));
                    return;
                }
            }

            const sums = [];
            this.columns.forEach((column, index) => {
                if (index === 0 && this.type !== 'right') {
                    sums[0] = this.table.sumText;
                    return;
                }
                const values = this.table.data.map(item => Number(item[column.prop]));
                const precisions = [];
                let notNumber = true;
                values.forEach(value => {
                    if (!isNaN(value)) {
                        notNumber = false;
                        const decimal = ('' + value).split('.')[1];
                        precisions.push(decimal ? decimal.length : 0);
                    }
                });
                const precision = Math.max.apply(null, precisions);
                if (!notNumber) {
                    sums[index] = values.reduce((prev, curr) => {
                        const value = Number(curr);
                        if (!isNaN(value)) {
                            return parseFloat((prev + curr).toFixed(Math.min(precision, 20)));
                        } else {
                            return prev;
                        }
                    }, 0);
                } else {
                    sums[index] = '';
                }
            });

            this.sums = [].concat(sums);
        },

        getCellStyle (col) {
            const cls = ['v2-table__cell', 'v2-table__footer-cell'];

            if (col.align === 'left') {
                cls.push('text-left');
            }

            if (col.align === 'right') {
                cls.push('text-right');
            }

            return cls.join(' ');
        }
    },

    render (h) {
        return (
            <table
                class={{ 'v2-table__footer': true, 'v2-table__border': this.border, 'v2-table__footer-border': this.border }}
                cellspacing='0'
                border='0'
                cellpadding='0'>
                <colgroup>
                    {
                        this.columns.map(column => <col style={ this.getColStyle(column) } />)
                    }
                </colgroup>
                <tbody>
                    <tr class='v2-table__row'>
                        {
                            this.columns.map((col, j) => {
                                return (
                                    <td class={ this.getCellStyle(col) } style={{ height: this.table.cellHeight + 'px' }}>
                                        <div class='cell'>
                                            {this.sums[j]}
                                        </div>
                                    </td>
                                );
                            })
                        }   
                    </tr>
                </tbody>
            </table>
        );
    },

    mounted () {
        if (this.columns.length) {
            this.computedSums();
        }
    }
};
