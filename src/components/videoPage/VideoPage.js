import './videoPage.scss';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import useNewsService from '../../services/NewsService';
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../../footer/Footer';
import { Helmet } from 'react-helmet';

const VideoPage = () => {
const [videoBig, setVideoBig] = useState({});
const [fourVideo, setVideoFour] = useState({});
const {idvideo} = useParams();
const {getBigVideoId, getFourVideoId} = useNewsService();

useEffect(() => {
const res = getBigVideoId(+idvideo);
setVideoBig(res)

const res2 = getFourVideoId(+idvideo);
setVideoFour(res2)
},[])

const optional = {
  height: '500',
  width: '1345',
  playerVars: {
    autoplay: 2,
  },
}

/* const onReady = (event) => {
  event.target.pauseVideo();
} */

  return(
     <>
      <Helmet>
          <meta
            name="description"
            content="Page with War"
          />
          <title>Video page</title>
      </Helmet>

     {<Header/>}
     {<YouTube videoId={videoBig?.videoid || fourVideo?.videoid} opts={optional} /* onReady={this._onReady} */ onPause={true}/>}
     {<Footer/>}
    
     </>
  )

}
export default VideoPage;