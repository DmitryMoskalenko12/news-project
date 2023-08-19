import './moreVideoNews.scss';
import Header from '../header/Header';
import Footer from '../../footer/Footer';
import YouTube from 'react-youtube';
import useNewsService from '../../services/NewsService';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const MoreVideoNews = () => {
  const [videoBase, setVideoBase] = useState([]);
  const [videoPage, setVideoPage] = useState(1);
  const [videoLimit, SetVideoLimit] = useState(4);
  const [fetching, setFetching] = useState(true);
  const [endedVideo, setEndedVideo] = useState(false);
  const {getDataBaseVideo} = useNewsService();

  useEffect(() => {
  if (fetching) {
    const res = getDataBaseVideo(videoLimit, videoPage)
      if (res.length <= 0) {
        setEndedVideo(true)
        setFetching(false)
      }
     setVideoBase([...videoBase, ...res])
     setVideoPage(videoPage => videoPage + 1)
     setFetching(false)
  }
  },[fetching])

  useEffect(() => {
   window.addEventListener('scroll', () => scrollEnd())
   return () => window.removeEventListener('scroll', () => scrollEnd())
  },[])

const scrollEnd = () => {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 500) {
    setFetching(true)
  }
}
const optional = {
  height: '300',
  width: '300',
  playerVars: {
    autoplay: 2,
  },
}  
  return(
    <>
    <Helmet>
      <meta
        name="description"
        content="Page with All video"
      />
      <title>Всі відео</title>
    </Helmet>
    <Header/>
    <div className="morevideo">
      <div className="morevideo__wrap">

       {
        videoBase.map(({videoid, descr, id}) => {
          return(
           <div key={id} className="morevideo__block">
              {<YouTube videoId={videoid} opts={optional} /* onReady={this._onReady} */ /* onPause={true} *//>}
              <div className="morevideo__descr">{descr}</div>
          </div>
          )
        })
       }
      
      </div>
      {
        endedVideo ? <div  style = {{textAlign: 'center', color:'red'}}>Відео більше немає</div> : null
      }
    </div>
    <Footer/>
    </>
  )
}
export default MoreVideoNews;