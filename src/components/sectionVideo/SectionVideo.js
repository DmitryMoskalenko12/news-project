import white from '../../icons/white.png'
import './sectionVideo.scss';

const SectionVideo = ({bigVideo, videoData}) => {

  return(
    <section className="videonews">
      <div className="videonews__overflow"></div>
      <div className="container">

      <a className='videonews__link' href="#">Більше новин <span><img src={white} alt="arrow" /></span></a>

      <div className="videonews__wrap">

        {
          bigVideo.map(({src, videodate, videodescr, id}) => {
            return(
              <div key={id} className="videonews__bigwrap">
                <div className="videonews__title">Відео</div> 
                <a className='videonews__bigvideo' href="#"><img src={src} alt="bigvideo" /></a>
                <div className="videonews__date">{videodate}</div>
                <a className="videonews__descr" href="#">{videodescr}</a>
              </div>
            )
          })
        }

      <div className="videonews__fourvideo">
    
        {
          videoData.map(({src, videodate, videodescr, id}) => {
            return(
              <div key={id} className="videonews__item">
                <a className='videonews__linkimg' href="#"><img src={src} alt="men" /></a>
                <div className="videonews__itemdate">{videodate}</div>
                <a className='videonews__linkdesc' href="#"><div className="videonews__lessdescr">{videodescr}
                </div>
                </a>
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