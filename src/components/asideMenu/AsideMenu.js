import './asideMenu.scss';
import { Link } from 'react-router-dom';

const AsideMenu = ({menu, setMenu}) => {
const activeStyle = menu ? 'activeasidemenu' : null;

  return (
    <div className={`asidemenu ${activeStyle}`}>
      <div onClick={() => setMenu(false)} className="asidemenu__close">&times;</div>
      <ul className="asidemenu__menu">
        <li><Link to={'/'}>війна</Link></li>
        <li><Link to={'/NewsPage'}>новини</Link></li>
        <li><Link to={'/PolitPage'}>політика</Link></li>
        <li><Link to={'/EconomPage'}>економіка</Link></li>
        <li><Link to={'/SocPage'}>суспільство</Link></li>
        <li><Link to={'/ViewsPage'}>погляди</Link></li>
        <li><Link to={'/WorldPage'}>світ</Link></li>
      </ul>
    </div>
  )
}
export default AsideMenu;