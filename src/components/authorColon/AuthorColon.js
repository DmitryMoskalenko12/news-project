import './authorColon.scss';
import { useState, useEffect } from 'react';
import useNewsService from '../../services/NewsService';
import circle from '../../icons/circle.png';

const AuthorColon = () => {
  const [authorData, setAuthorData] = useState([]);
  const [limitColon, setLimitColon] = useState(4);
  const [pageColon, setPageColon] = useState(1);
  const [authorEnded, setAuthorEnded] = useState(false);
  const [authorLoading, setAuthorLoading] = useState(true);
  const [authorError, setAuthorError] = useState(false);

  const {getColonAuthor} = useNewsService();

  useEffect(() => {
    setAuthorLoading(true)
    getColonAuthor(limitColon, pageColon)
    .then((res) => {
      if (res.length < 4) {
        setAuthorEnded(true)
      }
     setAuthorData([...authorData, ...res]);
     setAuthorLoading(false)
    })
    .catch(() => setAuthorError(true))
  },[pageColon])

  const fail = authorError ? 'Помилка завантаженн' : null;

  return (
   <aside className='authorpanel'>
    
   <div className="authorpanel__allcolon">
    <h1 className="authorpanel__colon">Колонки</h1>
    <div className="authorpanel__all"> <a href="#">Всі колонки</a></div>
   </div>
   <div className="authorpanel__list">

   {
    authorData.map(({src, name, work, descr, date, path, id}) => {
      return(
          <div key={id} className="authorpanel__block">
            <div className="authorpanel__authorblock">
              <div className="authorpanel__imgwrap"> <img src={src} alt={name} /></div>
              <div className="authorpanel__descr">
                <div className="authorpanel__name">{name}</div>
                <div className="authorpanel__work">{work}</div>
              </div>
            </div>
            <div className="authorpanel__title"> <a href={path}>{descr}</a></div>
            <div className="authorpanel__date">{date}</div>
            <hr />
          </div>
      )
    })
   }

   {fail}

  </div>
   <button style={{display: authorEnded ? 'none' : 'block'}} onClick={() => setPageColon(pageColon => pageColon + 1)} className="authorpanel__but"><img className={`authorpanel__circle ${authorLoading ? 'rotateauth' : null}`} src={circle} alt="circle" /> Всі колонки</button>
   </aside>
  )
}
export default AuthorColon;