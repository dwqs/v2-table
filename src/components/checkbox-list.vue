<template>
    <div :class="[
        'v2-checkbox-list-wrap',
        {
            'wrap-border': table.border
        }
    ]" :style="{
        width: column.width + 'px',
        height: '100%',
        left: table.leftColumns.length ? '0' : -left + 'px'
        // borderRight: table.leftColumns.length ? 'none' : '1px solid #dfe6ec'
    }">
        <div class="v2-checkbox-item checked-all" :style="getItemStyle(0)">
            <checkbox :cur-row-index="-1"></checkbox>
        </div>
        <div ref="list" :style="{
                position: 'relative',
                top: '0px',
                height: table.bodyHeight > table.VOEWPORT_MIN_HEIGHT ? table.bodyHeight + 'px' : 'auto',
                overflow: table.bodyHeight > table.VOEWPORT_MIN_HEIGHT ? 'hidden' : 'auto',
            }">
            <ul class="v2-checkbox-list" :style="{height: this.list.length * this.h + 'px'}">
                <li class="v2-checkbox-item" v-for="(row, index) in list" :key="index" :style="getItemStyle(index)">
                    <checkbox :cur-row-index="index" :cur-row="row"></checkbox>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import CheckBox from './checkbox.vue';

    export default {
        props: {
            column: [Object],
            left: {
                type: Number,
                default: 0
            },
            top: {
                type: Number,
                default: 0
            }
        },

        inject: ['table'],

        data () {
            return {
                list: []
            };
        },

        computed: {
            h () {
                return isNaN(parseInt(this.table.colHeight, 10)) ? 40 : `${parseInt(this.table.colHeight, 10)}`;
            }
        },

        watch: {
            top (val, oldVal) {
                this.$refs.list.scrollTop = val;
            },

            'table.data' (val, oldVal) {
                if (oldVal.length !== val.length) {
                    this.list = [].concat(val);
                }
            }
        },

        methods: {
            getItemStyle (index) {
                const style = {};

                style.width = isNaN(parseInt(this.column.width, 10)) ? '45px' : `${parseInt(this.column.width, 10)}px`;
                style.height = isNaN(parseInt(this.table.colHeight, 10)) ? '40px' : `${parseInt(this.table.colHeight, 10)}px`;
                style.textAlign = ['left', 'center', 'right'].indexOf(this.column.align) > -1 ? this.column.align : 'center';
                style.lineHeight = style.height;
                style.top = parseInt(style.height, 10) * index + 'px';

                return style;
            }
        },

        mounted () {
            if (this.table.data.length) {
                this.list = [].concat(this.table.data);
            }
        },

        components: {
            'checkbox': CheckBox
        }
    };
</script>

<style lang="less">
    .v2-checkbox-list-wrap {
        position: absolute;
        z-index: 99;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background: #FFFFFF;
        &.wrap-border {
            border-left: 1px solid #ebeef5;
            border-top: 1px solid #ebeef5;
        }
        &.wrap-border-right {
            border-right: 1px solid #ebeef5
        }
    }
    .v2-checkbox-list {
        position: relative;
        list-style: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .v2-checkbox-item {
        position: absolute;
        box-sizing: border-box;
        border-bottom: 1px solid #ebeef5;
        &.checked-all {
            position: relative;
        }
    }
</style>
