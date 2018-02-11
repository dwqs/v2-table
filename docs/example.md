<script>
  export default {
    data () {
      return {
        loading: false,
        currentPage: 1,
        total: 198,
        paginationInfo: {
          text: '<span>Total of <strong>198</strong>, <strong>10</strong> per page</span>'
        },
        list4: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30,
          salary: 12000,
          desc: 'no desc'
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40,
          salary: 10000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        },{
          date: '2018-01-02',
          name: 'test4',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test5',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test6',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test7',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test8',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test9',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test10',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }],
        list: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }],
        list2: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }],
        list3: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }, {
          date: '2017-10-10',
          name: 'test4',
          address: 'Changsha,Hunan',
          birthDay: '1997-12-08',
          songs: 20,
          province: 'Hunan',
          city: 'Changsha',
          country: 'China',
          age: 25
        }]
      }
    },

    filters: {
      formatDate (val) {
        return val.replace(/\-/g, '/');
      }
    },

    methods: {
      handlePageChange(page) {
        this.currentPage = page;
        this.loading = true;
        let start = (page - 1) * 10 + 1;

        const list = this.list4.map(item => {
          return Object.assign({}, item, {
            name: `test${start++}`
          });
        });

        setTimeout(() => {
          this.loading = false;
          this.list4 = [].concat(list);
        }, 2000);  
      },

      handleSortChange( {prop, order}) {
        // Customize your sorting method.
        this.loading = true;
        let list = [].concat(this.list2);
        list.sort((item1, item2) => {
          let val1 = '';
          let val2 = '';

          if (prop === 'date') {
            val1 = new Date(item1[prop]).getTime();
            val2 = new Date(item2[prop]).getTime();
            if (order === 'descending') {
              return val2 < val1 ? -1 : 1
            }
            return val1 < val2 ? -1 : 1
          }

          if (prop === 'songs' || prop === 'age') {
            val1 = item1[prop];
            val2 = item2[prop]
            if (order === 'descending') {
              return val2 < val1 ? -1 : 1
            }
            return val1 < val2 ? -1 : 1
          }
        });
        setTimeout (() => {
          this.loading = false;
          this.list2 = [].concat(list);
        }, 2000);
      },

      getRowClassName ({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },

      handleSelectChange (rows) {
        console.log(rows);
      }
    }
  }
</script>

<style>
  .custom-display-date {
    width: 100px;
    padding: 2px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
  .warning-row {
    background: oldlace;
  }
  .success-row {
    background: #f0f9eb;
  }
  strong {
    color: #333;
  }
</style>

<!-- ## Dev demo

:::demo 当 `v2-table` 元素中注入 `data` 对象数组后，在 `v2-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。

```html
<template>
  <v2-table :data="list4" border :show-summary="true" height="300">
    <v2-table-column label="Date" prop="date" ></v2-table-column>
    <v2-table-column label="Name" prop="name" width="100" fixed="left"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs" width="100" fixed="right"></v2-table-column>
    <v2-table-column label="Province" prop="province" width="120"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age" width="90"></v2-table-column>
    <v2-table-column label="Salary" prop="salary"></v2-table-column>
    <v2-table-column label="Desc" prop="desc"></v2-table-column>
  </v2-table> 
</template>
```
::: -->

## Basic table/基础表格

Basic table is just for data display./基础的表格展示用法。

:::demo  After setting attribute `data` of `v2-table` with an object array, you can use `prop` in `v2-table-column` to insert data to table columns, and set the attribute `label` to define the column name. / 当 `v2-table`元素中注入 `data` 对象数组后，在 `v2-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。\n sdas

```html
<template>
    <v2-table  :data="list">
        <v2-table-column label="Name" prop="name"></v2-table-column>
        <v2-table-column label="Date" prop="date"></v2-table-column>
        <v2-table-column label="Address" prop="address"></v2-table-column>
        <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
        <v2-table-column label="Songs" prop="songs"></v2-table-column>
        <v2-table-column label="Province" prop="province"></v2-table-column>
        <v2-table-column label="City" prop="city"></v2-table-column>
        <v2-table-column label="Country" prop="country"></v2-table-column>
        <v2-table-column label="Age" prop="age"></v2-table-column>
    </v2-table>    
</template>

<script>
    export  default  {
        data  ()  {
            return  {
                list:  [{
                    date:  '2017-12-02',
                    name:  'test1',
                    address:  'Shenzhen,China',
                    birthDay:  '1988-09-08',
                    songs:  100,
                    province:  'Guangdong',
                    city:  'Shenzhen',
                    country:  'China',
                    age:  30
                },  {
                    date:  '2017-11-02',
                    name:  'test2',
                    address:  'Guangzhou,China',
                    birthDay:  '1978-09-08',
                    songs:  98,
                    province:  'Guangdong',
                    city:  'Guangzhou',
                    country:  'China',
                    age:  40
                },  {
                    date:  '2018-01-02',
                    name:  'test3',
                    address:  'Shaoyang,Hunan',
                    birthDay:  '1998-12-08',
                    songs:  80,
                    province:  'Hunan',
                    city:  'Shaoyang',
                    country:  'China',
                    age:  20
                }]
            }
        }
    }
</script>
```
:::

## Column with width and align/设置列表的宽度和对齐方式

:::demo  Set attribute `width` and `align` of `v2-table-column` / 设置 `Column` 组件的 `align` 和 `width`

```html
<template>
    <v2-table  :data="list">
        <v2-table-column  label="Name"  prop="name"></v2-table-column>
        <v2-table-column  label="Date"  prop="date"></v2-table-column>
        <v2-table-column  label="Address"  prop="address"  width="150"  align="right"></v2-table-column>
        <v2-table-column  label="Birthday"  prop="birthDay"></v2-table-column>
        <v2-table-column  label="Songs"  prop="songs"></v2-table-column>
        <v2-table-column  label="Province"  prop="province"></v2-table-column>
        <v2-table-column  label="City"  prop="city"></v2-table-column>
        <v2-table-column  label="Country"  prop="country"  align="left"></v2-table-column>
        <v2-table-column  label="Age"  prop="age"></v2-table-column>
    </v2-table>    
</template>

<script>
    export  default  {
        data  ()  {
            return  {
                list:  [{
                    date:  '2017-12-02',
                    name:  'test1',
                    address:  'Shenzhen,China',
                    birthDay:  '1988-09-08',
                    songs:  100,
                    province:  'Guangdong',
                    city:  'Shenzhen',
                    country:  'China',
                    age:  30
                },  {
                    date:  '2017-11-02',
                    name:  'test2',
                    a ddress: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }]
      }
    }
  }
</script>
```
:::
## Table with border/带边框表格
:::demo  Set attribute `border` of `v2-table`. / 设置 Table 组件的 `border` 属性为 `true`。

```html
<template>
  <v2-table :data="list" border>
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150" align="right"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country" align="left"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
  </v2-table>  
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }]
      }
    }
  }
</script>
```
:::

## Striped Table/带斑马纹表格
Using striped table can distinguish different rows./使用斑马纹表格可以区分不同的数据。

:::demo Set attribute `stripe` of `v2-table`. / 设置 Table 组件的 `stripe` 属性为 `true`。

```html
<template>
  <v2-table :data="list" border stripe>
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150" align="right"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country" align="left"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
  </v2-table>  
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }]
      }
    }
  }
</script>
```
:::

## Custom column template/自定义列模板
Custom the display content of the column/自定义列表的显示内容

:::demo You have access to the following data: row by [Scoped slot](https://vuejs.org/v2/guide/components.html#Scoped-Slots). / 通过 `Scoped slot` 可以获取到 `row` 的数据，用法参考 demo。

```html
<template>
  <v2-table :data="list" border stripe>
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date" width="110">
      <template slot-scope="row">
        <div class="custom-display-date">{{row.date | formatDate}}</div> 
      </template>
    </v2-table-column>
    <v2-table-column label="Address" prop="address" width="150" align="right"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay" width="110">
      <template slot-scope="row">
        <div class="custom-display-date">{{row.birthDay | formatDate}}</div> 
      </template>
    </v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country" align="left"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
  </v2-table>  
</template>

<script>
  export default {
    data () {
      return {
        list: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }]
      }
    },
    filters: {
      formatDate (val) {
        return val.replace(/\-/g, '/');
      }
    }
  }
</script>
```
:::

## Sorting/排序
Sort the data to find or compare data quickly./对表格进行排序，可快速查找或对比数据。

:::demo Set attribute `sortable` of `v2-table-column`, and listen to `sort-change` event on Table. In event handler, you have access to the sorting column and sorting order so that you can fetch sorted table data from API. And custom loading component by `loading slot`. / 设置 Column 组件的 `sortable` 属性为 `true`, 同时在 Table 上监听 `sort-change` 事件, 在事件回调中可以获取当前排序的字段名和排序顺序. 可以通过 `loading slot` 来自定义就 Loading 组件

```html
<template>
  <v2-table :data="list2" border :loading="loading" :default-sort='{prop: "date", order: "descending"}' @sort-change="handleSortChange">
    <!-- <div slot="loading">custom loading component</div> -->
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date" sortable></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150" align="right"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs" sortable></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country" align="left"></v2-table-column>
    <v2-table-column label="Age" prop="age" sortable></v2-table-column>
  </v2-table>  
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        list2: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }]
      }
    },

    methods: {
      handleSortChange( {prop, order}) {
        // Customize your sorting method. Maybe it will get data from server.
        this.loading = true;
        let list = [].concat(this.list2);
        list.sort((item1, item2) => {
          let val1 = '';
          let val2 = '';

          if (prop === 'date') {
            val1 = new Date(item1[prop]).getTime();
            val2 = new Date(item2[prop]).getTime();
            if (order === 'descending') {
              return val2 < val1 ? -1 : 1
            }
            return val1 < val2 ? -1 : 1
          }

          if (prop === 'songs' || prop === 'age') {
            val1 = item1[prop];
            val2 = item2[prop]
            if (order === 'descending') {
              return val2 < val1 ? -1 : 1
            }
            return val1 < val2 ? -1 : 1
          }
        });
        setTimeout (() => {
          this.loading = false;
          this.list2 = [].concat(list);
        }, 2000);
      }
    }    
  }
</script>
```
:::

## Table with status/带状态表格

:::demo Use `row-class-name` in `v2-table` to add custom classes to a certain row. / 指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。

```html
<template>
  <v2-table :data="list3" border :row-class-name="getRowClassName">
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
  </v2-table>  
</template>

<script>
  export default {
    data () {
      return {
        list3: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20
        }, {
          date: '2017-10-10',
          name: 'test4',
          address: 'Changsha,Hunan',
          birthDay: '1997-12-08',
          songs: 20,
          province: 'Hunan',
          city: 'Changsha',
          country: 'China',
          age: 25
        }]
      }
    },
    methods: {
      getRowClassName ({row, rowIndex}) {
        // should return a string
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    }
  }
</script>
```
:::

## Empty Data/空数据

:::demo Default mode when data is empty, and you can custom empty component by `empty slot`. / 默认的空数据形态，可以通过 `empty slot` 来自定义

```html
<template>
  <v2-table :data="[]" border>
    <!-- <div slot="empty">custom empty component</div> -->
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
  </v2-table>  
</template>
```
:::

## Pagination/分页

:::demo Paging through the table data, and set attribute `shownPagination` and `total` of `v2-table`,  / 对 Table 数据进行分页展示, 需要设置 Table 组件的 `shownPagination` 属性为 `true`，并将总数据量传给 `total` 属性.

```html
<template>
  <v2-table :data="list4" border 
    :loading="loading" 
    :total="total"
    :shown-pagination="true"
    :pagination-info="paginationInfo"
    @page-change="handlePageChange">
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
    <v2-table-column label="Salary" prop="salary"></v2-table-column>
    <v2-table-column label="Desc" prop="desc"></v2-table-column>
  </v2-table>    
</template>

<script>
  export default {
    data () {
      return {
        currentPage: 1,
        total: 198,
        loading: false,
        paginationInfo: {
          text: '<span>Total of <strong>198</strong>, <strong>10</strong> per page</span>'
        },
        list4: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30,
          salary: 12000,
          desc: 'no desc'
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40,
          salary: 10000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        },{
          date: '2018-01-02',
          name: 'test4',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test5',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test6',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test7',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test8',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test9',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test10',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }]
      }
    },

    methods: {
      handlePageChange(page) {
        this.currentPage = page;
        this.loading = true;
        let start = (page - 1) * 10 + 1;

        const list = this.list4.map(item => {
          return Object.assign({}, item, {
            name: `test${start++}`
          });
        });

        setTimeout(() => {
          this.loading = false;
          this.list4 = [].concat(list);
        }, 2000);  
      }
    }
  }
</script>  
```
:::

## Fixed Header/固定表头

:::demo Set attribute `height` of `v2-table`. / 给 Table 组件设置一个 `height` 属性即可.

```html
<template>
  <v2-table :data="list4" border 
    height="300">
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
    <v2-table-column label="Salary" prop="salary"></v2-table-column>
    <v2-table-column label="Desc" prop="desc"></v2-table-column>
  </v2-table>    
</template>

<script>
  export default {
    data () {
      return {
        list4: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30,
          salary: 12000,
          desc: 'no desc'
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40,
          salary: 10000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        },{
          date: '2018-01-02',
          name: 'test4',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test5',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test6',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test7',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test8',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test9',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test10',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }]
      }
    }
  }
</script>  
```
:::

## Fixed columns and header/固定列和表头

:::demo Set attribute `fixed` of `v2-table-column`, it accepts `left` or `right` as its value, showing the column on the left or on the right. Attribute `width` of  `v2-table-column` is required for fixed column. / 固定列需要使用 `fixed` 属性，它接受 `left` 或者 `right`，表示左边固定还是右边固定。固定的列需要指定宽度。

```html
<template>
  <v2-table :data="list4" border
    height="300"
    :total="total"
    :loading="loading"
    @page-change="handlePageChange"
    :pagination-info="paginationInfo"
    :shown-pagination="true">
    <v2-table-column label="Date" prop="date" ></v2-table-column>
    <v2-table-column label="Name" prop="name" width="100" fixed="left"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs" width="100" fixed="right"></v2-table-column>
    <v2-table-column label="Province" prop="province" width="120"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
    <v2-table-column label="Salary" prop="salary"></v2-table-column>
    <v2-table-column label="Desc" prop="desc"></v2-table-column>
  </v2-table>  
</template>

<script>
  export default {
    data () {
      return {
        currentPage: 1,
        total: 198,
        loading: false,
        paginationInfo: {
          text: '<span>Total of <strong>198</strong>, <strong>10</strong> per page</span>'
        },
        list4: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30,
          salary: 12000,
          desc: 'no desc'
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40,
          salary: 10000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        },{
          date: '2018-01-02',
          name: 'test4',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test5',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test6',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test7',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test8',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test9',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test10',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }]
      }
    },

    methods: {
      handlePageChange(page) {
        this.currentPage = page;
        this.loading = true;
        let start = (page - 1) * 10 + 1;

        const list = this.list4.map(item => {
          return Object.assign({}, item, {
            name: `test${start++}`
          });
        });

        setTimeout(() => {
          this.loading = false;
          this.list4 = [].concat(list);
        }, 2000);  
      }
    }
  }
</script> 
```
:::

## Multiple select/多选

:::demo Add an `v2-table-column` with its `type` set to `selection`. / 单独添加一个 `v2-table-column`，将其 `type` 属性为 `selection` 即可.

```html
<template>
  <v2-table :data="list4" border
    @select-change="handleSelectChange">
    <v2-table-column
      type="selection"
      width="45">
    </v2-table-column>
    <v2-table-column label="Date" prop="date" ></v2-table-column>
    <v2-table-column label="Name" prop="name" width="100"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs" width="100"></v2-table-column>
    <v2-table-column label="Province" prop="province" width="120"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age"></v2-table-column>
    <v2-table-column label="Salary" prop="salary"></v2-table-column>
    <v2-table-column label="Desc" prop="desc"></v2-table-column>
  </v2-table> 
</template>

<script>
  export default {
    data () {
      return {
        list4: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30,
          salary: 12000,
          desc: 'no desc'
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40,
          salary: 10000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        },{
          date: '2018-01-02',
          name: 'test4',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test5',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test6',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test7',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test8',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test9',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test10',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }]
      }
    },

    methods: {
      handleSelectChange (rows) {
        console.log(rows);
      }
    }
  }
</script> 
```
:::

## Summary row/表尾合计行

:::demo You can add the summary row by setting `show-summary` to `true`. / 将 `show-summary`设置为 `true` 就会在表格尾部展示合计行。

```html
<template>
  <v2-table :data="list4" border :show-summary="true" height="300">
    <v2-table-column label="Date" prop="date" ></v2-table-column>
    <v2-table-column label="Name" prop="name" width="100" fixed="left"></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay"></v2-table-column>
    <v2-table-column label="Songs" prop="songs" width="100" fixed="right"></v2-table-column>
    <v2-table-column label="Province" prop="province" width="120"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age" width="90"></v2-table-column>
    <v2-table-column label="Salary" prop="salary"></v2-table-column>
    <v2-table-column label="Desc" prop="desc"></v2-table-column>
  </v2-table> 
</template>

<script>
  export default {
    data () {
      return {
        list4: [{
          date: '2017-12-02',
          name: 'test1',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 100,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30,
          salary: 12000,
          desc: 'no desc'
        }, {
          date: '2017-11-02',
          name: 'test2',
          address: 'Guangzhou,China',
          birthDay: '1978-09-08',
          songs: 98,
          province: 'Guangdong',
          city: 'Guangzhou',
          country: 'China',
          age: 40,
          salary: 10000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test3',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        },{
          date: '2018-01-02',
          name: 'test4',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test5',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test6',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test7',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test8',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test9',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }, {
          date: '2018-01-02',
          name: 'test10',
          address: 'Shaoyang,Hunan',
          birthDay: '1998-12-08',
          songs: 80,
          province: 'Hunan',
          city: 'Shaoyang',
          country: 'China',
          age: 20,
          salary: 30000,
          desc: 'no desc'
        }]
      }
    }
  }
</script> 
```
:::