<template>
    <div :class="[
        'v2-table__footer',
        {
            'v2-table__border': table.border,
            'v2-table__footer-border': table.border
        }
    ]" :style="{width: (!table.isContainerScroll && type === 'normal') ? table.contentWidth + 'px' : '100%'}">
        <table-col-group :columns="cols"></table-col-group>
        <div class="v2-table__table-tbody">
            <div role="row" class="v2-table__row" :style="getRowStyle()">
                <div class="v2-table__cell v2-table__footer-cell"
                    v-for="(column, index) in cols"
                    :style="getCellStyle(column)" 
                    :key="index">
                    {{sums[index]}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TableColGroup from './table-col-group.vue';

    export default {
        name: 'v2-table-footer',
        props: {
            type: {
                type: String,
                default: 'normal' // normal/left/right
            },

            cols: Array
        },

        inject: ['table'],

        data () {
            return {
                sums: []
            };
        },

        watch: {
            cols () {
                this.sums.length === 0 && this.computedSums();
            }
        },

        methods: {
            getRowStyle () {
                const style = {};

                if (!isNaN(parseInt(this.table.rowHeight, 10))) {
                    style.height = parseInt(this.table.rowHeight, 10) + 'px';
                }

                return style;
            },

            getCellStyle (col) {
                const style = {};
                
                style['text-align'] = ['left', 'center', 'right'].indexOf(col.align) > -1 ? col.align : 'center';

                return style;
            },
            
            computedSums () {
                if (typeof this.table.summaryMethod === 'function') {
                    const res = this.table.summaryMethod({
                        columns: this.table.columns,
                        data: this.table.data
                    });
                    if (Array.isArray(res)) {
                        this.sums = [].concat(res.slice(0, this.cols.length));
                        return;
                    }
                }

                const sums = [];
                this.cols.forEach((column, index) => {
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
            }
        },

        mounted () {
            if (this.cols.length) {
                this.computedSums();
            }
        },

        components: {
            TableColGroup
        }
    };
</script>