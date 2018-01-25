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
            width: Number,
            sortable: {
                type: Boolean,
                default: false
            }
        }
    };
</script>
