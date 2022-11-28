import white from '../../icons/white.png'
import './sectionVideo.scss';
import { Link } from 'react-router-dom';

const SectionVideo = ({bigVideo, videoData}) => {

  return(
    <section className="videonews">
      <div className="videonews__overflow"></div>
      <div className="container">

      <Link className='videonews__link' to={'/videoPage'}>Більше новин <span><img src={white} alt="arrow" /></span></Link>

      <div className="videonews__wrap">

        {
          bigVideo.map(({src, videodate, videodescr, path, id}) => {
            return(
              <div key={id} className="videonews__bigwrap">
                <div className="videonews__title">Відео</div> 
                <Link className='videonews__bigvideo' to={path + id}><img src={src} alt="bigvideo" /></Link>
                <div className="videonews__date">{videodate}</div>
                <Link className="videonews__descr" to={path + id}>{videodescr}</Link>
              </div>
            )
          })
        }

      <div className="videonews__fourvideo">
    
        {
          videoData.map(({src, videodate, videodescr, path, id}) => {
            return(
              <div key={id} className="videonews__item">
                <Link className='videonews__linkimg' to={path + id}><img src={src} alt="men" /></Link>
                <div className="videonews__itemdate">{videodate}</div>
                <Link className='videonews__linkdesc' to={path + id}><div className="videonews__lessdescr">{videodescr}
                </div>
                </Link>
            </div>
            )
          })
        }
   </div>
  </div>
 </div>
</section>
  )
}
export default SectionVideo;