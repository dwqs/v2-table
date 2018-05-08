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
                <checkboxList v-if="selectionColumn.length > 0" 
                    :column="selectionColumn" 
                    :left="scrollLeft"
                    :hoverRowIndex="hoverRowIndex" 
                    :top="scrollTop">
                </checkboxList>
                <!-- header -->
                <!-- :style="{width: isContainerScroll ? contentWidth + 'px' : '100%'}" -->
                <div class="v2-table__header-wrapper" ref="header" >
                    <table-header
                        :style="{ width: bodyWidth + 'px' }"
                        :columns="columns" 
                        :sort="sort"
                        :border="border">
                    </table-header>
                </div>

                <!-- body -->
                <!-- width: isContainerScroll ? contentWidth + 'px' : '100%', -->
                <!-- :style="{ height: bodyHeight > VOEWPORT_MIN_HEIGHT ? bodyHeight + 'px' : 'auto'}" -->
                <!-- :style="{width: !isContainerScroll ? contentWidth + 'px' : '100%', marginTop: contentMarginTop + 'px'}" -->
                <div class="v2-table__body-wrapper" ref="body">
                    <table-body
                        v-if="data && data.length > 0"
                        :style="{ width: bodyWidth + 'px' }" 
                        :border="border"
                        :columns="columns" 
                        :hoverRowIndex="hoverRowIndex"
                        :rows="rows">
                    </table-body>
                    <div v-else 
                        :style="{ width: bodyWidth + 'px' }" 
                        :class="{
                            'v2-table__empty-data': true,
                            'v2-table__empty-border': border
                        }">
                        <slot name="empty">
                            <div class="v2-table__empty-default">
                                <empty-icon></empty-icon>
                                <span class="v2-table__empty-text" v-text="emptyText"></span>
                            </div>
                        </slot>
                    </div>
                </div>
                
                <!-- footer -->
                <!-- :style="{width: isContainerScroll ? contentWidth + 'px' : '100%'}" -->
                <div class="v2-table__footer-wrapper" ref="footer">
                    <table-footer
                        v-if="showSummary" 
                        v-show="data && data.length > 0" 
                        type="normal" 
                        :columns="columns" 
                        :border="border">
                    </table-footer>
                </div>

                <!-- fixed left -->
                <div :class="[
                    'v2-table-fixed',
                    'v2-table__fixed-left',
                    {
                        'v2-table-fixed__left-empty-border': border && !data.length,
                        'v2-table-fixed__left-with-border': border && data.length
                    }
                ]" v-if="leftColumns.length > 0" 
                :style="[{width: fixedLeftWidth + 'px', left: scrollLeft + 'px', marginLeft: selectionColumn ? selectionColumn.width + 'px' : 0}, fixedBottom]">
                    <!-- header -->
                    <div class="v2-table-fixed__header-wrapper" ref="leftHeader">
                        <table-header
                            :style="{ width: fixedLeftWidth + 'px' }"
                            :columns="leftColumns" 
                            :sort="sort"
                            :border="border">
                        </table-header>
                    </div>

                    <!-- body -->
                    <div :class="[
                        'v2-table-fixed__body-wrapper'
                    ]" ref="leftBody">
                        <table-body
                            v-if="data && data.length > 0"
                            :style="{ width: fixedLeftWidth + 'px' }" 
                            :border="border"
                            :hoverRowIndex="hoverRowIndex"
                            :columns="leftColumns" 
                            :rows="rows">
                        </table-body>
                    </div>

                    <!-- footer -->
                    <div class="v2-table-fixed__footer-wrapper" ref="leftFooter">
                        <table-footer 
                            v-if="showSummary" 
                            v-show="data && data.length > 0"
                            type="left" 
                            :columns="columns" 
                            :border="border" >
                        </table-footer>
                    </div>
                </div>

                <!-- fixed right -->
                <div :class="[
                    'v2-table-fixed',
                    'v2-table__fixed-right',
                    {
                        'v2-table-fixed__right-empty-border': border && !data.length,
                        'v2-table-fixed__right-with-border': border && data.length
                    }
                ]" v-if="rightColumns.length > 0"
                :style="[{width: (fixedRightWidth + 1) + 'px', right: -scrollLeft + 'px'}, fixedBottom]">
                     <!-- header -->
                    <div class="v2-table-fixed__header-wrapper" ref="rightHeader">
                        <table-header
                            :style="{ width: fixedRightWidth + 'px' }"
                            :columns="rightColumns" 
                            :sort="sort"
                            :border="border">
                        </table-header>
                    </div>

                    <!-- body -->
                    <div :class="[
                        'v2-table-fixed__body-wrapper'
                    ]" 
                    ref="rightBody">
                        <table-body
                            v-if="data && data.length > 0"
                            :style="{ width: fixedRightWidth + 'px'}" 
                            :border="border"
                            :hoverRowIndex="hoverRowIndex"
                            :columns="rightColumns" 
                            :rows="rows">
                        </table-body>
                    </div>

                    <!-- footer -->
                    <div class="v2-table-fixed__footer-wrapper" ref="rightFooter">
                        <table-footer 
                            v-if="showSummary" 
                            v-show="data && data.length > 0"
                            type="right" 
                            :columns="rightColumns" 
                            :border="border">
                        </table-footer>
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
    import debounce from '../debounce';

    import TableHeader from './table-header.js';
    import TableBody from './table-body.js';
    import TableFooter from './table-footer.js';
    import EmptyIcon from './empty-icon.vue';
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

            cellHeight: {
                type: [Number, String],
                default: 44
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

            height: [Number, String],

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
            const rh = Number.parseInt(this.cellHeight, 10);

            return {
                rows: [],
                columns: [],
                leftColumns: [],
                rightColumns: [],
                selectionColumn: [],

                // row select status
                selectedIndex: [],
                isAll: false,
                isIndeterminate: false,
                hoverRowIndex: -1,

                // the size of wrapper        
                containerWidth: 0,
                containerHeight: 0,

                // table body width
                bodyWidth: undefined,
                flexColumnIndexs: undefined,

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
                contentHeight: undefined,
                bodyHeight: undefined, // this.VOEWPORT_MIN_HEIGHT,
                contentMarginTop: 0,
                scrollTop: 0,
                scrollLeft: 0
            };
        },

        computed: {
            fixedLeftWidth () {
                return this.getFixedContainerWidth(this.leftColumns);
            },

            fixedRightWidth () {
                return this.getFixedContainerWidth(this.rightColumns);
            },

            isMetLazyLoad () {
                return this.lazyLoad && !this.shownPagination && this.bodyHeight > this.VOEWPORT_MIN_HEIGHT;
            },

            tbodyHeight () {
                return Math.ceil(this.bodyHeight / this.rh) * this.rh;
            },

            fixedBottom () {
                return this.data.length ? {} : { bottom: 0 };
            }
        },

        watch: {
            data: {
                deep: true,
                immediate: true,
                handler (val, oldVal) {
                    if (this.isMetLazyLoad) {
                        this.initRenderRows();
                        this.updateScrollbar();
                    } else {
                        this.rows = [].concat(val);
                        if (!oldVal) {
                            this.updateScrollbar();
                        } else if (val.length !== oldVal.length) {
                            this.updateScrollbar();
                        }
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
                            contentWidth: this.bodyWidth
                            // contentWidth: this.$refs.content.scrollWidth,
                            // contentHeight: this.isMetLazyLoad ? this.contentHeight : this.$refs.content.scrollHeight
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
                    containerWidth += column.$realWidth;
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
                this.$emit('sort-change', { order, prop });
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
                const { header, leftBody, rightBody, footer } = this.$refs;
                
                // if (!this.isContainerScroll) {
                //     header.scrollLeft = ele.scrollLeft;
                // }

                if (this.leftColumns.length) {
                    leftBody.scrollTop = ele.scrollTop;
                }

                if (this.rightColumns.length > 0) {
                    rightBody.scrollTop = ele.scrollTop;
                }

                if (footer) {
                    footer.scrollLeft = ele.scrollLeft;
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
            },

            updateColumnsWidth (columns = undefined) {
                const MIN_WIDTH = 90;
                let allColumns = [];
                let flexColumnIndexs = [];
                let bodyMinWidth = 0;

                if (!columns) {
                    allColumns = this.$slots.default
                        .filter(column => column.componentInstance && column.componentInstance.$options.name === 'v2-table-column')
                        .map(column => column.componentInstance);
                } else {
                    allColumns = [].concat(columns);
                }
                
                if (!this.flexColumnIndexs) {
                    // 未指定 width 属性的弹性列
                    flexColumnIndexs = allColumns.map((col, index) => {
                        if (this.isValidNumber(col.width)) {
                            return index;
                        }
                        return -1;
                    }).filter(val => val !== -1);
                    this.flexColumnIndexs = [].concat(flexColumnIndexs);
                } else {
                    flexColumnIndexs = [].concat(this.flexColumnIndexs);
                }

                if (!this.bodyMinWidth) {
                    allColumns.forEach(col => {
                        let colWidth = MIN_WIDTH;
                        if (!this.isValidNumber(col.width)) {
                            colWidth = parseInt(col.width, 10);
                            col.$realWidth = colWidth;
                        }
                        bodyMinWidth += colWidth;
                    });
                    this.bodyMinWidth = bodyMinWidth;
                } else {
                    bodyMinWidth = this.bodyMinWidth;
                }

                if (flexColumnIndexs.length) {
                    if (bodyMinWidth <= this.containerWidth) {
                        const totalFlexWidth = this.containerWidth - bodyMinWidth;
                        if (flexColumnIndexs.length === 1) {
                            allColumns[flexColumnIndexs[0]].$realWidth = MIN_WIDTH + totalFlexWidth;
                        } else {
                            const allColumnsWidth = flexColumnIndexs.length * MIN_WIDTH;
                            const flexWidthPerPixel = totalFlexWidth / allColumnsWidth;
                            let noneFirstWidth = 0;

                            flexColumnIndexs.forEach((col, index) => {
                                if (index === 0) {
                                    return;
                                }
                                const flexWidth = Math.floor(MIN_WIDTH * flexWidthPerPixel);
                                noneFirstWidth += flexWidth;
                                allColumns[flexColumnIndexs[index]].$realWidth = MIN_WIDTH + flexWidth;
                            });

                            allColumns[flexColumnIndexs[0]].$realWidth = MIN_WIDTH + totalFlexWidth - noneFirstWidth;
                        }
                    } else {
                        flexColumnIndexs.forEach((col, index) => {
                            allColumns[flexColumnIndexs[index]].$realWidth = MIN_WIDTH;
                        });
                    }
                }

                this.bodyWidth = Math.max(bodyMinWidth, this.containerWidth);
                return allColumns;
            },

            handleWinResize () {
                if (this.$el.clientWidth === this.containerWidth) {
                    return;
                }

                this.containerWidth = this.$el.clientWidth;
                this.containerHeight = this.$el.clientHeight;
                
                this.columns = [].concat(this.updateColumnsWidth(this.columns));
                
                if (this.rightColumns.length) {
                    this.rightColumns = [].concat(this.getColumnComponentsByType(this.columns, 'right'));
                }
                if (this.leftColumns.length) {
                    this.leftColumns = [].concat(this.getColumnComponentsByType(this.columns, 'left'));
                }

                if (this.scrollbar) {
                    this.updateScrollbar();
                }
            }
        },

        created () {
            this.winResize = debounce(this.handleWinResize);
            this.sort = Object.assign({}, this.defaultSort, {
                order: this.defaultSort.order || 'ascending'
            });

            if (this.height && !this.isValidNumber(this.height)) {
                this.bodyHeight = parseInt(this.height, 10) > this.VOEWPORT_MIN_HEIGHT ? parseInt(this.height, 10) : this.VOEWPORT_MIN_HEIGHT;
            }
        },

        mounted () {
            if (!Bus._Vue) {
                throw new Error('[v2-table]: Must be call Vue.use(v2-table) before used');
            }
            
            this.containerWidth = this.$el.clientWidth;
            this.containerHeight = this.$el.clientHeight;

            const columnComponents = this.updateColumnsWidth();

            const selectionColumnComponents = this.getColumnComponentsByType(columnComponents, 'selection');
            const normalColumnComponents = this.getColumnComponentsByType(columnComponents, 'normal');
            const fixedLeftColumnComponents = this.getColumnComponentsByType(columnComponents, 'left');
            const fixedRightColumnComponents = this.getColumnComponentsByType(columnComponents, 'right');

            this.columns = [].concat(selectionColumnComponents, fixedLeftColumnComponents, normalColumnComponents, fixedRightColumnComponents);
            this.leftColumns = [].concat(fixedLeftColumnComponents);
            this.rightColumns = [].concat(fixedRightColumnComponents);
            this.selectionColumn = [].concat(selectionColumnComponents);

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
                this.scrollbar = new BeautifyScrollbar(this.$refs.container, {
                    contentWidth: this.bodyWidth
                });
                this.$refs.container.addEventListener('bs-update-scroll-value', this.updateHeaderWrapScrollLeft, false);
            });
            window.addEventListener('resize', this.winResize, false);
        },

        components: {
            TableHeader,
            TableBody,
            TableFooter,
            EmptyIcon,
            CheckboxList
        },

        beforeDestroy () {
            window.removeEventListener('resize', this.winResize, false);
            this.winResize = null;
            this.scrollbar && this.scrollbar.destroy();
            this.container && this.container.removeEventListener('bs-update-scroll-value', this.updateHeaderWrapScrollLeft, false);
        }
    };
</script>
