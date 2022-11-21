import './newsSection.scss';
import { useState, useEffect, useMemo } from 'react';
import useNewsService from '../../services/NewsService';
import circle from '../../icons/circle.png';

const NewsSection = () => {
  const [choicebut, setChoiceBut] = useState([
    {content: 'Всі', id: 1},
    {content: 'Новини', id: 2},
    {content: 'Статті', id: 3}
  ])

  const [filter, setFilter] = useState('Всі');
  const [allnews, setAllNews] = useState([]);
  const [articl, setArticl] = useState([]);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [active, setActive] = useState(1);
  const [ended, setEnded] = useState(false);
  const {getAllNews, getArticl, getNews} = useNewsService()

const setDataNewsAll = () => {

    setLoading(true)
    getAllNews(limit, page)
    .then((res) => {
      if (res.length < 10) {
        setEnded(true)
      }
      setAllNews([...allnews, ...res]);
      setLoading(false)
    })
    .catch(() => setError(true))
}
const setDataArticl = () => {
    setLoading(true)
    getArticl(limit, page)
    .then((res) => {
      setArticl([...articl, ...res]);
      setLoading(false);
    })
    .catch(() => setError(true))
}
const setDataNews = () => {
    setLoading(true)
    getNews(limit, page)
    .then((res) => {
      setNews([...news, ...res]);
      setLoading(false);
    })
    .catch(() => setError(true))
}

  useEffect(() => {
    setDataNewsAll();
    setDataArticl();
    setDataNews();
  },[page])

 const result = () => {
  switch (filter) {
    case 'Всі':
      return allnews
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
          <li style ={{display: ended ? 'none' : null}} onClick={() => {setPage(page => page + 1)}} className={`news__load`}><img className={`news__circle ${loading ? 'rotate' : null}`} src={circle} alt="circle" />Завантажити ще</li>
         </ul>

        </aside>
      </div>
    </section>
  )
}

export default NewsSection;