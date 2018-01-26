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

<style>
  .custom-display-date {
    width: 100px;
    padding: 2px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
  }
</style>
## Basic table/基础表格

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
