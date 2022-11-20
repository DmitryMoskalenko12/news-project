import axios from "axios";

const useNewsService = () => {
  
  const getNews = async (limit, page) =>{
   const result = await axios.get(`http://localhost:3001/news?_limit=${limit}&_page=${page}`)
   return result.data.map(_dataNewsTransform) 
  }

  const getArticl = async (limit, page) =>{
   const result = await axios.get(`http://localhost:3001/articl?_limit=${limit}&_page=${page}`)
   return result.data.map(_dataArticlTransform) 
  }

  const getAllNews = async (limit, page) =>{
  const result = await axios.get(`http://localhost:3001/allnews?_limit=${limit}&_page=${page}`)
   
   return result.data.map(_dataTransform) 
  
  }
  const _dataArticlTransform = (res) =>{
    return {
      content: res.content,
      time: res.time,
      id: res.id
    }
  }
  const _dataTransform = (res) => {
    return {
      content: res.content,
      time: res.time,
      id: res.id
    }
  }
  const _dataNewsTransform = (res) => {
    return {
      content: res.content,
      time: res.time,
      id: res.id
    }
  }
  return{
    getAllNews,
    getArticl,
    getNews
  }
}
export default useNewsService;
