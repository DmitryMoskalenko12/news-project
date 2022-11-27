import './footer.scss';
import tube from '../icons/tube.png';
import telega from '../icons/telega.png';
import facek from '../icons/facek.png';
import insta from '../icons/insta.png';
import tik from '../icons/tik.png';
import news from '../icons/news.png';
/* import YouTube from 'react-youtube'; */

const Footer = () => {

/*   const opts = {
    height: '300',
    width: '300',
    playerVars: {
      autoplay: 1,
    },
  }; */

  return(
    <footer className='footer'>
      <div className='footer__hr'></div>
      <div className="footer__wrap">
       <div className="footer__firstblock">
        <ul className="footer__allnews">
          <li className="footer__all"><a href="#">Всі новини</a></li>
          <li className="footer__covid" ><a href="#">COVID-19</a></li>
          <li className="footer__all" ><a href="#">Війна</a></li>
        </ul>

        <ul className="footer__politic">
          <li className="footer__itemblack">Політика</li>
          <li className="footer__item"><a href="#">Україна</a></li>
          <li className="footer__item"><a href="#">Світ</a></li>
        </ul>
       </div>

       <div className="footer__secondblock">
        <ul className="footer__health">
          <li className="footer__itemblack">Здоров’я</li>
          <li className="footer__item"><a href="#">Дієти</a></li>
          <li className="footer__item"><a href="#">Краса</a></li>
          <li className="footer__item"><a href="#">Секс</a></li>
          <li className="footer__item"><a href="#">Психологія</a></li>
          <li className="footer__item"><a href="#">Медицина</a></li>
        </ul>

        <ul className="footer__event">
          <li className="footer__itemblack">Події</li>
          <li className="footer__item"><a href="#">ДТП</a></li>
          <li className="footer__item"><a href="#">Катастрофи</a></li>
          <li className="footer__item"><a href="#">Кримінал</a></li>
        </ul>
       </div>

       <div className="footer__thirdblock">
        <ul className="footer__lifestyle">
          <li className="footer__itemblack">Лайфстайл</li>
          <li className="footer__item"><a href="#">Історії з життя</a></li>
          <li className="footer__item"><a href="#">Подорожі</a></li>
          <li className="footer__item"><a href="#">Кухня</a></li>
          <li className="footer__item"><a href="#">Шоубізнес</a></li>
          <li className="footer__item"><a href="#">Мода та стиль</a></li>
          <li className="footer__item"><a href="#">Зірковий гороскоп</a></li>
        </ul>

        <ul className="footer__socio">
          <li className="footer__itemblack">Суспільство</li>
          <li className="footer__item"><a href="#">Охорона здоров’я</a></li>
          <li className="footer__item"><a href="#">Безпека</a></li>
          <li className="footer__item"><a href="#">Екологія</a></li>
          <li className="footer__item"><a href="#">Релігія</a></li>
        </ul>
       </div>

       <div className="footer__fourthblock">
        <ul className="footer__region">
          <li className="footer__itemblack">Регіони</li>
          <li className="footer__item"><a href="#">Київ</a></li>
          <li className="footer__item"><a href="#">Одеса</a></li>
          <li className="footer__item"><a href="#">Кухня</a></li>
          <li className="footer__item"><a href="#">Харків</a></li>
          <li className="footer__item"><a href="#">Львів</a></li>
        </ul>

        <ul className="footer__tehcno">
          <li className="footer__itemblack">Техно</li>
          <li className="footer__item"><a href="#">Наука</a></li>
          <li className="footer__item"><a href="#">Гаджети</a></li>
          <li className="footer__item"><a href="#">ІТ</a></li>
          <li className="footer__item"><a href="#">Космос</a></li>
        </ul>
       </div>

       <div className="footer__fifthblock">
        <ul className="footer__economic">
          <li className="footer__itemblack">Економіка</li>
          <li className="footer__item"><a href="#">Фінанси</a></li>
          <li className="footer__item"><a href="#">Комунальні послуги</a></li>
          <li className="footer__item"><a href="#">Бізнес</a></li>
          <li className="footer__item"><a href="#">Львів</a></li>
        </ul>

        <ul className="footer__sport">
          <li className="footer__itemblack">Спорт</li>
        </ul>
       </div>

       <div className="footer__sixblock">
        <ul className="footer__about">
          <li className="footer__itemabout"><a href="#">Про нас</a></li>
          <li className="footer__itemabout"><a href="#">Контакти</a></li>
          <li className="footer__itemabout"><a href="#">Структура власності</a></li>
          <li className="footer__itemabout"><a href="#">Команда</a></li>
          <li className="footer__itemabout"><a href="#">Медіакіт</a></li>
        </ul>
       </div>
      </div>

      <h1 className="footer__title">Новини у зручному форматі</h1>
      <div className="footer__socialnet">
        <div className="footer__socialblock">
          <div className="footer__img"><a href="#"><img src={tube} alt="tube"/></a></div>
          <div className="footer__socialname"><a href="#">YouTube</a></div>
        </div>

        <div className="footer__socialblock">
          <div className="footer__img"><a href="#"><img src={telega} alt="telega"/></a> </div>
          <div className="footer__socialname"><a href="#">Telegram</a></div>
        </div>

        <div className="footer__socialblock">
          <div className="footer__img"><a href="#"><img src={insta} alt="insta"/></a> </div>
          <div className="footer__socialname"><a href="#">Instagram</a></div>
        </div>

        <div className="footer__socialblock">
          <div className="footer__img"><a href="#"><img src={facek} alt="facek"/></a> </div>
          <div className="footer__socialname"><a href="#">Facebook</a></div>
        </div>

        <div className="footer__socialblock">
          <div className="footer__img"><a href="#"><img src={tik} alt="tik"/></a> </div>
          <div className="footer__socialname"><a href="#">TikTok</a></div>
        </div>

        <div className="footer__socialblock">
          <div className="footer__img"><a href="#"><img src={news} alt="news"/></a> </div>
          <div className="footer__socialname"><a href="#">Google News</a></div>
        </div>
      </div>
      <div className='footer__hrbottom'></div>

      <div className="footer__namecompany">© 2020-2022, ТОВ «Медіа Мережі»</div>
      <div className="footer__policyconf">
        <div className="footer__link"><a href="#">Політика користувача</a></div>
        <div className="footer__link"><a href="#">Політика конфіденційності</a></div>
        <div className="footer__link"><a href="#">Політика Cookie-файлів</a></div>
      </div>
     {/* <YouTube videoId="pLj6Oe32Zu0" opts={opts} onPause = {true}/> */}
    </footer>
  )
}
export default Footer;