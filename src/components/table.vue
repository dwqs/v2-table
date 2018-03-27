<template>
    <div :class="[
        'v2-table',
        {
            'v2-table__striped': stripe
        }
    ]" ref="table">
        <div class="v2-table__table-wrapper">
            <div class="v2-table__table-container" ref="container">
                <!-- 解耦 checkbox 和 table 在DOM结构上的耦合-->
                <checkboxList v-if="selectionColumn" 
                    :column="selectionColumn" 
                    :left="scrollLeft"
                    :top="scrollTop">
                </checkboxList>
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
                <div class="v2-table__body-wrapper" ref="body" :style="{width: isContainerScroll ? contentWidth + 'px' : '100%', height: bodyHeight > VOEWPORT_MIN_HEIGHT ? bodyHeight + 'px' : 'auto'}">
                    <div :class="[
                        'v2-table__body',
                        {
                            'v2-table__border': border,
                            'v2-table__body-border': border
                        }
                    ]" 
                    ref="content" 
                    :style="{width: !isContainerScroll ? contentWidth + 'px' : '100%', marginTop: contentMarginTop + 'px'}">
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
                            :style="{width: contentWidth + 'px', minHeight: bodyHeight <= VOEWPORT_MIN_HEIGHT ? '175px' : bodyHeight + 'px'}">
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
                ]" v-if="leftColumns.length > 0" :style="{width: leftContainerWidth + 'px', marginLeft: selectionColumn ? selectionColumn.width + 'px' : 0}">
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
                    :style="{ height: bodyHeight > VOEWPORT_MIN_HEIGHT ? bodyHeight + 'px' : !data.length ? '175px' : 'auto'}"
                    >
                        <div :class="[
                            'v2-table__body',
                            {
                                'v2-table__border': border,
                                'v2-table__body-border': border
                            }
                        ]" :style="{marginTop: contentMarginTop + 'px'}">
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
                    :style="{ height: bodyHeight > VOEWPORT_MIN_HEIGHT ? bodyHeight + 'px' : !data.length ? '175px' : 'auto'}"
                    >
                        <div :class="[
                            'v2-table__body',
                            {
                                'v2-table__border': border,
                                'v2-table__body-border': border
                            }
                        ]" :style="{marginTop: contentMarginTop + 'px'}">
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
    import BeautifyScrollbar from 'beautify-scrollbar';
    import findIndex from 'lodash.findindex';
    import Bus from '../bus.js';

    import TableHeader from './table-header.js';
    import TableColGroup from './table-col-group.vue';
    import TableRow from './table-row.vue';
    import EmptyIcon from './empty-icon.vue';
    import TableFooter from './table-footer.vue';
    import CheckboxList from './checkbox-list.vue';

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
            // column header height
            colHeight: {
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

            // updatedSelection: {
            //     // whether updated selection row when data is changed.
            //     type: Boolean,
            //     default: false
            // },

            // uniqueField: {
            //     type: String,
            //     default: ''
            // },

            showSummary: {
                type: Boolean,
                default: false
            },

            sumText: {
                type: String,
                default: 'Sum'
            },

            summaryMethod: Function,
            rowClassName: [String, Function],
            lazyLoad: {
                type: Boolean,
                default: false
            }
        },

        provide () {
            return {
                table: this
            };
        },

        data () {
            const ch = Number.parseInt(this.height, 10);
            const rh = Number.parseInt(this.rowHeight, 10);

            return {
                rows: [],
                columns: [],
                leftColumns: [],
                rightColumns: [],
                selectionColumn: null,

                // row select status
                selectedIndex: [],
                isAll: false,
                isIndeterminate: false,
                hoverRowIndex: -1,

                containerWith: 0,
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
                pageDiff: 2,

                // for on demand loading
                VOEWPORT_MIN_HEIGHT: 100,
                ITEM_MIN_HEIGHT: 20,
                rh: (this.isValidNumber(rh) || rh <= this.ITEM_MIN_HEIGHT) ? this.ITEM_MIN_HEIGHT : rh,
                contentHeight: NaN,
                bodyHeight: this.VOEWPORT_MIN_HEIGHT,
                contentMarginTop: 0,
                scrollTop: 0,
                scrollLeft: 0
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
            },

            isMetLazyLoad () {
                return this.lazyLoad && !this.shownPagination && this.bodyHeight > this.VOEWPORT_MIN_HEIGHT;
            },

            tbodyHeight () {
                return Math.ceil(this.bodyHeight / this.rh) * this.rh;
            }
        },

        watch: {
            data: {
                deep: true,
                immediate: true,
                handler (val) {
                    if (this.isMetLazyLoad) {
                        this.initRenderRows();
                        if (this.scrollbar) {
                            this.updateScrollbar();
                        }
                    } else {
                        this.rows = [].concat(val);
                    }

                    // if (this.updatedSelection && this.selectedIndex.length > 0) {
                    //     this.emitSelectChange();
                    //     return;
                    // } 

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
            },

            scrollTop (val) {
                if (this.isMetLazyLoad) {
                    this.updateRenderRows();
                }
            }
        },

        methods: {
            // exposed table method 
            toggleRowSelection (row, selected) {
                const curIndex = findIndex(this.rows, row);

                if (curIndex >= 0) {
                    if (typeof selected === 'undefined') {
                        this.toggleSelect(curIndex);
                    } else {
                        if (selected) {
                            this.toggleSelect(curIndex);
                        } else if (!selected && this.selectedIndex.includes(curIndex)) {
                            this.handleRowSelect(false, curIndex);
                        }
                    }
                }
            },

            updateScrollbar () {
                if (this.scrollbar) {
                    this.$nextTick(() => {
                        this.scrollbar.update({
                            contentWidth: this.$refs.content.scrollWidth,
                            contentHeight: this.isMetLazyLoad ? this.contentHeight : this.$refs.content.scrollHeight
                        });
                    });
                }
            },
            // exposed table method --end

            toggleSelect (rowIndex) {
                if (this.selectedIndex.includes(rowIndex)) {
                    this.handleRowSelect(false, rowIndex);
                } else {
                    this.handleRowSelect(true, rowIndex);
                }
            },

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
            updateHeaderWrapScrollLeft () {
                const ele = this.scrollbar.element;
                if (!this.isContainerScroll) {
                    this.$refs.header.scrollLeft = ele.scrollLeft;
                }

                if (this.leftColumns.length) {
                    this.$refs.leftBody.scrollTop = ele.scrollTop;
                }

                if (this.rightColumns.length > 0) {
                    this.$refs.rightBody.scrollTop = ele.scrollTop;
                }

                if (this.$refs.footer) {
                    this.$refs.footer.scrollLeft = ele.scrollLeft;
                }
                
                this.scrollTop = ele.scrollTop;
                this.scrollLeft = ele.scrollLeft;
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
                        cols = columns.filter(column => (column.fixed === 'left' && column.type !== 'selection'));
                        break;
                    case 'right':
                        cols = columns.filter(column => (column.fixed === 'right' && column.type !== 'selection'));
                        break;  
                    default:
                        cols = columns.filter(column => {
                            return !['left', 'right'].includes(column.fixed) && column.type !== 'selection';
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
                // if (this.uniqueField) {
                //     this.selectedIndex.forEach(item => {
                //         const r = this.data.filter(d => d[this.uniqueField] === item);
                //         rows = [].concat(...rows, ...r);
                //     });
                // } else {
                    
                // }
                // row-index
                this.selectedIndex.forEach(item => {
                    rows.push(this.data[item]);
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
            
                this.isAll = this.selectedIndex.length === this.data.length;
                this.isIndeterminate = this.selectedIndex.length > 0 && !this.isAll;
                this.$nextTick(() => {
                    this.emitSelectChange();
                });
            },

            getAllSelectedRows () {
                if (!this.uniqueField) {
                    return Array.from(Array(this.data.length).keys());
                }
                return this.data.map(item => item[this.uniqueField]);
            },

            handleRowSelectAll (isChecked) {
                this.isAll = isChecked;
                this.isIndeterminate = false;
                this.selectedIndex = isChecked ? this.getAllSelectedRows() : [];
                this.$nextTick(() => {
                    this.emitSelectChange();
                });
            },

            // on demand loading
            initRenderRows () {
                this.contentHeight = Math.ceil(this.data.length * this.rh);
                this.rows = [].concat(this.getRenderRows());
            },

            updateRenderRows () {
                this.rows = [].concat(this.getRenderRows());
            },

            getRenderRows () {
                const list = [];

                const from = Math.floor(this.scrollTop / this.rh); 
                const to = Math.ceil((this.scrollTop + this.tbodyHeight) / this.rh);
                
                for (let i = from; i < to; i++) {
                    if (typeof this.data[i] !== 'undefined') {
                        list.push(Object.assign({}, this.data[i], {
                            __index: i
                        }));
                    }
                }

                this.contentMarginTop = from * this.rh;
                this.from = from;
                this.to = to;
                return list;
            }
        },

        created () {
            this.sort = Object.assign({}, this.defaultSort, {
                order: this.defaultSort.order || 'ascending'
            });

            if (this.height !== 'auto' && !this.isValidNumber(this.height)) {
                this.bodyHeight = parseInt(this.height, 10) > this.VOEWPORT_MIN_HEIGHT ? parseInt(this.height, 10) : this.VOEWPORT_MIN_HEIGHT;
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
            this.leftColumns = fixedLeftColumnComponents.length > 0 ? [].concat(fixedLeftColumnComponents) : [].concat(fixedLeftColumnComponents);
            this.rightColumns = [].concat(fixedRightColumnComponents);
            this.selectionColumn = selectionColumnComponents.length > 0 ? selectionColumnComponents[0] : null;

            if (this.data.length && this.isMetLazyLoad) {
                this.initRenderRows();
            } else if (this.data.length) {
                this.rows = [].concat(this.data);
            }

            // Whether scroll event binding table-container element or table-body element
            if (this.leftColumns.length || this.rightColumns.length || this.bodyHeight > this.VOEWPORT_MIN_HEIGHT) {
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
                this.container = this.isContainerScroll ? this.$refs.container : this.$refs.body;
                this.scrollbar = new BeautifyScrollbar(this.container, {
                    contentWidth: this.$refs.content.scrollWidth,
                    contentHeight: this.isMetLazyLoad ? this.contentHeight : this.$refs.content.scrollHeight
                });
                this.container.addEventListener('bs-update-scroll-value', this.updateHeaderWrapScrollLeft, false);
            });
        },

        components: {
            TableHeader,
            TableRow,
            EmptyIcon,
            TableColGroup,
            TableFooter,
            CheckboxList
        },

        beforeDestroy () {
            this.scrollbar && this.scrollbar.destroy();
            this.container.removeEventListener('bs-update-scroll-value', this.updateHeaderWrapScrollLeft, false);
        }
    };
</script>
