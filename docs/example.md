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
    },

    filters: {
      formatDate (val) {
        return val.replace(/\-/g, '/');
      }
    }
  }
</script>
## Basic table/基础表格

Basic table is just for data display./基础的表格展示用法。

:::demo 当 `v2-table` 元素中注入 `data` 对象数组后，在 `v2-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。

```html
<template>
  <v2-table :data="list">
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address"></v2-table-column>  
  </v2-table>  
</template>

<script>
  export default {
    data() {
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
:::

## Table with border/带边框表格
:::demo 设置 Table 组件的 `border` 属性为 `true`。

```html
<template>
  <v2-table :data="list" border>
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date"></v2-table-column>
    <v2-table-column label="Address" prop="address"></v2-table-column>  
  </v2-table>  
</template>

<script>
  export default {
    data() {
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
:::