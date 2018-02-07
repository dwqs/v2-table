<template>
    <div class="v2-table__col-group">
        <div v-for="(column, index) in columns" 
            :key="index"
            :style="getColStyle(column)">
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

            getColStyle (col) {
                const style = {};

                if (typeof col.width !== undefined && !isNaN(parseInt(col.width))) {
                    style.width = `${parseInt(col.width, 10)}px`;
                }
                
                style.textAlign = ['left', 'center', 'right'].indexOf(col.align) > -1 ? col.align : 'center';
                
                return style;
            }
        }
    };
</script>
