<template>
    <div role="row" :class="[
        getRowClass(), 
        {
            'row-hover': hoverRowIndex === rowIndex
        }
    ]" :style="getRowStyle()" @mouseenter="handleRowHover" @mouseleave="handleRowLeave">
        <table-cell
            v-for="(column, index) in columns"
            :row="row"
            :column="column"
            :rowIndex="rowIndex"
            :key="index">
        </table-cell>
    </div>
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

            rowIndex: [String, Number],
            hoverRowIndex: [String, Number]
        },

        inject: ['table'],

        methods: {
            getRowClass () {
                const cls = ['v2-table__row'];
                if (this.table.stripe && (this.rowIndex + 1) % 2 === 0) {
                    cls.push('v2-table__row-striped');
                }

                // custom row class
                if (typeof this.table.rowClassName !== 'undefined') {
                    const customRowClass = typeof this.table.rowClassName === 'function' ? this.table.rowClassName({ row: this.row, rowIndex: this.rowIndex }) : this.table.rowClassName;
                    cls.push(typeof customRowClass === 'string' ? customRowClass : '');
                }

                return cls.join(' ');
            },

            getRowStyle () {
                const style = {};

                if (!isNaN(parseInt(this.table.rowHeight, 10))) {
                    style.height = parseInt(this.table.rowHeight, 10) + 'px';
                }

                return style;
            },

            handleRowHover (e) {
                this.table.hoverRowIndex = this.rowIndex;
            },

            handleRowLeave () {
                this.table.hoverRowIndex = -1;
            }
        },

        components: {
            TableCell
        }
    };
</script>
