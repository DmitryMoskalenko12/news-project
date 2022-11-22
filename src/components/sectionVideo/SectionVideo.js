import usik from '../../image/usik.png';
import men from '../../image/men.png';

const SectionVideo = () => {
  return(
    <section className="videonews">
      <div className="container">
        <div className="videonews__wrap">

          <div className="videonews__bigwr">
           <div className="videonews__title">Відео</div>
           <div className="video__videobig">
            <a href="#"><img src={usik} alt="bigvideo" /></a>
            <div className="videonews__date">05 серпня 11:00</div>
            <div className="videonews__descr">"Це не Джошуа": Усик розповів, кого вважає своїм головним суперником</div>
           </div>
          </div>
          
          <div className="videonews__fourvideo">
            <div className="video__item"><a href="#"><img src="" alt="men" /></a></div> 
          </div>


        </div>
      </div>
    </section>
  )
}
export default SectionVideo;