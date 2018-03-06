<script>
  export default {
    data () {
      return {
        list5: [],
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
    },

    mounted () {
      const item = {
          date: '2017-12-02',
          name: '',
          address: 'Shenzhen,China',
          birthDay: '1988-09-08',
          songs: 0,
          province: 'Guangdong',
          city: 'Shenzhen',
          country: 'China',
          age: 30,
          salary: 12000,
          desc: 'no desc'
      };
      const list5 = [];

      for(let i = 0; i < 50; i++) {
        list5.push(Object.assign({}, item, {
          name: `test${i+1}`,
          songs: i+1
        }));
      }

      this.list5 = [].concat(list5);
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
  <v2-table :data="list5" border :lazy-load="true" height="300" unique-field="name" :updated-selection="true">
    <v2-table-column
      type="selection"
      width="45">
    </v2-table-column>
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
:::
