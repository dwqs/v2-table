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
      handleSortChange( {prop, order}) {
        // Customize your sorting method.
        const list = this.list2.sort((item1, item2) => {
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
        this.list2 = [].concat(list);
      },

      getRowClassName ({row, rowIndex}) {
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
</style>

## Dev demo

:::demo 当 `v2-table` 元素中注入 `data` 对象数组后，在 `v2-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。

```html
<template>
  <v2-table :data="list2" border :default-sort='{prop: "date", order: "descending"}' @sort-change="handleSortChange">
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date" sortable></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay" sortable></v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age" sortable></v2-table-column>
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
<!-- ## Basic table/基础表格

Basic table is just for data display./基础的表格展示用法。

:::demo 当 `v2-table` 元素中注入 `data` 对象数组后，在 `v2-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。

```html
<template>
  <v2-table :data="list">
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

## Column with width and align/设置列表的宽度和对齐方式

:::demo 设置 `Column` 组件的 `align` 和 `width`

```html
<template>
  <v2-table :data="list">
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
## Table with border/带边框表格
:::demo 设置 Table 组件的 `border` 属性为 `true`。

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

:::demo 设置 Table 组件的 `stripe` 属性为 `true`。

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

:::demo 通过 `Scoped slot` 可以获取到 `row` 的数据，用法参考 demo。。

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

:::demo 设置 Column 组件的 `sortable` 属性为 `true`, 同时在 Table 上监听 `sort-change` 事件, 在事件回调中可以获取当前排序的字段名和排序顺序.

```html
<template>
  <v2-table :data="list2" border :default-sort='{prop: "date", order: "descending"}' @sort-change="handleSortChange">
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
        const list = this.list2.sort((item1, item2) => {
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
        this.list2 = [].concat(list);
      }
    }    
  }
</script>
```
:::

## Table with status/带状态表格

:::demo 指定 Table 组件的 `row-class-name` 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。

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

:::demo 默认的空数据形态，可以通过 `empty slot` 来自定义 -->

```html
<template>
  <v2-table :data="[]" border>
    <!-- <div slot="empty">custom empty</div> -->
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
<!-- ::: -->
