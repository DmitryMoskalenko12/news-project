import error404 from '../image/error404.jpg';
import { Link } from 'react-router-dom';

const Page404 = () => {

  return (
    <div style = {{display: 'flex',flexDirection: "column", marginTop: '150px', justifyContent: 'center', alignItems: "center"}}>
      <div style = {{width: '300px', height: '300px'}}>
        <img style = {{width: '100%', height: '100%', objectFit: 'cover'}} src={error404} alt="error404" />
      </div>
      <div style = {{color: 'black', fontSize: "30px", fontWeight: '700', marginTop: "15px", textAlign: 'center'}}>Вказанної сторінки не існує.Перейти на <Link style={{color: 'red'}} to={'/'}>головну</Link></div>
    </div>
    
  )

}

export default Page404; 