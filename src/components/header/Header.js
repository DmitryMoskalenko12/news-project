import lup from '../../icons/MagnifyingGlass.png';
import './header.scss';
import telega from '../../icons/Telegram.png';
import faceb from '../../icons/Facebook.png';
import insta from '../../icons/Instagram.png';
import yout from '../../icons/You.png';
import tanks from '../../icons/tanks.png';
import gelic from '../../icons/gelic.png';
import rocket from '../../icons/rocket.png';
import art from '../../icons/art.png';
import bbm from '../../icons/bbm.png';
import air from '../../icons/air.png';

const Header = () =>{
  return(
    <header className="header">
     <div className="container">
      <div className="header__top">

        <div className="header__burgmenu">
          <div className="header__lines">
            <span className="header__first"></span>
            <span className="header__second"></span>
          </div>
           
          <div className="header__menu">Меню</div>
        </div>

        <div className="header__towns">
          <a href="#" className="header__town">Київ</a>
          <a href="#" className="header__town">Одеса</a>
          <a href="#" className="header__town">Харків</a>
        </div>

        <div className="header__search">
          <input id="lup" type="text" placeholder="пошук новин" className='header__inpsearch' />
          <label htmlFor="lup"><img src={lup} alt="lup" className='header__label' /></label>
        </div>

        <div className="header__social">
          <a href="#" className="header__telegram">
            <img src={telega} alt="telegram" />
          </a>
          <a href="#" className="header__facebook">
            <img src={faceb} alt="facebook" />
          </a>
          <a href="#" className="header__instagram">
            <img src={insta} alt="instagram" />
          </a>
          <a href="#" className="header__youtube">
            <img src={yout} alt="youtube" />
          </a>
        </div>
        |
        <div className="header__lang">
          <a href="#" className="header__ru">RU</a>
          <a href="#" className="header__ua activelang">UA</a>
        </div>

      </div>
      <hr className='header__hr' />
      <nav className="header__navig">

        <ul className="header__listmenu">
          <li className='header__li'><a href="#">війна</a></li>
          <li className='header__li'><a href="#">новини</a></li>
          <li className='header__li'><a href="#">політика</a></li>
          <li className='header__li'><a href="#">економіка</a></li>
          <li className='header__li activeli'><a href="#">суспільство</a></li>
          <li className='header__li'><a href="#">погляди</a></li>
          <li className='header__li'><a href="#">світ</a></li>
        </ul>

        <div className="header__live activelive">
         LIVE
        </div>
      </nav>
     </div>
     <div className="header__statistic">
        <div className="container">
            <ul className="header__statlist">
              <li className="header__listat">131 день війни:</li>
              <li className="header__listat"><div><img src={air} alt="air" /></div> особовий склад <span>~36 200</span></li>
              <li className="header__listat"><div><img src={tanks} alt="tanks" /></div> танки <span>1 589</span></li>
              <li className="header__listat"><div><img src={art} alt="art" /></div> артсистеми <span>4578</span></li>
              <li className="header__listat"><div><img src={air} alt="air" /></div> літаки <span>220</span></li>
              <li className="header__listat"><div><img src={rocket} alt="rocket" /></div> РСЗВ <span>246</span></li>
              <li className="header__listat"><div><img src={gelic} alt="gelic" /></div> гелікоптери <span>190</span></li>
              <li className="header__listat"><div><img src={bbm} alt="bbm" /></div> ББМ <span>4578</span></li>
            </ul>
          </div>
      </div>
    </header>
  )
}

export default Header;