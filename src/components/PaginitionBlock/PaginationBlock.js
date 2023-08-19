import './paginationBlock.scss';
import useNewsService from '../../services/NewsService';
import { useState, useEffect, useMemo } from 'react';
import { paginationData } from '../../dummy data/dummy-data';

const PaginationBlock = () => {

const [dataPolit, setDataPolit] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
const [limit, setLimit] = useState(6);
const [page, setPage] = useState(1);
const [total, setTotal] = useState(0);
const [arrBut, setArrBut] = useState([])

const {getPaginationPolit} = useNewsService();

const getData = () => {
  setLoading(true)
  const res = getPaginationPolit(limit, page)
  setDataPolit(res)
  setTotal(paginationData.length)
  setLoading(false)
}

if (!dataPolit) {
  setError(true)
}

useEffect(() => {
 getData()
},[page])

const pageCount = (total, limit) => {
  return Math.ceil(total / limit)
}

const pageNumber = useMemo(() => {
 return pageCount(total, limit);
},[total, limit]) 

const count = []

 for (let i = 1; i <= pageNumber; i++) {
  count.push(i)
 }

 useEffect(() => {
 
  let tempNumberOfPages = [...arrBut]

  let dotsInitial = '...'
  let dotsLeft = '... '
  let dotsRight = '...'

  if (page >= 1 && page <= 3) {
    tempNumberOfPages = [1, 2, 3, 4, dotsInitial, count.length]

  } else if (page === 4) {
    const sliced = count.slice(0, 5)
    tempNumberOfPages = [...sliced, dotsInitial, count.length]

  } else if (page > 4 && page < count.length - 2) {
    const sliced1 = count.slice(page - 2, page)
    const sliced2 = count.slice(page, page + 1)
    tempNumberOfPages = [1, dotsLeft, ...sliced1, ...sliced2, dotsRight, count.length]

  } else if (page > count.length - 3) {
    const sliced = count.slice(count.length - 4)
    tempNumberOfPages = [1, dotsLeft, ...sliced]

  } else if (page === dotsInitial) {
    setPage(arrBut[arrBut.length - 3] + 1)

  } else if (page === dotsRight) {
    setPage(arrBut[3] + 2)

  } else if (page === dotsLeft) {
    setPage(arrBut[3] - 2)
  }
  setArrBut(tempNumberOfPages)

},[page, pageNumber])

const content = !(loading || error) ?  dataPolit.map(({content, date, src, id}) => {
                                      return (
                                        <div key={id} className="pagin__block">
                                          <div className="pagin__imgwrap">
                                            <a href="#"><img src={src} alt="test" /></a>
                                          </div>
                                          <div className="pagin__date">{date}</div>
                                          <div className="pagin__descr"><a href="#">{content}</a></div>
                                      </div>
                                      )
                                    }) : null
const spinner = loading ? <div className='spinner'>Завантаження...</div>: null
const fail = error ? <div className='spinner'>'Помилка завантаження'</div>: null

  return(
    <div className='pagin'>
      <div className="pagin__flex">
       <div className="pagin__title">Всі новини про політику</div>
        <div className="pagin__wrapcontent">
              {content}
              {spinner}
              {fail}
        </div>
        <div className="pagin__butwrap">
        <button onClick={() => {setPage(page =>  page === 1 ? page : page - 1 )}}  className={page === 1 ? "pagin__prev disabled": "pagin__prev"}>&lt;</button>
        {
          arrBut.map((num,i) => {
            return <button style={{color: num == page ? 'orange' : ''}} onClick={() => {setPage(num); getData()}} key={i} className="pagin__but">{num}</button>
          })
        }
         <button  onClick={() => {setPage(page => page === count.length ? page : page + 1)}} className={page === count.length ? "pagin__prev disabled": "pagin__prev"}>&gt;</button>
      </div>
      </div>
    </div>
  )
}
export default PaginationBlock;