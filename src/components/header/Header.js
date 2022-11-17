import lup from '../../icons/MagnifyingGlass.png';
import './header.scss';

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
          <input id="lup" type="text" placeholder="пошук новин" />
          <label htmlFor="lup"><img src={lup} alt="lup" /></label>
        </div>

        <div className="header__social">
          <a href="#" className="header__telegram">
            <img src="" alt="" />
          </a>
          <a href="#" className="header__facebook">
            <img src="" alt="" />
          </a>
          <a href="#" className="header__instagram">
            <img src="" alt="" />
          </a>
          <a href="#" className="header__youtube">
            <img src="" alt="" />
          </a>
        </div>

      </div>
     </div>
    </header>
  )
}

export default Header;