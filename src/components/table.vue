<template>
    <div class="v2-table" ref="table">
        <div class="v2-table__table-wrapper">
            <div class="v2-table__table-container">
                <div :class="[
                    'v2-table__table-content',
                    {
                        'v2-table__table-border': border
                    }
                ]" :style="{width: contentWidth + 'px'}">
                    <table-header :columns="columns" :sort="sort"></table-header>
                    <div class="v2-table__table-tbody">
                        <table-row 
                            v-for="(row, index) in rows" 
                            :key="index" 
                            :row="row"
                            :index="index" 
                            :columns="columns">
                        </table-row>
                    </div>
                </div>
            </div>
        </div>
        <div v-show="false">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import '../style/index.less';

    import TableHeader from './table-header.vue';
    import TableRow from './table-row.vue';

    export default {
        name: 'v2-table',
        props: {
            data: {
                type: Array,
                default: () => [],
                required: true
            },

            defaultSort: {
                type: Object,
                default: () => {
                    return {
                        prop: '',
                        order: 'ascending' // ['ascending', 'descending']
                    };
                }
            },

            border: {
                type: Boolean,
                default: false
            },

            stripe: {
                type: Boolean,
                default: false
            }
        },

        provide () {
            return {
                table: this
            };
        },

        data () {
            return {
                rows: [],
                columns: [],
                containerWith: 0,
                sort: {
                    prop: '',
                    order: ''
                }
            };
        },

        computed: {
            contentWidth () {
                let bodyMinWidth = 0;
                this.columns.forEach(column => {
                    const colWidth = isNaN(parseInt(column.width)) ? 95 : parseInt(column.width);
                    bodyMinWidth = bodyMinWidth + colWidth;
                });

                return bodyMinWidth < this.containerWith ? this.containerWith : bodyMinWidth;
            }
        },

        watch: {
            data (val) {
                this.rows = [].concat(val);
            }
        },

        methods: {
            sortChange (col) {
                const { prop } = col;
                let order = 'ascending';

                if (this.sort.prop === prop) {
                    order = this.sort.order === 'descending' ? 'ascending' : 'descending';
                }

                this.sort = Object.assign({}, {
                    prop: prop,
                    order: order
                });
            },

            resetDataOrder (prop, order) {
                // reset data order
                this.$emit('sort-change', { prop, order });
            }
        },

        created () {
            this.sort = Object.assign({}, this.defaultSort, {
                order: this.defaultSort.order || 'ascending'
            });
        },

        mounted () {
            this.containerWith = this.$el.clientWidth;
            const columnComponents = this.$slots.default
                .filter(column => column.componentInstance)
                .map(column => column.componentInstance);

            console.log('22222', columnComponents, this.defaultSort);
            this.columns = [].concat(columnComponents);
            this.rows = [].concat(this.data);
            // this.$nextTick(() => {
            //     this.table.resetDataOrder(col.prop, order);
            // });
        },

        components: {
            TableHeader,
            TableRow
        }
    };
</script>
