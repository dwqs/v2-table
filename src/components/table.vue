<template>
    <div class="v2-table" ref="table">
        <div class="v2-table__table-wrapper">
            <div class="v2-table__table-container" ref="container">
                <div :class="[
                    'v2-table__table-content',
                    {
                        'v2-table__table-border': border
                    }
                ]" :style="{width: contentWidth + 'px'}" ref="content">
                    <table-header :columns="columns" :sort="sort"></table-header>
                    <div class="v2-table__table-tbody" v-if="data && data.length">
                        <table-row 
                            v-for="(row, index) in rows" 
                            :key="index" 
                            :row="row"
                            :rowIndex="index" 
                            :columns="columns">
                        </table-row>
                    </div>
                    <div class="v2-table__empty-data" v-if="!data || !data.length" :style="{width: (contentWidth - 1) + 'px'}">
                        <slot name="empty">
                            <div class="v2-table__empty-default">
                                <empty-icon></empty-icon>
                                <span class="v2-table__empty-text" v-text="emptyText"></span>
                            </div>
                        </slot>
                    </div>
                </div>
                <div class="v2-table__data-loading" v-if="loading" :style="{left: this.scrollbar ? this.scrollbar.element.scrollLeft + 'px' : 0}">
                    <slot name="loading">
                        <div class="v2-table__loading-spinner">
                            <svg viewBox="25 25 50 50" class="circular"><circle cx="50" cy="50" r="20" fill="none" class="path"></circle></svg>
                        </div>
                    </slot>
                </div>
            </div>
            <div class="v2-table__pagination-box" v-if="shownPagination">
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
    import '../style/index.less';

    import ScrollBar from '../scrollbar/index';

    import TableHeader from './table-header.vue';
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
                default: true
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
                containerWith: 0,
                sort: {
                    prop: '',
                    order: ''
                },
                scrollbar: null,
                curPage: 1,
                totalPage: 1,
                renderPages: []
            };
        },

        computed: {
            contentWidth () {
                let bodyMinWidth = 0;
                this.columns.forEach(column => {
                    const colWidth = isNaN(parseInt(column.width, 10)) ? 95 : parseInt(column.width);
                    bodyMinWidth = bodyMinWidth + colWidth;
                });

                return bodyMinWidth < this.containerWith ? this.containerWith : bodyMinWidth;
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
                this.computedTotalPage();
            }
        },

        methods: {
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
                
                for (let i = 0; i < this.totalPage; i++) {
                    pages.push({
                        page: i + 1,
                        text: i + 1
                    });
                }
                this.renderPages = [].concat(pages);   
            }
        },

        created () {
            this.sort = Object.assign({}, this.defaultSort, {
                order: this.defaultSort.order || 'ascending'
            });
        },

        mounted () {
            this.containerWith = this.$el.clientWidth;
            const columnComponents = this.$slots.default
                .filter(column => column.componentInstance && column.componentInstance.$options.name === 'v2-table-column')
                .map(column => column.componentInstance);

            console.log('22222', columnComponents, this.containerWith);
            this.columns = [].concat(columnComponents);
            this.rows = [].concat(this.data);
            this.computedTotalPage();
            
            this.$nextTick(() => {
                const contentWidth = Math.max(this.$refs.content.offsetWidth, this.$refs.content.scrollWidth);
                const contentHeight = Math.max(this.$refs.content.offsetHeight, this.$refs.content.scrollHeight);

                this.scrollbar = new ScrollBar(this.$refs.container, {
                    contentWidth,
                    contentHeight
                });
            });
        },

        components: {
            TableHeader,
            TableRow,
            EmptyIcon
        }
    };
</script>
