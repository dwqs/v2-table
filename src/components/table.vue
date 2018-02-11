<template>
    <div class="v2-table" ref="table">
        <div class="v2-table__table-wrapper">
            <div class="v2-table__table-container" ref="container">
                <!-- header -->
                <div class="v2-table__header-wrapper" ref="header" :style="{width: isContainerScroll ? contentWidth + 'px' : '100%'}">
                    <div :class="[
                        'v2-table__header',
                        {
                            'v2-table__border': border,
                            'v2-table__header-border': border
                        }
                    ]" 
                    :style="{width: !isContainerScroll ? contentWidth + 'px' : '100%'}">
                        <table-col-group :columns="columns"></table-col-group>
                        <table-header :columns="columns" :sort="sort"></table-header>
                    </div>
                </div>

                <!-- body -->
                <div class="v2-table__body-wrapper" ref="body" :style="{width: isContainerScroll ? contentWidth + 'px' : '100%', height: bodyHeight > 100 ? bodyHeight + 'px' : 'auto'}">
                    <div :class="[
                        'v2-table__body',
                        {
                            'v2-table__border': border,
                            'v2-table__body-border': border
                        }
                    ]" 
                    ref="content" 
                    :style="{width: !isContainerScroll ? contentWidth + 'px' : '100%'}">
                        <table-col-group :columns="columns" v-if="data && data.length > 0"></table-col-group>
                        <div class="v2-table__table-tbody" v-if="data && data.length > 0">
                            <table-row 
                                v-for="(row, index) in rows" 
                                :key="index" 
                                :row="row"
                                :rowIndex="index"
                                :hoverRowIndex="hoverRowIndex" 
                                :columns="columns">
                            </table-row>
                        </div>

                        <!-- Empty data -->
                        <div class="v2-table__empty-data" 
                            v-if="!data || !data.length" 
                            :style="{width: contentWidth + 'px', minHeight: bodyHeight <= 100 ? '175px' : bodyHeight + 'px'}">
                            <slot name="empty">
                                <div class="v2-table__empty-default">
                                    <empty-icon></empty-icon>
                                    <span class="v2-table__empty-text" v-text="emptyText"></span>
                                </div>
                            </slot>
                        </div>
                    </div>
                </div>
                
                <!-- footer -->
                <div class="v2-table__footer-wrapper" ref="footer" :style="{width: isContainerScroll ? contentWidth + 'px' : '100%'}">
                    <table-footer type="normal" :cols="columns" v-if="showSummary" v-show="data && data.length > 0"></table-footer>
                </div>

                <!-- fixed left -->
                <div :class="[
                    'v2-table-fixed',
                    'v2-table__fixed-left'
                ]" v-if="leftColumns.length > 0" :style="{width: leftContainerWidth + 'px'}">
                    <!-- header -->
                    <div class="v2-table-fixed__header-wrapper">
                        <div :class="[
                            'v2-table__header',
                            {
                                'v2-table__border': border,
                                'v2-table__header-border': border
                            }
                        ]">
                            <table-col-group :columns="leftColumns"></table-col-group>
                            <table-header :columns="leftColumns" :sort="sort"></table-header>
                        </div>
                    </div>

                    <!-- body -->
                    <div :class="[
                        'v2-table-fixed__body-wrapper',
                        {
                            'v2-table-fixed__left-empty-border': border && !data.length
                        }
                    ]" 
                    ref="leftBody" 
                    :style="{ height: bodyHeight > 100 ? bodyHeight + 'px' : !data.length ? '175px' : 'auto'}"
                    >
                        <div :class="[
                            'v2-table__body',
                            {
                                'v2-table__border': border,
                                'v2-table__body-border': border
                            }
                        ]">
                            <table-col-group :columns="leftColumns"></table-col-group>
                            <div class="v2-table__table-tbody">
                                <table-row 
                                    v-for="(row, index) in rows" 
                                    :key="index" 
                                    :row="row"
                                    :rowIndex="index" 
                                    :hoverRowIndex="hoverRowIndex" 
                                    :columns="leftColumns">
                                </table-row>
                            </div>
                        </div>
                    </div>

                    <!-- footer -->
                    <div class="v2-table-fixed__footer-wrapper">
                        <table-footer type="left" :cols="leftColumns" v-if="showSummary" v-show="data && data.length > 0"></table-footer>
                    </div>
                </div>

                <!-- fixed right -->
                <div :class="[
                    'v2-table-fixed',
                    'v2-table__fixed-right'
                ]" v-if="rightColumns.length > 0" :style="{width: (rightContainerWidth + 2) + 'px'}">
                    <!-- header -->
                    <div class="v2-table-fixed__header-wrapper">
                        <div :class="[
                            'v2-table__header',
                            {
                                'v2-table__border': border,
                                'v2-table__header-border': border
                            }
                        ]">
                            <table-col-group :columns="rightColumns"></table-col-group>
                            <table-header :columns="rightColumns" :sort="sort"></table-header>
                        </div>
                    </div>

                    <!-- body -->
                    <div :class="[
                        'v2-table-fixed__body-wrapper', 
                        {
                            'v2-table-fixed__right-empty-border': border && !data.length
                        }
                    ]" 
                    ref="rightBody" 
                    :style="{ height: bodyHeight > 100 ? bodyHeight + 'px' : !data.length ? '175px' : 'auto'}"
                    >
                        <div :class="[
                            'v2-table__body',
                            {
                                'v2-table__border': border,
                                'v2-table__body-border': border
                            }
                        ]">
                            <table-col-group :columns="rightColumns"></table-col-group>
                            <div class="v2-table__table-tbody">
                                <table-row 
                                    v-for="(row, index) in rows" 
                                    :key="index" 
                                    :row="row"
                                    :rowIndex="index" 
                                    :hoverRowIndex="hoverRowIndex" 
                                    :columns="rightColumns">
                                </table-row>
                            </div>
                        </div>
                    </div>

                    <!-- footer -->
                    <div class="v2-table-fixed__footer-wrapper">
                        <table-footer type="right" :cols="rightColumns" v-if="showSummary" v-show="data && data.length > 0"></table-footer>
                    </div>
                </div>

                <!-- Table loading -->
                <div class="v2-table__data-loading" v-if="loading">
                    <slot name="loading">
                        <div class="v2-table__loading-spinner">
                            <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
                        </div>
                    </slot>
                </div>
            </div>
            <div class="v2-table__pagination-box" v-if="shownPagination" v-show="total > 0">
                <div class="pagination-text-info" v-if="paginationInfo.text" v-html="paginationInfo.text"></div>
                <div class="v2-table__pagination" @click="changeCurPage">
                    <span 
                        :class="[
                            'page prev-page',
                            {
                                'disabled': curPage === 1
                            }
                        ]"  
                        data-page="prev"
                    >
                        {{paginationInfo.prevPageText || 'Prev'}}
                    </span>
                    <ul>
                        <li v-for="(item, index) in renderPages" 
                            :key="index" 
                            :data-page="item.page"
                            :class="[
                                'page',
                                {
                                    'cur-page': curPage === item.page
                                }
                            ]"
                        >
                            {{item.text}}
                        </li>
                    </ul>
                    <span 
                        :class="[
                            'page next-page',
                            {
                                'disabled': curPage === totalPage
                            }
                        ]" 
                        data-page="next"
                    >
                        {{paginationInfo.nextPageText || 'Next'}}
                    </span>
                </div>
            </div>
        </div>
        <div v-show="false">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import ScrollBar from '../scrollbar/index.js';
    import Bus from '../bus.js';

    import TableHeader from './table-header.vue';
    import TableColGroup from './table-col-group.vue';
    import TableRow from './table-row.vue';
    import EmptyIcon from './empty-icon.vue';
    import TableFooter from './table-footer.vue';

    export default {
        name: 'v2-table',
        props: {
            data: {
                type: Array,
                default: () => [],
                required: true
            },

            defaultSort: {
                type: Object,
                default: () => {
                    return {
                        prop: '',
                        order: 'ascending' // ['ascending', 'descending']
                    };
                }
            },

            border: {
                type: Boolean,
                default: false
            },

            stripe: {
                type: Boolean,
                default: false
            },

            loading: {
                type: Boolean,
                default: false
            },

            emptyText: {
                type: String,
                default: 'No Data'
            },

            paginationInfo: {
                type: Object,
                default: () => {
                    return {
                        text: '',
                        pageSize: 10,
                        nextPageText: 'Next',
                        prePageText: 'Prev'
                    };
                }
            },

            currentPage: {
                type: Number,
                default: 1
            },

            total: {
                type: Number,
                default: 0
            },

            rowHeight: {
                type: [Number, String],
                default: 40
            },

            shownPagination: {
                type: Boolean,
                default: false
            },

            height: {
                type: [Number, String],
                default: 'auto'
            },

            updatedSelection: {
                // whether updated selection row when data is changed.
                type: Boolean,
                default: false
            },

            showSummary: {
                type: Boolean,
                default: false
            },

            sumText: {
                type: String,
                default: 'Sum'
            },

            summaryMethod: Function,
            rowClassName: [String, Function]
        },

        provide () {
            return {
                table: this
            };
        },

        data () {
            return {
                rows: [],
                columns: [],
                leftColumns: [],
                rightColumns: [],

                // row select status
                selectedIndex: [],
                isAll: false,
                isIndeterminate: false,
                hoverRowIndex: -1,

                containerWith: 0,
                bodyHeight: 100,
                sort: {
                    prop: '',
                    order: ''
                },

                eventBus: null,
                scrollbar: null,
                isContainerScroll: true, // Whether scroll event binding table-container element or table-body element

                curPage: 1,
                totalPage: 1,
                renderPages: [],
                pageDiff: 2
            };
        },

        computed: {
            contentWidth () {
                let bodyMinWidth = 0;
                this.columns.forEach(column => {
                    const colWidth = isNaN(parseInt(column.width, 10)) ? 90 : parseInt(column.width, 10);
                    bodyMinWidth = bodyMinWidth + colWidth;
                });

                return bodyMinWidth < this.containerWith ? this.containerWith : bodyMinWidth;
            },

            leftContainerWidth () {
                return this.getFixedContainerWidth(this.leftColumns);
            },

            rightContainerWidth () {
                return this.getFixedContainerWidth(this.rightColumns);
            }
        },

        watch: {
            data: {
                deep: true,
                immediate: true,
                handler (val) {
                    this.rows = [].concat(val);
                    if (this.updatedSelection && this.selectedIndex.length > 0) {
                        this.emitSelectChange();
                        return;
                    } 

                    if (this.selectedIndex.length > 0) {
                        // reset selection status.
                        this.resetSelection();
                    }
                }
            },

            total (val) {
                if (val > 0 && this.shownPagination) {
                    this.computedTotalPage();
                }
            },

            curPage () {
                this.resetSelection();
            }
        },

        methods: {
            getFixedContainerWidth (columns) {
                let containerWidth = 0;

                columns.forEach(column => {
                    const colWidth = isNaN(parseInt(column.width, 10)) ? 90 : parseInt(column.width, 10);
                    containerWidth = containerWidth + colWidth;
                });

                return containerWidth;
            },

            sortChange (col) {
                const { prop } = col;
                let order = 'ascending';

                if (this.sort.prop === prop) {
                    order = this.sort.order === 'descending' ? 'ascending' : 'descending';
                }

                this.sort = Object.assign({}, {
                    prop: prop,
                    order: order
                });
            },

            resetDataOrder (prop, order) {
                // reset data order
                this.$emit('sort-change', { prop, order });
            },

            changeCurPage (e) {
                let page = e.target.dataset ? e.target.dataset.page : e.target.getAttribute('data-page');

                if (!page) {
                    return;
                }
                if (page === 'prev') {
                    page = (this.curPage - 1) >= 1 ? this.curPage - 1 : 1;
                }

                if (page === 'next') {
                    page = (this.curPage + 1) <= this.totalPage ? (this.curPage + 1) : this.totalPage;
                }

                if (page === this.curPage) {
                    return;
                }

                this.curPage = parseInt(page, 10);
                this.$emit('page-change', parseInt(page, 10));
                
                if (this.totalPage > 7) {
                    this.getRenderPages();
                }
            },

            computedTotalPage () {
                if (isNaN(parseInt(this.total, 10))) {
                    return;
                }
                
                const totalPage = Math.ceil(parseInt(this.total, 10) / (this.paginationInfo.pageSize || 10));
                this.totalPage = totalPage > 1 ? totalPage : 1;                
                this.getRenderPages();
            },

            getRenderPages () {
                const pages = [];
                const middlePage = this.curPage;

                let start = (middlePage - this.pageDiff) > 1 ? middlePage - this.pageDiff : 1;
                let end = (middlePage + this.pageDiff) < this.totalPage ? middlePage + this.pageDiff : this.totalPage;

                start = ((this.totalPage - middlePage) < 3 && this.totalPage - middlePage >= 0) ? (this.totalPage - 5) : start;
                end = (end <= 6 && this.totalPage >= 6) ? 6 : end;

                start = start > 0 ? start : 1;

                for (let i = start; i <= end; i++) {
                    pages.push({
                        page: i,
                        text: i
                    });
                }
                if (start !== 1) {
                    pages.unshift({
                        page: 1,
                        text: start - 1 > 1 ? `...1` : 1
                    });
                }

                if (end !== this.totalPage) {
                    pages.push({
                        page: this.totalPage,
                        text: (this.totalPage - end > 1 && this.totalPage > 7) ? `...${this.totalPage}` : this.totalPage
                    });
                }

                this.renderPages = [].concat(pages);   
            },

            // 固定头部时更改头部的 scroll left
            updateHeaderWrapScrollLeft ({ scrollLeft, scrollTop }) {
                if (!this.isContainerScroll && scrollLeft >= 0) {
                    this.$refs.header.scrollLeft = scrollLeft;
                }

                if (this.leftColumns.length && scrollTop >= 0) {
                    this.$refs.leftBody.scrollTop = scrollTop;
                }

                if (this.rightColumns.length > 0 && scrollTop >= 0) {
                    this.$refs.rightBody.scrollTop = scrollTop;
                }

                if (this.$refs.footer && scrollLeft >= 0) {
                    this.$refs.footer.scrollLeft = scrollLeft;
                }
            },

            isValidNumber (number) {
                return isNaN(parseInt(number, 10));
            },

            getColumnComponentsByType (columns, type) {
                let cols = [];
                switch (type) {
                    case 'selection':
                        cols = columns.filter(column => column.type === 'selection');
                        cols = cols.length > 1 ? [cols[0]] : cols; 
                        break;
                    case 'left':
                        cols = columns.filter(column => (column.fixed === 'left' && !this.isValidNumber(column.width) && column.type !== 'selection'));
                        break;
                    case 'right':
                        cols = columns.filter(column => (column.fixed === 'right' && !this.isValidNumber(column.width) && column.type !== 'selection'));
                        break;  
                    default:
                        cols = columns.filter(column => {
                            return (!['left', 'right'].includes(column.fixed) || this.isValidNumber(column.width)) && column.type !== 'selection';
                        });
                        break;  
                }

                return cols;
            },

            resetSelection () {
                this.selectedIndex = [];
                this.isAll = false;
                this.isIndeterminate = false;
                this.emitSelectChange();
            },

            emitSelectChange () {
                const rows = [];
                this.selectedIndex.forEach(item => {
                    rows.push(this.rows[item]);
                });

                this.$emit('select-change', rows);
            },

            handleRowSelect (isChecked, rowIndex) {
                if (isChecked) {
                    this.selectedIndex.push(rowIndex);
                } else {
                    const delIndex = this.selectedIndex.indexOf(rowIndex);
                    this.selectedIndex.splice(delIndex, 1);
                }
            
                this.isAll = this.selectedIndex.length === this.rows.length;
                this.isIndeterminate = this.selectedIndex.length > 0 && !this.isAll;
                this.emitSelectChange();
            },

            handleRowSelectAll (isChecked) {
                this.isAll = isChecked;
                this.isIndeterminate = false;
                this.selectedIndex = isChecked ? Array.from(Array(this.rows.length).keys()) : [];
                this.emitSelectChange();
            }
        },

        created () {
            this.sort = Object.assign({}, this.defaultSort, {
                order: this.defaultSort.order || 'ascending'
            });

            if (this.height !== 'auto' && !isNaN(parseInt(this.height, 10))) {
                this.bodyHeight = parseInt(this.height, 10) > 100 ? parseInt(this.height, 10) : 100;
            }
        },

        mounted () {
            if (!Bus._Vue) {
                throw new Error('[v2-table]: Must be call Vue.use(v2-table) before used');
            }

            this.containerWith = this.$el.clientWidth;
            const columnComponents = this.$slots.default
                .filter(column => column.componentInstance && column.componentInstance.$options.name === 'v2-table-column')
                .map(column => column.componentInstance);
            
            const selectionColumnComponents = this.getColumnComponentsByType(columnComponents, 'selection');
            const normalColumnComponents = this.getColumnComponentsByType(columnComponents, 'normal');
            const fixedLeftColumnComponents = this.getColumnComponentsByType(columnComponents, 'left');
            const fixedRightColumnComponents = this.getColumnComponentsByType(columnComponents, 'right');

            this.columns = [].concat(selectionColumnComponents, fixedLeftColumnComponents, normalColumnComponents, fixedRightColumnComponents);
            this.leftColumns = fixedLeftColumnComponents.length > 0 ? [].concat(selectionColumnComponents, fixedLeftColumnComponents) : [].concat(fixedLeftColumnComponents);
            this.rightColumns = [].concat(fixedRightColumnComponents);
            this.rows = [].concat(this.data);

            // Whether scroll event binding table-container element or table-body element
            if (this.leftColumns.length || this.rightColumns.length || this.bodyHeight > 100) {
                this.isContainerScroll = false;
            }

            if (this.total > 0 && this.shownPagination) {
                this.computedTotalPage();
            }

            // Listen row click selected event
            if (selectionColumnComponents.length > 0) {
                this.eventBus = Bus.createEventBus();
                this.eventBus.$on('row-select', this.handleRowSelect);
                this.eventBus.$on('row-select-all', this.handleRowSelectAll);
            }
            
            this.$nextTick(() => {
                const container = this.isContainerScroll ? this.$refs.container : this.$refs.body;

                this.scrollbar = new ScrollBar(container, {
                    contentWidth: this.$refs.content.scrollWidth,
                    contentHeight: this.$refs.content.scrollHeight,
                    callBack: this.updateHeaderWrapScrollLeft
                });
            });
        },

        components: {
            TableHeader,
            TableRow,
            EmptyIcon,
            TableColGroup,
            TableFooter
        },

        beforeDestroy () {
            this.scrollbar && this.scrollbar.destroy();
        }
    };
</script>
