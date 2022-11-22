import useNewsService from "../services/NewsService";

const useAsideNewsPanel = ( limit, 
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
                            news) => {
                              
  const {getAllNews, getArticl, getNews} = useNewsService()

  const setDataNewsAll = () => {

    setLoading(true)
    getAllNews(limit, page)
    .then((res) => {
      if (res.length < 10) {
        setEnded(true)
      }
      setAllNews([...allnews, ...res]);
      setLoading(false)
    })
    .catch(() => setError(true))
}
const setDataArticl = () => {
    setLoading(true)
    getArticl(limit, pagearticl)
    .then((res) => {
      if (res.length < 10) {
        setEndedArticl(true)
      }
      setArticl([...articl, ...res]);
      setLoading(false);
    })
    .catch(() => setError(true))
}
const setDataNews = () => {
    setLoading(true)
    getNews(limit, pageNews)
    .then((res) => {
      if (res.length < 10) {
        setEndedNews(true)
      }
      setNews([...news, ...res]);
      setLoading(false);
    })
    .catch(() => setError(true))
}
return {setDataNews, setDataArticl, setDataNewsAll}
}
export default useAsideNewsPanel;