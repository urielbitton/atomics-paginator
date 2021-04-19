import React, {useState} from 'react'
import "./styles.css"

export default function PaginatorTable(props) {
  
  const {
    options=[1], 
    items=[], 
    title,
    headers=[], 
    btnColor="#333", 
    activeBtnColor="#f5f5f5", 
    activeIconColor="#fff",
    backicon="fal fa-backward",
    fastbackicon="fal fa-fast-backward",
    forwardicon="fal fa-forward",
    fastforwardicon="fal fa-fast-forward",
    fastbtns=true,
    textbtns=false,
    fastbacktext="",
    backtext="",
    forwardtext="",
    fastforwardtext="" 
  } = props
  const [limit, setLimit] = useState(options[0])
  const [page, setPage] = useState(0) 

  const optionsrow = options?.map(el => { 
    if(el==='all') {
      return <option value={items.length}>{el}</option> 
    }
    else {
      return <option value={el}>{el}</option>
    }
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
  .slice(parseInt((limit*page),10),(parseInt((limit*page),10)+parseInt(limit,10)))
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
      <div className="rap-container">
        <div>
        <div className="header">
          <h4>{title}</h4>
        </div>
        <div>
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
        <div className="footer">
        <div className="paginateactions">
          <div onClick={() => setPage(0)} style={{background:btnColor, display: fastbtns?"flex":"none"}} className={textbtns&&"textbuttons"}>
            {
              !textbtns?
              <i className={fastbackicon}></i>:
              <h6>{fastbacktext}</h6>
            }
          </div>
          <div onClick={() => page>0&&setPage(prev => prev-1)} style={{background:btnColor}} className={textbtns&&"textbuttons"}>
            {
              !textbtns?
              <i className={backicon}></i>:
              <h6>{backtext}</h6>
            }
          </div>
          <div className="paginator">
            {paginrows}
          </div>
          <div onClick={() => page<(paginrows.length-1)&&setPage(prev => prev+1)} style={{background:btnColor}} className={textbtns&&"textbuttons"}>
            {
              !textbtns?
              <i className={forwardicon}></i>:
              <h6>{forwardtext}</h6>
            }
          </div>
          <div onClick={() => setPage(paginrows.length-1)} style={{background:btnColor, display: fastbtns?"flex":"none"}} className={textbtns&&"textbuttons"}>
            {
              !textbtns?
              <i className={fastforwardicon}></i>:
              <h6>{fastforwardtext}</h6>
            }
          </div>
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
        </div> 
      </div>
  )
}