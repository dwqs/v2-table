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
            width: {
                type: [Number, String],
                default: 90
            },
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
            }
        }
    };
</script>
