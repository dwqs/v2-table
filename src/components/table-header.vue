<template>
    <thead class="v2-table__table-thead">
        <tr>
            <th v-for="(column, index) in columns" :key="index" :class="getColumnClass(column)">
                {{column.label}}
                <span v-if="column.sortable" class="v2-table__caret-wrapper">
                    <i class="v2-table__sort-caret ascending-caret"></i>
                    <i class="v2-table__sort-caret descending-caret"></i>
                </span>
            </th>
        </tr>
    </thead>
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
                const cls = ['v2-table__column'];
                if (col.sortable) {
                    cls.push('sortable');
                }
                return cls.join(' ');
            }
        }
    };
</script>
