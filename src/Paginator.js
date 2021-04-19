import React, {useState} from 'react'
import "./styles.css"

export function PaginatorTable(props) {
  
  const {options=[1], items=[], title, headers=[], btnColor="#333", activeBtnColor="#f5f5f5", activeIconColor="#fff"} = props
  const [limit, setLimit] = useState(options[0])
  const [page, setPage] = useState(0) 

  const optionsrow = options?.map(el => { 
    return <option value={el}>{el}</option>
  }) 
  const paginrows = Array.apply(null, { 
    length: (items.length%limit)===0?(items.length/limit):(items.length/limit)+1 
  }).map((el,i) => {
    return <div 
      className={i===page&&'active'} 
      onClick={() => setPage(i)}
      style={i===page?{background:activeBtnColor, color:activeIconColor}:{}}
    >
      {i+1}
    </div>
  }) 
  const productsrow = items
  .slice(limit*page,(limit*page+limit))
  .map(el => {
    return <tr> {
        Object.keys(el).map((key) => {
          return <td>{el[key]}</td> 
        })
      } </tr>
  })
  const headersrow = Object.keys(headers).map((key) => {
    return <th>{headers[key]}</th> 
  })
  
  return (
    <div className="atomics-app">
      <div className="container">
        <div>
        <header>
          <h4>{title}</h4>
        </header>
        <div className="tablecont">
        <table>
          <thead>
            <tr>
              {headersrow} 
            </tr>
          </thead>
          <tbody>
            {productsrow}
          </tbody>
        </table>
        </div>
        </div>
        <footer>
        <div className="paginateactions">
          <div onClick={() => setPage(0)} style={{background:btnColor}}><i className="fal fa-fast-backward"></i></div>
          <div onClick={() => page>0&&setPage(prev => prev-1)} style={{background:btnColor}}><i className="fal fa-backward"></i></div>
          <div className="paginator">
            {paginrows}
          </div>
          <div onClick={() => page<(paginrows.length-1)&&setPage(prev => prev+1)} style={{background:btnColor}}><i className="fal fa-forward"></i></div>
          <div onClick={() => setPage(paginrows.length-1)} style={{background:btnColor}}><i className="fal fa-fast-forward"></i></div>
        </div>
        <div className="paginateinfo">
          <label> 
            <h6>Show</h6>
            <select onChange={(e) => e.target.value*page>items.length?setPage(0,setLimit(e.target.value)):setLimit(e.target.value)}>
              {optionsrow} 
            </select>
            <h6>per page</h6>
          </label>
          <small>Showing {productsrow.length} of {items.length}</small>
        </div>
        </footer>
      </div>
    </div>
  )
}