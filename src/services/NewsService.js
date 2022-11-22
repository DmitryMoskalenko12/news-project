import axios from "axios";

const useNewsService = () => {

  const getVideoNews = async () => {
    const result = await axios.get('http://localhost:3001/videoNews')
    return result.data
  }
  const getBigVideo = async () => {
    const result = await axios.get('http://localhost:3001/bigVideo')
    return result.data
  }
  const getSliders = async () => {
   const result = await axios.get('http://localhost:3001/sliderData')
   return result.data
  }

  const getRegionNews = async () =>{
    const result = await axios.get(`http://localhost:3001/regionNews`)
    return result.data.map(_dataRegionNewsTransform) 
   }
  
  const getRedaction = async () =>{
    const result = await axios.get(`http://localhost:3001/redactionNews`)
    return result.data.map(_dataRedactionTransform) 
   }

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
  const _dataRedactionTransform = (res) => {
    return {
      content: res.content,
      src: res.src,
      date: res.date,
      id: res.id
    }
  }
  const _dataRegionNewsTransform = (res) => {
    return {
      town: res.town,
      subdate: res.subdate,
      subdate2: res.subdate2,
      content: res.content,
      src: res.src,
      id: res.id
    }
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
    getNews,
    getRedaction,
    getRegionNews,
    getSliders,
    getVideoNews,
    getBigVideo
  }
}
export default useNewsService;
