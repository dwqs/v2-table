<template>
    <tr :class="getRowClass()">
        <table-cell
            v-for="(column, index) in columns"
            :row="row"
            :column="column"
            :key="index">
        </table-cell>
    </tr>
</template>

<script>
    import TableCell from './table-cell';

    export default {
        props: {
            columns: {
                type: Array,
                default: () => []
            },

            row: {
                type: Object,
                default: () => {}
            },

            index: [String, Number]
        },

        inject: ['table'],

        methods: {
            getRowClass () {
                const cls = ['v2-table__row'];
                if (this.table.stripe && (this.index + 1) % 2 === 0) {
                    cls.push('v2-table__row-striped');
                }
                return cls.join(' ');
            }
        },

        components: {
            TableCell
        }
    };
</script>
