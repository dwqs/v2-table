<script>
  export default {
    data () {
      return {
        loading: false,
        currentPage: 1,
        total: 98,
        paginationInfo: {
          text: '<span>Total of <strong>22</strong>, <strong>10</strong> per page</span>'
        },
        devList: [{
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
      handleDevPageChange (page) {
        this.currentPage = page;
        this.loading = true;
        let start = (page - 1) * 10 + 1;

        const list = this.devList.map(item => {
          return Object.assign({}, item, {
            name: `test${start++}`
          });
        });

        setTimeout(() => {
          this.loading = false;
          this.devList = [].concat(list);
        }, 2000);        
      },
      handleDevSortChange ({prop, order}) {
        this.loading = true;
        let list = [].concat(this.devList);
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
          this.devList = [].concat(list);
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

## Dev demo

:::demo 当 `v2-table` 元素中注入 `data` 对象数组后，在 `v2-table-column` 中用 `prop` 属性来对应对象中的键名即可填入数据，用 `label` 属性来定义表格的列名。

```html
<template>
  <v2-table :data="devList" border 
    :loading="loading" 
    :total="total"
    :pagination-info="paginationInfo"
    @page-change="handleDevPageChange"
    @sort-change="handleDevSortChange">
    <v2-table-column label="Name" prop="name"></v2-table-column>
    <v2-table-column label="Date" prop="date" sortable></v2-table-column>
    <v2-table-column label="Address" prop="address" width="150"></v2-table-column>
    <v2-table-column label="Birthday" prop="birthDay" sortable></v2-table-column>
    <v2-table-column label="Songs" prop="songs"></v2-table-column>
    <v2-table-column label="Province" prop="province"></v2-table-column>
    <v2-table-column label="City" prop="city"></v2-table-column>
    <v2-table-column label="Country" prop="country"></v2-table-column>
    <v2-table-column label="Age" prop="age" sortable></v2-table-column>
    <v2-table-column label="Salary" prop="salary"></v2-table-column>
    <v2-table-column label="Desc" prop="desc"></v2-table-column>
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
