<template>
    <div class="v2-table" ref="table">
        <div class="v2-table__table-wrapper">
            <div class="v2-table__table-container" ref="container">
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
                        <table-col-group :columns="columns" v-if="data && data.length"></table-col-group>
                        <div class="v2-table__table-tbody" v-if="data && data.length">
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
                            :style="{width: (contentWidth - 2) + 'px', minHeight: bodyHeight <= 100 ? '175px' : bodyHeight + 'px'}">
                            <slot name="empty">
                                <div class="v2-table__empty-default">
                                    <empty-icon></empty-icon>
                                    <span class="v2-table__empty-text" v-text="emptyText"></span>
                                </div>
                            </slot>
                        </div>
                    </div>
                </div>

                <div :class="[
                    'v2-table-fixed',
                    'v2-table__fixed-left'
                ]" v-if="leftColumns.length > 0" :style="{width: leftContainerWidth + 'px'}">
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
                    <div class="v2-table-fixed__body-wrapper">
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
                </div>

                <div :class="[
                    'v2-table-fixed',
                    'v2-table__fixed-right'
                ]" v-if="rightColumns.length > 0" :style="{width: (rightContainerWidth + 2) + 'px'}">
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
                    <div class="v2-table-fixed__body-wrapper">
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
            <div class="v2-table__pagination-box" v-if="shownPagination && total > 0">
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
    import ScrollBar from '../scrollbar/index';

    import TableHeader from './table-header.vue';
    import TableColGroup from './table-col-group.vue';
    import TableRow from './table-row.vue';
    import EmptyIcon from './empty-icon.vue';

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

            shownPagination: {
                type: Boolean,
                default: false
            },

            height: {
                type: [Number, String],
                default: 'auto'
            },

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
                hoverRowIndex: -1,

                containerWith: 0,
                bodyHeight: 100,
                sort: {
                    prop: '',
                    order: ''
                },

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
                }
            },

            total (val) {
                if (val > 0 && this.shownPagination) {
                    this.computedTotalPage();
                }
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
            },

            isValidNumber (number) {
                return isNaN(parseInt(number, 10));
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
            this.containerWith = this.$el.clientWidth;
            const columnComponents = this.$slots.default
                .filter(column => column.componentInstance && column.componentInstance.$options.name === 'v2-table-column')
                .map(column => column.componentInstance);
            
            const normalColumnComponents = columnComponents.filter(column => (!['left', 'right'].includes(column.fixed) || this.isValidNumber(column.width)));
            const fixedLeftColumnComponents = columnComponents.filter(column => (column.fixed === 'left' && !this.isValidNumber(column.width)));
            const fixedRightColumnComponents = columnComponents.filter(column => (column.fixed === 'right' && !this.isValidNumber(column.width)));

            this.columns = [].concat(fixedLeftColumnComponents, normalColumnComponents, fixedRightColumnComponents);
            this.leftColumns = [].concat(fixedLeftColumnComponents);
            this.rightColumns = [].concat(fixedRightColumnComponents);
            this.rows = [].concat(this.data);

            // Whether scroll event binding table-container element or table-body element
            if (this.leftColumns.length || this.rightColumns.length || (this.bodyHeight > 100 && this.height !== 'auto')) {
                this.isContainerScroll = false;
            }

            if (this.total > 0 && this.shownPagination) {
                this.computedTotalPage();
            }
            
            this.$nextTick(() => {
                const container = this.isContainerScroll ? this.$refs.container : this.$refs.body;
                const contentWidth = Math.max(this.$refs.content.offsetWidth, this.$refs.content.scrollWidth);
                const contentHeight = Math.max(this.$refs.content.offsetHeight, this.$refs.content.scrollHeight);

                this.scrollbar = new ScrollBar(container, {
                    contentWidth,
                    contentHeight,
                    callBack: this.updateHeaderWrapScrollLeft,
                    fixedColumnWidth: this.leftContainerWidth
                });
            });
        },

        components: {
            TableHeader,
            TableRow,
            EmptyIcon,
            TableColGroup
        },

        beforeDestroy () {
            this.scrollbar && this.scrollbar.destroy();
        }
    };
</script>
