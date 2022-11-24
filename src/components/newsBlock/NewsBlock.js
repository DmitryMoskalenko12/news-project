import './newsBlock.scss';
import right from '../../icons/right.png';

const NewsBlock = ({block1, block2, twonews}) => {

  return(
    <article className='newsblock'>
     <div className="newsblock__block1">

     {
      block1.map(({name, src, date, descr, id}) => {
        return(
          <div key={id} className="newsblock__bignews">
          <div className="newsblock__title">{name}</div>
          <div className="newsblock__wrapimg"><a href="#"><img src={src} alt="gug" /></a></div>
          <div className="newsblock__date">{date}</div>
          <div className="newsblock__descr"><a href="#">{descr}</a> </div>
        </div>
        )
      })
     }

      <div className="newsblock__twonews">
       {
        twonews.map(({src, date, descr, id}) => {
          return(
            <div key={id} className="newsblock__subblock">
              <div className="newsblock__subwrapimg"><a href="#"><img src={src} alt="tg" /></a></div>
              <div className="newsblock__subdate">{date}</div>
              <div className="newsblock__subdescr"><a href="#">{descr}</a></div>
          </div>
          )
        })
       }
      </div>
     </div>

     <div className="newsblock__block2">
      <div className="newsblock__allnews"><a href="#">Всі новини розділу</a></div>
      <div className="newsblock__titlebig">Новини розділу</div>

      <div className="newsblock__colon">
       {
        block2.map(({date, descr, id}) => {
          return(
            <div key={id} className="newsblock__subcolon">
              <div className="newsblock__colondescr"><span>{date}</span><a href="#">{descr}</a></div>
              <hr />
            </div>
          )
        })
       }
        <div className="newsblock__but"><a href="">Більше <span><img src={right} alt="right" /></span></a></div>
      </div>
     </div>
    </article>
  )
}
export default NewsBlock;