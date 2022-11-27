import './newsSection.scss';
import { useState, useEffect } from 'react';
import AsideTest from '../asideNews/AsideNews';
import useAsideNewsPanel from '../../hooks/useAsideNewsPanel';

const NewsAside = ({getAllNews, getArticl, getNews}) => {
const [filter, setFilter] = useState('Всі');
const [all, setAll] = useState([]);
const [news, setNews] = useState([])
const [articl, setArticl] = useState([])
const [loading, setLoading] = useState(true);
const [endedAll, setEndedAll] = useState(false);
const [endedNews, setEndedNews] = useState(false);
const [endedArticl, setEndedArticl] = useState(false)
const [pageAll, setPageAll] = useState(1);
const [pageNews, setPageNews] = useState(1);
const [pageArticl, setPageArticl] = useState(1);
const [limit, setLimit] = useState(10);
const [error, setError] = useState(false);

const getFilter = (filter) => {
 return setFilter(filter)
}
const {setDataNews} = useAsideNewsPanel();

useEffect(() => {
  setDataNews(all, limit, pageAll, setAll, getAllNews, setEndedAll, setLoading, setError)
},[pageAll])

useEffect(() => {
  setDataNews(news, limit, pageNews, setNews, getNews, setEndedNews, setLoading, setError)
},[pageNews])

useEffect(() => {
  setDataNews(articl, limit, pageArticl, setArticl, getArticl,setEndedArticl, setLoading, setError)
},[pageArticl])

const dataResult = () => {

  switch (filter) {
    case 'Всі':
       return <AsideTest getFilter = {getFilter} loading = {loading} ended = {endedAll} error = {error} setPage = {setPageAll} page = {pageAll} data = {all}/> 
      break
    case 'Новини':
      return <AsideTest getFilter = {getFilter} loading = {loading} ended = {endedNews} error = {error} setPage = {setPageNews} page = {pageNews} data = {news}/>
      break
    case 'Статті':
    return <AsideTest getFilter = {getFilter} loading = {loading} ended = {endedArticl} error = {error} setPage = {setPageArticl} page = {pageArticl} data = {articl}/> 
     break
    default:
      break;
  }
 }

  return(
    <div className="news">
      {
       dataResult()
      }
    </div>
  )
}

export default NewsAside;


