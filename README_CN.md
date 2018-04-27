[![build pass](https://api.travis-ci.org/dwqs/v2-table.svg?branch=master)](https://travis-ci.org/dwqs/v2-table?branch=master) ![npm-version](https://img.shields.io/npm/v/v2-table.svg) ![license](https://img.shields.io/npm/l/v2-table.svg)

# v2-table
A simple table component based Vue 2.x.

## 安装

npm:

```
npm i --save v2-table beautify-scrollbar
```
yarn:

```
yarn add  v2-table beautify-scrollbar
```
## 快速开始

```
import Vue from 'vue';

import 'beautify-scrollbar/dist/index.css'; 
import 'v2-table/dist/index.css'; 
import V2Table from 'v2-table';

Vue.use(V2Table)
```

```
<template>
  <v2-table :data="list">
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address"></v2-table-column>  
  </v2-table>  
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China'
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China'
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan'
        }, {
          date: '2017-10-02',
          name: 'test4',
          address: 'Changsha,Hunan'
        }]
      }
    }
  }
</script>
```

查看更多 [demo](https://dwqs.github.io/v2-table).

## 可选属性

### v2-table 组件

|  属性  |  类型  |  可选值  |  默认值  |  描述  |
|  :--:  |  :--:  |  :--:  |  :--:  |  :--:  |
| data | Object[] | - | [] | 表格数据 |
| border | Boolean | - | false | 是否显示边框 |
| stripe | Boolean | - | false | 是否为斑马纹 table |
| loading | Boolean | - | false | 是否显示加载动画，可结合异步加载数据时使用 |
| empty-text | String | - | No Data | 数据为空时的默认文本. 可通过 `empty slot` 自定义改组件 |
| default-sort | Object | `order`: ascending/descending |如果只指定了 `prop`, 没有指定 `order`, 则默认顺序是 `ascending` | 默认的排序列的 `prop` 和顺序, 它的`prop` 属性指定默认的排序的列，`order` 指定默认排序的顺序 |
| row-class-name | String/Function({row, rowIndex}) | - | - | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 |
| pagination-info | Object | - | { text: '', pageSize: 10, nextPageText: 'Next', prevPageText: 'Prev' } | 显示分页信息 |
| shown-pagination | Boolean | - | false | 是否显示分页，如果要显示分页，必须同时设置 `total` 属性 |
| total | Number | - | 0 | 表格的总数据量，结合分页使用 |
| height | Number/String | - | auto | 表格高度，可用于固定表头 |
| row-height | Number/String | - | 40 | 行高 |
| show-summary | Boolean | - | false | 是否在表尾显示合计行 |
| sum-text | String | - | Sum | 合计行第一列的文本 |
| summary-method | Function({ columns, data }) | - | - | 自定义的合计计算方法 |
| lazy-load | Boolean | - | false | 是否开启懒加载 |
| col-height | Number/String | - | 40 | 表头列高度 |

### Table Events

|  事件名 |  描述  |  参数 |
|  :--:  |  :--:  |  :--: |
| sort-change | 当表格的排序条件发生变化的时候会触发该事件 | { prop, order } |
| page-change | 当表格的分页发生变化的时候会触发该事件 | currentPage |
| select-change | 当选择项发生变化时会触发该事件 | rows |

### Table Methods
|  事件名 |  描述  |  参数 |
|  :--:  |  :--:  |  :--: |
| toggleRowSelection | 用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中） | row, selected |
| updateScrollbar | 更新 table 的 scrollbar 配置 | - |

### Table Slot

|  名称  |  描述  |
|  :--:  |  :--:  |
| empty| 自定义表格的空组件 |
| loading | 自定义 loading 组件，和 `loading` 属性结合使用 | 

### v2-table-column 组件

|  属性  |  类型  |  可选值  |  默认值  |  描述  |
|  :--:  |  :--:  |  :--:  |  :--:  |  :--:  |
| label | String | - | - | 显示的标题 |
| prop | String | - | - | 对应列内容的字段名 |
| width | String/Number | - | - | 对应列宽 |
| sortable | Boolean | true/false | false | 对应列是否可以排序 |
| align | String | left/center/right | center | 对应列的对齐方式 |
| fixed | String | left/right | - | 列是否固定在左侧或者右侧 |
| type | String | - | - | 对应列的类型。如果设置了 `selection` 则显示多选框 |
| render-header | Function(h, { column }) | - | - | 列标题 Label 区域渲染使用的 Function |

## Development

```js
git clone git@github.com:dwqs/v2-table.git

cd v2-table

npm i 

npm run dev
```

## LICENSE
MIT
