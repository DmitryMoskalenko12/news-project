import './promo.scss';
import mobile from '../../image/mobile.png';
import rupor from '../../icons/Vector.png';

const Promo = () => {
  return(
    <article className="promoarticl">
     <div className="promoarticl__allnews">
      <div className="promoarticl__promo">Промо</div>
      <div className="promoarticl__allmaterial"> <a href="#">Всі матеріали</a></div>
     </div>
     
     <div className="promoarticl__stock">
      <div className="promoarticl__wrapimg"><img src={mobile} alt="mobile"/></div>
      <div className="promoarticl__blockdescr">
        <div className="promoarticl__subblock">
          <div className="promoarticl__date">05 серпня 11:00</div>
          <span><img src={rupor} alt="rupor" /></span>
          <div className="promoarticl__text">Промо</div>
        </div>
        <div className="promoarticl__bigdescr"><a href="#">Акція! Телевізори Samsung з вигодою та в оплату частинами до 12 платежів</a></div>
      </div>
     </div>

     <div className="promoslider">
      <div className="promoslider__field">
        
      </div>
     </div>
    </article>
  )
}
export default Promo;