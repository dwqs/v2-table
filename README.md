![npm-version](https://img.shields.io/npm/v/v2-table.svg) ![license](https://img.shields.io/npm/l/v2-table.svg)

# v2-table
A simple table component based Vue 2.x.
## Installation

Install the pkg with npm:

```
npm i --save v2-table
```
or yarn

```
yarn add  v2-table
```

## Usage

```
import Vue from 'vue';
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

More demo to visit [here](https://dwqs.github.io/v2-table).

## Available Props

### The v2-table component

|  Attribute  |  Type  |  Accepted Values  |  Default  |  Description  |
|  :--:  |  :--:  |  :--:  |  :--:  |  :--:  |
| data | Array | - | [] | table data |
| border | Boolean | - | false | whether show table border |
| stripe | Boolean | - | false | whether table is striped |

### The v2-table-column component

|  Attribute  |  Type  |  Accepted Values  |  Default  |  Description  |
|  :--:  |  :--:  |  :--:  |  :--:  |  :--:  |
| label | String | - | - | column label |
| prop | String | - | - | field name |

<!-- ## Event

|  Event Name  |  Description  |  Parameters |
|  :--:  |  :--:  |  :--: |
| change | triggers when the selected value changes | component's binding value | -->

## Development

```js
git clone git@github.com:dwqs/v2-table.git

cd v2-table

npm i 

npm run dev
```

## LICENSE
MIT
