import Header from '../components/header/Header';
import SectionSlider from '../components/sectionSlider/SectionSlider';
import NewsSection from '../components/newsSection/NewsSection';
import Redaction from '../components/redaction/Redaction';
import RegionalNews from '../components/regionalNews/RegionalNews';
import { useSlider } from '../hooks/useSlider';
import useNewsService from '../services/NewsService';
import { useEffect, useState} from 'react';
import useAsideNewsPanel from '../hooks/useAsideNewsPanel';

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

  const {getSliders, getRedaction, getRegionNews } = useNewsService();
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
  const {onNext, onPrev, slideIndex, setSlideIndex, setOffset, offset, width, sliders, setSliders} = useSlider(1, 0, 1350);
  
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

      
     </>
    )
}
export default StartPage;