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
    const res = getSliders();
    setSliders(res);
  },[])
  
  
/* redactionSection */
const [data, setData] = useState([]);

useEffect(() => {
  const res = getRedaction()
  setData(res)
},[])

/* regionalnews */
const [dataRegional, setDataRegional] = useState([]);

useEffect(() => {
  const res = getRegionNews();
  setDataRegional(res)
},[])

/* videonews */
const [videoData, setVideoData] = useState([]);
const [bigVideo, setBigVideo] = useState([]);

useEffect(() => {
  const res = getVideoNews();
  setVideoData(res);

  const res2 = getBigVideo()
  setBigVideo(res2)
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
   const res = getColonAuthor(limitColon, pageColon);

    if (res.length < 4) {
      setAuthorEnded(true)
    }

   setAuthorData([...authorData, ...res]);
   setAuthorLoading(false)

    if (!res) {
      setAuthorError(true)
    }

},[pageColon])

/* newsblock */
const [block1, setBlock1] = useState([]);
const [block2, setBlock2] = useState([]);
const [twonews, setTwoNews] = useState([]);

useEffect(() => {
 const res1 = getBlock1()
 setBlock1(res1)
 

 const res2 = getBlock2()
 setBlock2(res2)
 

 const res3 = getTwoNews()
 setTwoNews(res3)
 
},[])

/* promoSlider */
const promoRef = useRef();
const [promoDescr, setPromoDescr] = useState([]);
const [promoWidth, setPromoWidth] = useState(0);

useEffect(() => {
  setPromoWidth(getComputedStyle(promoRef.current).width.replace(/\D/ig, ''))
},[])

useEffect(() => {
 const res1 = getPromoDescr()
 setPromoDescr(res1)

 const res2 = getPromoSlider()
 setPromoSliders(res2)

},[])

const {onNext, onPrev, slideIndex, setSlideIndex, setOffset,onPromoPrev, offset, widt, sliders, setSliders, onPromoNext, promooffset, promosliders, setPromoSliders} = useSlider(1, 0, +widthSlide, +promoWidth);
/* economic block */
const [ecomomicBlock1, setEconomicBlock1] = useState([]);
const [economicBlock2, setEconomicBlock2] = useState([]);
const [economicTwonews, setEconomicTwoNews] = useState([]);

useEffect(() => {
  const res1 = getEconomicBlock1();
  setEconomicBlock1(res1)
 
  const res2 = getEconomicBlock2();
  setEconomicBlock2(res2)

  const res3 = getEconomicTwoNews();
  setEconomicTwoNews(res3)
},[])

/* lifestyle */
const [lifeBlock1, setLifeBlock1] = useState([]);
const [lifeBlock2, setLifeBlock2] = useState([]);
const [lifeTwonews, setLifeTwoNews] = useState([]);

useEffect(() => {
  const res1 = getLifeBlock1();
  setLifeBlock1(res1);

 const res2 = getLifeBlock2();
 setLifeBlock2(res2);

 const res3 = getLifeTwoNews();
 setLifeTwoNews(res3);

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