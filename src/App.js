import React from "react"
import {products} from './Products'
import PaginatorTable from "./Paginator"

export default function App() {
 
  return ( 
    <PaginatorTable 
      options={[3,7,11,'all']} 
      items={products}
      headers={['SKU','Product','Price','Stock','Rating']}
      title="Products"
      fastbtns={true}
      textbtns={true}
      backtext="back"
      forwardtext="next"
      fastbacktext="first"
      fastforwardtext="last"
    />
  );
}
