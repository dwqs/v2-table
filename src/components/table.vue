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
                    <table-header :columns="columns"></table-header>
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
                containerWith: 0
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

        mounted () {
            this.containerWith = this.$el.clientWidth;
            const columnComponents = this.$slots.default
                .filter(column => column.componentInstance)
                .map(column => column.componentInstance);

            console.log('22222', columnComponents);
            this.columns = [].concat(columnComponents);
            this.rows = [].concat(this.data);
        },

        components: {
            TableHeader,
            TableRow
        }
    };
</script>
