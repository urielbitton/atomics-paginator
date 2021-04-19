# React Table Paginator

A powerful, simple, flexible and customizable paginator for react html tables


### Features

- Paginate tables
- Customize number of elements per page
- Auto pagination detection
- Highly customizable (see list of class names below)
- Super simple implementation (get started quickly)
- Responsive
- Mobile friendly

### Important links:

-   [Code Sandbox playground](https://codesandbox.io/s/atomics-paginator-jt1mt)

### Demo

<https://csb-jt1mt.vercel.app//>


Customize it yourself:

-   Codesandbox: <https://codesandbox.io/s/atomics-paginator-jt1mt>

### Installing as a package

`npm i react-atomics-paginator`

### Usage

```javascript 
import React from 'react';
import PaginatorTable from 'react-atomics-paginator/src'

export default function MyTable() {

    <PaginatorTable 
      options={[5,7,11]} 
      items={products}
      headers={['SKU','Product','Price','Stock','Rating']}
      title="Products"
      btnColor="#5628ee"
      iconColor="#fff"
      activeBtnColor="#f1f1f1"
      activeIconColor="#333"
    />

    const products = [
    {
      sku: 2440,
      name: 'Winter Coat',
      price: 500,
      stock: 'In Stock',
      rating: 4
    },
    {
      sku: 2441,
      name: 'Hat',
      price: 100,
      stock: 'In Stock',
      rating: 4
    },
    {
      sku: 2442,
      name: 'Summer Jacket',
      price: 300,
      stock: 'Out Stock',
      rating: 5
    },
    {
      sku: 2443,
      name: 'Jeans',
      price: 600,
      stock: 'Out Stock',
      rating: 4
    },
    {
      sku: 2444,
      name: 'Pants',
      price: 700,
      stock: 'In Stock',
      rating: 3
    },
    {
      sku: 2445,
      name: 'Shoes',
      price: 340,
      stock: 'In Stock',
      rating: 2
    },
    //...more objects here...
  ]

})

```


### Props

- options: Array of numbers that will give the option to display # of elements by that given number 
           (Add 'all' as last element to provide the option to display all elements on one page.)

- items: Array of elements in the table (see example code)
- headers: Array of table titles that will go inside th html tags
- title: String that will be displayed as the title of the table
- btnColor: String of table buttons colors (for more specificity, use class names provided below)
- iconColor: String of table icon colors
- activeBtnColor: String that targets the active pagination button background color
- activeIconColor: String that targets the active pagination icon color

### Customizing


### Contributing

The [contributing guide](https://github.com/urielbitton/atomics-paginator) contains details on how to create pull requests and setup your dev environment.

=======================

## License

MIT Standard License

```

```
