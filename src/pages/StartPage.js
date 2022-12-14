import Header from '../components/header/Header';
import SectionSlider from '../components/sectionSlider/SectionSlider';
import Redaction from '../components/redaction/Redaction';
import RegionalNews from '../components/regionalNews/RegionalNews';
import { useSlider } from '../hooks/useSlider';
import useNewsService from '../services/NewsService';
import { useEffect, useState, useRef} from 'react';
import SectionVideo from '../components/sectionVideo/SectionVideo';
import AuthorColon from '../components/authorColon/AuthorColon';
import NewsBlock from '../components/newsBlock/NewsBlock';
import Promo from '../components/promo/Promo';
import Footer from '../footer/Footer';
import NewsSection from '../components/newsSection/NewsSection';
import {Helmet} from "react-helmet";
import ErrorBoundary from '../components/errorBoundary/ErrorBoundary';

const StartPage = () => {

  /* asidePanelFunct */

  const {getSliders, getRedaction, getRegionNews, getVideoNews, getBigVideo, getColonAuthor, getBlock1, getBlock2, getTwoNews, getPromoDescr,getPromoSlider, getEconomicBlock1, getEconomicBlock2, getEconomicTwoNews, getLifeBlock1, getLifeBlock2, getLifeTwoNews, getAllNews, getArticl, getNews } = useNewsService();

/* slider */
  const windowRef = useRef()
  const [ widthSlide, setWidthSlide] = useState(0)

  useEffect(() => {
    setWidthSlide(getComputedStyle(windowRef.current).width.replace(/\D/ig, ''))
    getSliders()
   .then((res) => setSliders(res))
   .catch((e) => console.log(e))
  },[])
  
  
/* redactionSection */
const [data, setData] = useState([]);

useEffect(() => {
  getRedaction()
  .then((res) => setData(res))
},[])

/* regionalnews */
const [dataRegional, setDataRegional] = useState([]);

useEffect(() => {
  getRegionNews()
  .then((res) => setDataRegional(res))
},[])

/* videonews */
const [videoData, setVideoData] = useState([]);
const [bigVideo, setBigVideo] = useState([]);

useEffect(() => {
  getVideoNews()
  .then((res) => setVideoData(res))
  .catch((e) => console.log(e))

  getBigVideo()
  .then((res) => setBigVideo(res))
  .catch((e) => console.log(e))
},[])

/* authorColon */
const [authorData, setAuthorData] = useState([]);
const [limitColon, setLimitColon] = useState(4);
const [pageColon, setPageColon] = useState(1);
const [authorEnded, setAuthorEnded] = useState(false);
const [authorLoading, setAuthorLoading] = useState(true);
const [authorError, setAuthorError] = useState(false);

useEffect(() => {
  setAuthorLoading(true)
  getColonAuthor(limitColon, pageColon)
  .then((res) => {
    if (res.length < 4) {
      setAuthorEnded(true)
    }
   setAuthorData([...authorData, ...res]);
   setAuthorLoading(false)
  })
  .catch(() => setAuthorError(true))
},[pageColon])

/* newsblock */
const [block1, setBlock1] = useState([]);
const [block2, setBlock2] = useState([]);
const [twonews, setTwoNews] = useState([]);

useEffect(() => {
 getBlock1()
 .then((res) => setBlock1(res))
 .catch((e) => console.log(e))

 getBlock2()
 .then((res) => setBlock2(res))
 .catch((e) => console.log(e))

 getTwoNews()
 .then((res) => setTwoNews(res))
 .catch((e) => console.log(e))
},[])

/* promoSlider */
const promoRef = useRef();
const [promoDescr, setPromoDescr] = useState([]);
const [promoWidth, setPromoWidth] = useState(0);
useEffect(() => {
  setPromoWidth(getComputedStyle(promoRef.current).width.replace(/\D/ig, ''))
},[])
useEffect(() => {
 getPromoDescr()
 .then((res) => setPromoDescr(res))
 .catch((e) => console.log(e))

 getPromoSlider()
 .then((res) => setPromoSliders(res))
 .catch((e) => console.log(e))
},[])

const {onNext, onPrev, slideIndex, setSlideIndex, setOffset,onPromoPrev, offset, widt, sliders, setSliders, onPromoNext, promooffset, promosliders, setPromoSliders} = useSlider(1, 0, +widthSlide, +promoWidth);
/* economic block */
const [ecomomicBlock1, setEconomicBlock1] = useState([]);
const [economicBlock2, setEconomicBlock2] = useState([]);
const [economicTwonews, setEconomicTwoNews] = useState([]);

useEffect(() => {
  getEconomicBlock1()
 .then((res) => setEconomicBlock1(res))
 .catch((e) => console.log(e))

 getEconomicBlock2()
 .then((res) => setEconomicBlock2(res))
 .catch((e) => console.log(e))

 getEconomicTwoNews()
 .then((res) => setEconomicTwoNews(res))
 .catch((e) => console.log(e))
},[])

/* lifestyle */
const [lifeBlock1, setLifeBlock1] = useState([]);
const [lifeBlock2, setLifeBlock2] = useState([]);
const [lifeTwonews, setLifeTwoNews] = useState([]);

useEffect(() => {
  getLifeBlock1()
 .then((res) => setLifeBlock1(res))
 .catch((e) => console.log(e))

 getLifeBlock2()
 .then((res) => setLifeBlock2(res))
 .catch((e) => console.log(e))

 getLifeTwoNews()
 .then((res) => setLifeTwoNews(res))
 .catch((e) => console.log(e))
},[])
    return(
      <>
       <Helmet>
          <meta
            name="description"
            content="Page with War"
          />
          <title>War page</title>
      </Helmet>

      <Header/>
      
      <ErrorBoundary>
        <SectionSlider onNext = {onNext} onPrev = {onPrev} slideIndex = {slideIndex} setSlideIndex = {setSlideIndex} setOffset = {setOffset} offset = {offset} width = {widt} sliders = {sliders} setSliders = {setSliders} ref = {windowRef}/>
      </ErrorBoundary>
       <div className='newswrap'>
        <ErrorBoundary>
         <NewsSection getAllNews= {getAllNews} getArticl = {getArticl} getNews = {getNews}/>
        </ErrorBoundary>
       <div className='regandredac'>
       <ErrorBoundary>
        <Redaction data = {data}/>
       </ErrorBoundary>
       <ErrorBoundary>
        <RegionalNews dataRegional = {dataRegional}/>
       </ErrorBoundary>
       </div>
      </div>
      <ErrorBoundary>
       <SectionVideo videoData = {videoData} bigVideo = { bigVideo}/>
      </ErrorBoundary>
      <section className="colpolit">
          <div className="flextwosection">
         <ErrorBoundary>
         <AuthorColon authorData = {authorData} pageColon =  {pageColon} setPageColon = {setPageColon} authorEnded = {authorEnded} authorLoading = {authorLoading} authorError = {authorError}/>
         </ErrorBoundary>
          <ErrorBoundary>
           <NewsBlock block1 = {block1} block2 = {block2} twonews = {twonews}/>
          </ErrorBoundary>
          </div>
      </section>
       <section className='promo'>
        <div className="promocolumn">
       <ErrorBoundary>
        <Promo ref = {promoRef} onPromoPrev = {onPromoPrev} onPromoNext = {onPromoNext} promooffset = {promooffset} promosliders = {promosliders} setPromoSliders ={setPromoSliders} promoDescr = {promoDescr}/>
       </ErrorBoundary>
        <ErrorBoundary>
          <NewsBlock  block1 = {ecomomicBlock1} block2 = {economicBlock2} twonews = {economicTwonews}/>
        </ErrorBoundary>
        <ErrorBoundary>
          <NewsBlock  block1 = {lifeBlock1} block2 = {lifeBlock2} twonews = {lifeTwonews}/>
        </ErrorBoundary>
        </div>
         
       </section>
       <ErrorBoundary>
        <Footer/>
       </ErrorBoundary>

     </>
    )
}
export default StartPage;