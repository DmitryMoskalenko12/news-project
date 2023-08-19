import lup from '../../icons/MagnifyingGlass.png';
import './header.scss';
import telega from '../../icons/Telegram.png';
import faceb from '../../icons/Facebook.png';
import insta from '../../icons/Instagram.png';
import yout from '../../icons/You.png';
import AsideMenu from '../asideMenu/AsideMenu';
import { useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { NavLink } from 'react-router-dom';

const Header = () => {
  
  const statistic = [
    {"src": "../icons/air.png", "alt": "air", "descr": "особовий склад", "num":"~36 200", "id": 1 },
    {"src": "../icons/tanks.png", "alt": "tanks", "descr": "танки", "num":"1 589", "id": 2 },
    {"src": "../icons/art.png", "alt": "art", "descr": "артсистеми", "num":"4578", "id": 3 },
    {"src": "../icons/air.png", "alt": "air", "descr": "літаки", "num":"220", "id": 4 },
    {"src": "../icons/rocket.png", "alt": "rocket", "descr": "РСЗВ", "num":"246", "id": 5 },
    {"src": "../icons/gelic.png", "alt": "gelic", "descr": "гелікоптери", "num":"190", "id": 6 },
    {"src": "../icons/bbm.png", "alt": "bbm", "descr": "ББМ", "num":"4578", "id": 7 }
  ]

  const buttons = [
    {"content": "війна", "href": "#","path":"/", "id": 1 },
    {"content": "новини", "href": "#", "path":"/NewsPage", "id": 2 },
    {"content": "політика", "href": "#","path":"/PolitPage", "id": 3 },
    {"content": "економіка", "href": "#","path":"/EconomPage", "id": 4 },
    {"content": "суспільство", "href": "#","path":"/SocPage", "id": 5 },
    {"content": "погляди", "href": "#","path":"/ViewsPage", "id": 6 },
    {"content": "світ", "href": "#","path":"/WorldPage", "id": 7 }
  ]

  const [menu, setMenu] = useState(false);
  const [button, setButton] = useState([]);
  const [stata, setStata] = useState([])
  const [active, setActive] = useState(1)
  const {request} = useHttp();

  useEffect(() => {
   setStata(statistic);
  },[])

  useEffect(() => {
  setButton(buttons);
  },[])

  return(
    <header className="header">
    <div className='header__hr'> </div>
     <div className="container">
      <div className="header__top">

        <div onClick={() => setMenu(true)} className="header__burgmenu">
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

      <nav className="header__navig">

        <ul className="header__listmenu">
          {
            button.map(({content, path, id}, i) => {
              return(
                <li  key={id} onClick={() => setActive(id)} className={`header__li ${active === i + 1 ? 'activeli' : null }`}><NavLink to={path}>{content}</NavLink></li>
              )
            })
          }
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
              {
                stata.map(({src, alt, descr, num, id}) => {
               return(
                <li key={id} className="header__listat"><div><img src={src} alt={alt} /></div> {descr} <span>{num}</span></li>
              )
                })
              }
            </ul>
          </div>
      </div>
      {
        <AsideMenu menu = {menu} setMenu = {setMenu}/>
      } 
    </header>
  )
}

export default Header;