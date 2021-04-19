import React from "react"
import {products} from './Products'
import PaginatorTable from "./Paginator"

export default function App() {
 
  return (
    <PaginatorTable 
      options={[5,7,11]} 
      items={products}
      headers={['SKU','Product','Price','Stock','Rating']}
      title="Products"
      btnColor="#333"
      iconColor="#fff"
      activeBtnColor="#f1f1f1"
      activeIconColor="#333"
      fastbtns={false}
      textbtns={true}
      backtext="back"
      forwardtext="next"
    />
  );
}
