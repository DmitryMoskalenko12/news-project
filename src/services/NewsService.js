import axios from "axios";

const useNewsService = () => {
  const getDataBaseVideo = async (limit, page) => {
    const result = await axios.get(`http://localhost:3001/videoIdBase?_limit=${limit}&_page=${page}`)
    return result.data
  }
  const getBigVideoId = async (id) => {
    const result = await axios.get(`http://localhost:3001/bigVideo/${id}`)
    return result.data
  }
  const getFourVideoId = async (id) => {
    const result = await axios.get(`http://localhost:3001/videoNews/${id}`)
    return result.data
  }
  const getPaginationPolit = async (limit, page) => {
    const result = await axios.get(`http://localhost:3001/paginationData?_limit=${limit}&_page=${page}`)
    return result
  }
  const getSingleArticl = async (id) => {
    const result = await axios.get(`http://localhost:3001/allnews/${id}`)
    return result.data
  }
  const getLifeBlock1 = async () => {
    const result = await axios.get(` http://localhost:3001/lifeBlock1`)
    return result.data
  }
  const getLifeBlock2 = async () => {
    const result = await axios.get(` http://localhost:3001/lifeBlock2`)
    return result.data
  }
  const getLifeTwoNews = async () => {
    const result = await axios.get(` http://localhost:3001/lifeTwonews`)
    return result.data
  }
  const getEconomicBlock1 = async () => {
    const result = await axios.get(` http://localhost:3001/economicBlock1`)
    return result.data
  }
  const getEconomicBlock2 = async () => {
    const result = await axios.get(`http://localhost:3001/economicBlock2`)
    return result.data
  }
  const getEconomicTwoNews = async () => {
    const result = await axios.get(`http://localhost:3001/economicTwonews`)
    return result.data
  }
  const getPromoDescr = async () => {
    const result = await axios.get(`http://localhost:3001/promoDescr`)
    return result.data
  }
  const getPromoSlider = async () => {
    const result = await axios.get(`http://localhost:3001/promoSliders`)
    return result.data
  }
  const getBlock1 = async () => {
    const result = await axios.get(`http://localhost:3001/block1`)
    return result.data
  }
  const getTwoNews = async () => {
    const result = await axios.get(`http://localhost:3001/twonews`)
    return result.data
  }
  const getBlock2 = async () => {
    const result = await axios.get(`http://localhost:3001/block2`)
    return result.data
  }
  const getColonAuthor = async (limit, page) => {
    const result = await axios.get(`http://localhost:3001/colonAuthor?_limit=${limit}&_page=${page}`)
    return result.data
  }
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
      path: res.path,
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
    getBigVideo,
    getColonAuthor,
    getBlock1,
    getTwoNews,
    getBlock2,
    getPromoDescr,
    getPromoSlider,
    getEconomicBlock1,
    getEconomicBlock2,
    getEconomicTwoNews,
    getLifeBlock1,
    getLifeBlock2,
    getLifeTwoNews,
    getSingleArticl,
    getPaginationPolit,
    getBigVideoId,
    getFourVideoId,
    getDataBaseVideo
  }
}
export default useNewsService;
