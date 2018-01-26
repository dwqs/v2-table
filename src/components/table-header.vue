<template>
    <div class="v2-table__table-thead">
        <div class="v2-table__header-row">
            <div v-for="(column, index) in columns" 
                :key="index"
                :style="getColStyle(column)" 
                :class="getColumnClass(column)">
                {{column.label}}
                <span v-if="column.sortable" class="v2-table__caret-wrapper">
                    <i class="v2-table__sort-caret ascending-caret"></i>
                    <i class="v2-table__sort-caret descending-caret"></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            columns: {
                type: Array,
                default: () => []
            }
        },

        methods: {
            getColumnClass (col) {
                const cls = ['v2-table__cell', 'v2-table__column-cell'];
                if (col.sortable) {
                    cls.push('sortable');
                }
                return cls.join(' ');
            },

            getColStyle (col) {
                const style = {};

                if (typeof col.width !== undefined && !isNaN(parseInt(col.width))) {
                    style.width = `${parseInt(col.width)}px`;
                }
                style.textAlign = ['left', 'center', 'right'].indexOf(col.align) > -1 ? col.align : 'center';
                
                return style;
            }
        }
    };
</script>
