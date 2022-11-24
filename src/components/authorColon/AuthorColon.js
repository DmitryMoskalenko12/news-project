import './authorColon.scss';
import circle from '../../icons/circle.png';

const AuthorColon = ({authorData,  pageColon,  setPageColon,  authorEnded,  authorLoading, authorError }) => {

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