import Header from '../components/header/Header';
import SectionSlider from '../components/sectionSlider/SectionSlider';
import NewsSection from '../components/newsSection/NewsSection';
import Redaction from '../components/redaction/Redaction';
import RegionalNews from '../components/regionalNews/RegionalNews';
import { useSlider } from '../hooks/useSlider';
import useNewsService from '../services/NewsService';
import { useEffect, useState} from 'react';
import useAsideNewsPanel from '../hooks/useAsideNewsPanel';
import SectionVideo from '../components/sectionVideo/SectionVideo';
import AuthorColon from '../components/authorColon/AuthorColon';
import NewsBlock from '../components/newsBlock/NewsBlock';
import Promo from '../components/promo/Promo';
import Footer from '../footer/Footer';

const StartPage = () => {

  /* asidePanelFunct */
  const [choicebut, setChoiceBut] = useState([
    {content: 'Всі', id: 1},
    {content: 'Новини', id: 2},
    {content: 'Статті', id: 3}
  ])

  const [filter, setFilter] = useState('Всі');
  const [allnews, setAllNews] = useState([]);
  const [articl, setArticl] = useState([]);
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [pagearticl, setPageArticl] = useState(1);
  const [pageNews, setPageNews] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [active, setActive] = useState(1);
  const [ended, setEnded] = useState(false);
  const [endednews, setEndedNews] = useState(false);
  const [endedarticl, setEndedArticl] = useState(false);

  const {getSliders, getRedaction, getRegionNews, getVideoNews, getBigVideo, getColonAuthor, getBlock1, getBlock2, getTwoNews, getPromoDescr,getPromoSlider, getEconomicBlock1, getEconomicBlock2, getEconomicTwoNews, getLifeBlock1, getLifeBlock2, getLifeTwoNews } = useNewsService();
  const {setDataNews, setDataArticl, setDataNewsAll} = useAsideNewsPanel(
    limit, 
    page, 
    setLoading, 
    setEnded, 
    setAllNews, 
    setError, 
    allnews, 
    pagearticl, 
    setEndedArticl,
    setArticl,
    articl,
    pageNews,
    setEndedNews,
    setNews,
    news)

  useEffect(() => {
    setDataNews();
  },[pageNews])

  useEffect(() => {
    setDataArticl();
  },[pagearticl])

  useEffect(() => {
    setDataNewsAll()
  },[page])

/* slider */

  useEffect(() => {
    getSliders()
   .then((res) => setSliders(res))
   .catch((e) => console.log(e))
  },[])
  const {onNext, onPrev, slideIndex, setSlideIndex, setOffset, offset, width, sliders, setSliders, onPromoNext, promooffset, promoWidth, promosliders, setPromoSliders} = useSlider(1, 0, 1340);
  
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
const [promoDescr, setPromoDescr] = useState([]);

useEffect(() => {
 getPromoDescr()
 .then((res) => setPromoDescr(res))
 .catch((e) => console.log(e))

 getPromoSlider()
 .then((res) => setPromoSliders(res))
 .catch((e) => console.log(e))
},[])

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
      <Header/>
      <SectionSlider onNext = {onNext} onPrev = {onPrev} slideIndex = {slideIndex} setSlideIndex = {setSlideIndex} setOffset = {setOffset} offset = {offset} width = {width} sliders = {sliders} setSliders = {setSliders}/>
       <div className='newswrap'>
       <NewsSection
            error = {error}
            setPageNews = {setPageNews}
            setPageArticl = {setPageArticl}
            setPage = {setPage}
            filter = {filter}
            choicebut = {choicebut} 
            setChoiceBut = {setChoiceBut}
            endedarticl = {endedarticl}
            endednews = {endednews}
            ended = {ended}
            setActive = {setActive}
            active = {active}
            setFilter = {setFilter}
            loading = {loading} 
            limit = {limit}
            page = {page}
            setLoading = {setLoading} 
            setEnded = {setEnded}
            setAllNews = {setAllNews} 
            setError = {setError} 
            allnews = {allnews} 
            pagearticl = {pagearticl} 
            setEndedArticl = {setEndedArticl}
            setArticl = {setArticl}
            articl = {articl}
            pageNews = {pageNews}
            setEndedNews = {setEndedNews}
            setNews = {setNews}
            news = {news} />
       <div className='regandredac'>
       <Redaction data = {data}/>
       <RegionalNews dataRegional = {dataRegional}/>
       </div>
      </div>
      <SectionVideo videoData = {videoData} bigVideo = { bigVideo}/>
      <section className="colpolit">
          <div className="flextwosection">
          <AuthorColon authorData = {authorData} pageColon =  {pageColon} setPageColon = {setPageColon} authorEnded = {authorEnded} authorLoading = {authorLoading} authorError = {authorError}/>
          <NewsBlock block1 = {block1} block2 = {block2} twonews = {twonews}/>
          </div>
      </section>
       <section className='promo'>
        <div className="promocolumn">
        <Promo  onPromoNext = {onPromoNext} promooffset = {promooffset} promoWidth = {promoWidth} promosliders = {promosliders} setPromoSliders ={setPromoSliders} promoDescr = {promoDescr}/>
        <NewsBlock  block1 = {ecomomicBlock1} block2 = {economicBlock2} twonews = {economicTwonews}/>
        <NewsBlock  block1 = {lifeBlock1} block2 = {lifeBlock2} twonews = {lifeTwonews}/>
        </div>
         
       </section>
       <Footer/>

     </>
    )
}
export default StartPage;