<template>
    <div v-if="false">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'v2-table-column',
        props: {
            label: {
                type: String,
                required: true
            },
            prop: {
                type: String,
                required: true
            },
            width: {
                type: [Number, String],
                default: 90
            },
            sortable: {
                type: Boolean,
                default: false
            },
            align: {
                type: String,
                default: 'center',
                validator: (val) => ['left', 'center', 'right'].indexOf(val) > -1
            }
        }
    };
</script>
