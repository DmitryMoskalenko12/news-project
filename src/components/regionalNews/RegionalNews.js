import './regionalNews.scss';
import right from '../../icons/right.png';

const RegionalNews = ({dataRegional}) => {

  return(
    <section className='regional'>
      <div className="regional__titlewrap">
          <h1 className="regional__region">Регіони</h1>
          <div className="regional__allregionnews"><a href="#">Всі новини розділу</a></div>
      </div>

      <div className="regional__contentwrap">

      {
        dataRegional.map(({ town, subdate, subdate2, content, src, id}) => {
          return(
            <div key={id} className="regional__townblock">
            <div className="regional__towntitle">{town}</div>
            <div className="regional__subdate">{subdate}</div>
   
            {
              content.map(({descr, descrdate, id}) => {
              return(
                <div key={id} className="regional__townsub">
                    <a href="#">
                    <div className="regional__newsdescr">
                      <span>{descrdate}</span>
                      {descr}
                    </div>
                    </a>
                  <hr className='regional__hr' />
               </div>
              )
              })
            }
            {/* <div className="regional__subdate">{subdate2}</div> */}
            
            <div className="regional__butwrap">
             <a href={src}>
             <div className="regional__morenews">Більше новин <span><img src={right} alt="right" /></span></div>
             </a>
            </div>
           </div>
          )
        })
      }

      </div>
    </section>
  )

}
export default RegionalNews;