import React, {useState} from 'react'

export default function PaginatorTable(props) {

  const {
    options=[1], 
    items=[], 
    title,
    headers=[]
  } = props

  const [limit, setLimit] = useState(options[0])
  const [page, setPage] = useState(0) 

  //select box to choose number of elements per page
  const optionsrow = options?.map(el => { 
    if(el==='all') {
      return <option value={items.length}>{el}</option> 
    }
    else {
      return <option value={el}>{el}</option>
    }
  }) 

  //pagination number boxes
  const paginrows = Array.apply(null, { 
    length: ((items.length)%limit)===0?((items.length)/limit):((items.length)/limit)+1
  }).map((el,i) => {
    if((i+1)===1 || Math.abs(i-page) < 2 || (i+1)===(((items.length)%limit)===0?((items.length)/limit):((items.length)/limit)+1)) {
    return <div 
      className={`${i===page&&'active'}`} 
      onClick={() => setPage(i)}
    >
      {i+1}
    </div>  
    }
    else if((i===1 || i>(page+1)) && (i===(items.length) || (i<page+3))) { 
      return <div><small>...</small></div>
    }
  })

  //output of table tr rows
  const itemsrow = items
  ?.slice(parseInt((limit*page),10),(parseInt((limit*page),10)+parseInt(limit,10)))
  .map(el => {
    return <div className="tr"> {
      Object.keys(el).map((key,i) => {
        return <div className="td">{el[key]}</div>
      })}</div>
  })

  //output of table th headers
  const headersrow = Object.keys(headers).map((key) => {
    return <div className="th">{headers[key]}</div> 
  })
  
  return (
      <div className="rap-container">
        <div>
        <div className="header">
          <h4>{title}</h4>
        </div>
        <div>
        <div className="table hidescroll">
          <div className="thead">
            <div className="tr">
              {headersrow} 
            </div>
          </div>
          <div className="tbody">
            {itemsrow}
          </div>
        </div>
        </div>
        </div>
        <div className="footer">
        <div className="paginateactions">
          <div className="paginatorcont">
            <div 
              onClick={() => page>0&&setPage(prev => prev-1)}
              className={`${!page>0&&"faded"}`}
            >
              <small><i className="fad fa-angle-left"></i></small>
            </div>
            <div className="paginator">
              {paginrows}
            </div>
            <div 
              onClick={() => page<(paginrows.length-1)&&setPage(prev => prev+1)} 
              className={`${page<paginrows.length-1?"":"faded"}`}
            >
              <small><i className="fad fa-angle-right"></i></small>
            </div>
          </div> 
          <label className="appselect">
            <h6>Show: </h6>
            <select onChange={(e) => e.target.value*page>items.length?setPage(0,setLimit(e.target.value)):setLimit(e.target.value)}>
              {optionsrow} 
            </select>
          </label>
        </div>
        <div className="paginateinfo">
          <small>Showing {itemsrow.length} of {items.length}</small>
        </div>
        </div> 
      </div>
  )
}