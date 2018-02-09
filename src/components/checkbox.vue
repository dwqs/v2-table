<template>
    <label :class="[
        'v2-checkbox__input',
        {
            'is-indeterminate': table.isIndeterminate && selectIndex === -1,
            'is-checked': selectIndex === -1 ? table.isAll : table.selectedIndex.includes(selectIndex)
        }
    ]">
        <span class="v2-checkbox__inner"></span>
        <input type="checkbox" class="v2-checkbox__original" v-model="val" @change="handleChange">
    </label>
</template>

<script>
    export default {
        name: 'v2-table-checkbox',
        props: {
            selectIndex: {
                type: [Number, String],
                required: true
            }
        },

        data () {
            return {
                val: false
            };
        },

        inject: ['table'],

        methods: {
            handleChange (e) {
                if (this.selectIndex === -1) {
                    this.table.eventBus.$emit('row-select-all', this.val);
                } else {
                    this.table.eventBus.$emit('row-select', this.val, this.selectIndex);
                }
            }
        }
    };
</script>

<style lang="less">
    .v2-checkbox__input {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        background: #fff;
        line-height: 1;
        white-space: nowrap;
        outline: none;
        user-select: none;
        cursor: pointer;
        vertical-align: middle;
        width: 16px;
        height: 16px;
        &.is-checked {
            .v2-checkbox__inner {
                border: 1px solid #ff6200;
                &::after {
                    transform: rotate(45deg) scaleY(1);
                }
            }
        }
        &.is-indeterminate {
           .v2-checkbox__inner {
                background-color:#ff6200;
                border: 1px solid #ff6200;
                &::before {
                    background-color: #fff;
                }
            }
        }
    }
    .v2-checkbox__inner {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 2px;
        border: 1px solid #e1e2e6;
        transition: all .15s cubic-bezier(.71,-.46,.88,.6) .05s;
        &::after {
            position: absolute;
            content: '';
            top: 2px;
            left: 6px;
            height: 8px;
            width: 3px;
            border: 1px solid #ff6200;
            border-left: 0;
            border-top: 0;
            transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
            transform-origin: center;
            transform: rotate(45deg) scaleY(0);
        }
        &::before {
            position: absolute;
            content: '';
            left: 3px;
            right: 0;
            top: 5px;
            height: 2px;
            width: 8px;
            border: none;
            transition: all .15s cubic-bezier(.71,-.46,.88,.6) .05s;
        }
    }
    .v2-checkbox__original {
        opacity: 0;
        outline: none;
        position: absolute;
        margin: 0;
        width: 0;
        height: 0;
        left: -999999px;
    }
</style>
