import './redaction.scss';
import useNewsService from '../../services/NewsService';
import { useState, useEffect } from 'react';

const Redaction = () => {
  const {getRedaction} = useNewsService();
  const [data, setData] = useState([]);

  useEffect(() => {
      getRedaction()
      .then((res) => setData(res))
  },[])

  return (
    <section className="redaction">
      <h1 className="redaction__title">Вибір редакції</h1>
     <div className="redaction__contentwrap">
     {
      data.map(({content, src, id, date}) => {
        return(
          <div key={id} className="redaction__contentblock">
          <a href="#">
            <div className="redaction__imgwrap">
              <img src={src} alt="prezident" />
            </div>
  
            <div className="redaction__date">{date}</div>
            <div className="redaction__descr">{content}</div>
          </a>
        </div>
        )
      })
     }
    
     </div>
    </section>
  )
}
export default Redaction;