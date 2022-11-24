import './newsSection.scss';
import { useMemo } from 'react';
import circle from '../../icons/circle.png';

const NewsSection = ({
  error,
  setPageNews, 
  setPageArticl, 
  setPage,
  choicebut,
  filter,
  setChoiceBut, 
  endedarticl, 
  endednews,
  ended, 
  setActive, 
  active ,
  setFilter, 
  loading, 
  limit, 
  page ,
  setLoading , 
  setEnded, 
  setAllNews,  
  setError,  
  allnews,  
  pagearticl,  
  setEndedArticl, 
  setArticl, 
  articl, 
  pageNews ,
  setEndedNews, 
  setNews, 
  news }) => {

 const result = () => {
  switch (filter) {
    case 'Всі':
      return  allnews
    case 'Новини':
      return news
    case 'Статті':
      return articl 
    default:
      break;
  }
 }
 const final = useMemo(() => {
 return result()
 }, [filter, allnews, articl, news])

 const fail = error ? '...Помилка завантаження': null;

const differentPage = () => {
if (filter === 'Всі') {
  setPage(page => page + 1)
} else if( filter === 'Новини'){
  setPageNews(pageNews => pageNews + 1)
} else if(filter === 'Статті'){
  setPageArticl(pagearticl => pagearticl + 1)
}
}

const liNews = filter === 'Новини' ?  <li 
                                      style ={{display: endednews ? 'none' : 'block'}} 
                                      onClick={() => differentPage()}
                                      className={`news__load`}>
                                      <img 
                                      className={`news__circle ${loading ? 'rotate' : null}`} 
                                      src={circle} 
                                      alt="circle" />
                                      Завантажити ще
                                      </li>  : null
  const liAllNews = filter === 'Всі' ?  <li 
                                      style ={{display: ended ? 'none' : 'block'}} 
                                      onClick={() => differentPage()}
                                      className={`news__load`}>
                                      <img 
                                      className={`news__circle ${loading ? 'rotate' : null}`} 
                                      src={circle} 
                                      alt="circle" />
                                      Завантажити ще
                                      </li>  : null  
  const liArticl = filter === 'Статті' ?  <li 
                                      style ={{display: endedarticl ? 'none' : 'block'}} 
                                      onClick={() => differentPage()}
                                      className={`news__load`}>
                                      <img 
                                      className={`news__circle ${loading ? 'rotate' : null}`} 
                                      src={circle} 
                                      alt="circle" />
                                      Завантажити ще
                                      </li>  : null 
  return(
    <section className="news">
      <div className="container">
        <aside className="news__panel">

         <div className="news__allnews">
          <h1 className="news__newsall">Всі новини</h1>
          <div className="news__arch"><a href="#">Архів</a></div>
         </div>

         <div className="news__choicebut">
          {
            choicebut.map(({content, id}, i) => {
              return <div onClick={(e) => {setFilter(e.target.textContent); setActive(id)}} key={content} className={`news__item ${ active == i + 1 ? 'activechoice': null}`}>{content}</div>
            })
          }
         </div>

         <ul className="news__list">
          {
            final.map(({content, id, time}) => {
              return(
                <li key={id} className="news__li">
                  <div className="news__litimedes">
                    <span>{time}</span>
                    <a href="#">{content}</a>
                  </div>
                  <hr/>
              </li>
              )
            })
          }
          {fail}
         </ul>
         {liNews}
        {liAllNews}
        {liArticl}
        </aside>
      </div>
    </section>
  )
}

export default NewsSection;