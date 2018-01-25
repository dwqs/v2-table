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
        props: ['columns', 'row'],
        components: {
            TableCell
        },
        methods: {
            getRowClass () {
                const cls = ['v2-table__body-row'];
                return cls.join(' ');
            }
        }
    };
</script>
