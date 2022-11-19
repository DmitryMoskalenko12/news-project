import './asideMenu.scss';

const AsideMenu = ({menu, setMenu}) => {
const activeStyle = menu ? 'activeasidemenu' : null;

  return (
    <div className={`asidemenu ${activeStyle}`}>
      <div onClick={() => setMenu(false)} className="asidemenu__close">&times;</div>
      <ul className="asidemenu__menu">
        <li><a href="#">війна</a></li>
        <li><a href="#">новини</a></li>
        <li><a href="#">політика</a></li>
        <li><a href="#">економіка</a></li>
        <li><a href="#">суспільство</a></li>
        <li><a href="#">погляди</a></li>
        <li><a href="#">світ</a></li>
      </ul>
    </div>
  )
}
export default AsideMenu;