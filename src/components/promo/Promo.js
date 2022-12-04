import './promo.scss';
import rupor from '../../icons/Vector.png';
import { forwardRef } from 'react';

const Promo = forwardRef(({ onPromoNext, promooffset,onPromoPrev, promoWidth, promosliders, setPromoSliders, promoDescr}, ref) => {

  return(
    <article className="promoarticl">
     <div className="promoarticl__allnews">
      <div className="promoarticl__promo">Промо</div>
      <div className="promoarticl__allmaterial"> <a href="#">Всі матеріали</a></div>
     </div>
     
   {
    promoDescr.map(({date, descr, src, path, id}) => {
      return(
        <div key={id} className="promoarticl__stock">
        <div className="promoarticl__wrapimg"><img src={src} alt="mobile"/></div>
        <div className="promoarticl__blockdescr">
          <div className="promoarticl__subblock">
            <div className="promoarticl__date">{date}</div>
            <span><img src={rupor} alt="rupor" /></span>
            <div className="promoarticl__text">Промо</div>
          </div>
          <div className="promoarticl__bigdescr"><a href={path}>{descr}</a></div>
        </div>
       </div>
      )
    })
   }

    <div className="promoslider">
     <div ref = {ref} style={{overflow: 'hidden'}} className="promoslider__window">
      <div className="promoslider__linear"></div>
      <div className="promoslider__linear-left"></div>
      {
        promooffset > 0 ? <div  onClick={() => onPromoPrev()} className="promoslider__but promoslider__but-left ">&lt;</div> : null
      }
       <div  style={{width: `${100 * (promosliders.length - 3) + '%'}`, transition: '0.7s all', transform: `translateX(-${promooffset}px)`}} className="promoslider__field">
        {
          promosliders.map(({date, descr, path, id}) => {
           return(
            <div key={id} className="promoslider__slide">
              <a href={path}>
                <div className="promoslider__date">{date}</div>
                <div className="promoslider__descr">{descr}</div>
              </a>
            </div>
           )
          })
        }
    </div>
    <div  onClick={() => onPromoNext()} className="promoslider__but">&gt;</div>
  </div>
</div>
</article>
  )
} )
export default Promo;