<template>
    <div class="v2-table">
        <div class="v2-table__table-wrapper">
            <div class="v2-table__table-content">
                <table :class="[
                    'v2-table__table',
                    {
                        'v2-table__table-border': border
                    }
                ]" cellspacing="0" cellpadding="0" border="0">
                    <table-header :columns="columns"></table-header>
                    <tbody class="v2-table__table-tbody">
                        <table-row 
                            v-for="(row, index) in rows" 
                            :key="index" 
                            :row="row" 
                            :columns="columns">
                        </table-row>
                    </tbody>
                </table>
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
            }
        },

        data () {
            return {
                rows: [],
                columns: []
            };
        },

        mounted () {
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
