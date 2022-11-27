import { Link } from "react-router-dom";
import circle from '../../icons/circle.png';
import { useEffect, useState } from "react";

const AsideNews = ({loading, ended, error, setPage, page, data, getFilter }) => {
  const [filter, setFilter] = useState('Всі');
  const [choicebut, setChoiceBut] = useState([
    {content: 'Всі', id: 1},
    {content: 'Новини', id: 2},
    {content: 'Статті', id: 3}
  ])

  useEffect(() => {
    getFilter(filter)
  },[filter])

  const failOrNo = error ? 'Виникла помилка' : 'Завантажити ще';

  return(
    <aside className="news__panel">
       <div className="news__allnews">
        <h1 className="news__newsall">Всі новини</h1>
        <div className="news__arch"><a href="#">Архів</a></div>
      </div>

      <div className="news__choicebut">
        {
          choicebut.map(({content, id}) => {
            return <div onClick={(e) => {setFilter(e.target.textContent)}} key={content} className={`news__item ${ filter == content ? 'activechoice': null}`}>{content}</div>
          })
        }
      </div>

      <ul className="news__list">
      {
        data.map(({content, path, id, time}) => {
          return(
            <li key={id} className="news__li">
              <div className="news__litimedes">
                <span>{time}</span>
                <Link to={path + id}>{content}</Link>
              </div>
              <hr/>
          </li>
          )
        })
      } 
      </ul>
      <div style ={{display: ended ? 'none' : 'block'}} onClick={() => setPage(page => page + 1)} className={`news__load`}>
        <img className={`news__circle ${loading ? 'rotate' : null}`} src={circle} alt="circle" />
        {failOrNo}
      </div>  
  </aside>
  )
}
export default AsideNews;