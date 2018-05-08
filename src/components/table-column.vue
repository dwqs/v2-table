<template>
    <div v-if="false">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v2-table-column',
        props: {
            label: String,
            prop: String,
            width: [Number, String],
            type: String,
            sortable: {
                type: Boolean,
                default: false
            },
            fixed: {
                type: String,
                default: '' // left/right
            }, 
            align: {
                type: String,
                default: 'center',
                validator: (val) => ['left', 'center', 'right'].indexOf(val) > -1
            },
            renderHeader: [Function]
        }
    };
</script>