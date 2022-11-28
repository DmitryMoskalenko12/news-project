import './videoPage.scss';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import useNewsService from '../../services/NewsService';
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import Footer from '../../footer/Footer';
import { Helmet } from 'react-helmet';

const VideoPage = () => {
const [video, setVideo] = useState({});

const {getBigVideoId, getFourVideoId} = useNewsService();

const {idvideo} = useParams();

useEffect(() => {
getBigVideoId(idvideo)
.then((res) => setVideo(res))
.catch((e) => console.log(e))

getFourVideoId(idvideo)
.then((res) => setVideo(res))
.catch((e) => console.log(e))
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

const {videoid} = video;

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
     {<YouTube videoId={videoid} opts={optional} /* onReady={this._onReady} */ onPause={true}/>}
     {<Footer/>}
    
     </>
  )

}
export default VideoPage;