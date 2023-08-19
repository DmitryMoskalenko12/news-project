import axios from "axios";
import { videoIdBase } from "../dummy data/dummy-data";
import { fetchServerData } from "./request";
import { filterId } from "./request";
import { bigVideo } from "../dummy data/dummy-data";
import { videoNews } from "../dummy data/dummy-data";
import { paginationData } from "../dummy data/dummy-data";
import { allnews } from "../dummy data/dummy-data";
import { lifeBlock1 } from "../dummy data/dummy-data";
import { lifeBlock2 } from "../dummy data/dummy-data";
import { lifeTwonews } from "../dummy data/dummy-data";
import { economicBlock1 } from "../dummy data/dummy-data";
import { economicBlock2 } from "../dummy data/dummy-data";
import { economicTwonews } from "../dummy data/dummy-data";
import { promoDescr } from "../dummy data/dummy-data";
import { promoSliders } from "../dummy data/dummy-data";
import { block1 } from "../dummy data/dummy-data";
import { twonews } from "../dummy data/dummy-data";
import { block2 } from "../dummy data/dummy-data";
import { colonAuthor } from "../dummy data/dummy-data";
import { sliderData } from "../dummy data/dummy-data";
import { regionNews } from "../dummy data/dummy-data";
import { redactionNews } from "../dummy data/dummy-data";
import { news } from "../dummy data/dummy-data";
import { articl } from "../dummy data/dummy-data";

const useNewsService = () => {
  const getDataBaseVideo = /* async */ (limit, page) => {
    /* const result =  *//* await axios.get(`http://localhost:3001/videoIdBase?_limit=${limit}&_page=${page}`) */
    const data = fetchServerData(limit, page, videoIdBase)
    return /* result.data */ data;
  }

  const getBigVideoId = (id) => {
    const result = filterId(id, bigVideo);
    return result;
  }

  const getFourVideoId = (id) => {
    const result = filterId(id, videoNews);
    return result;
  }

  const getPaginationPolit = (limit, page) => {
    const data = fetchServerData(limit, page, paginationData)
    return data;
  
  }

  const getSingleArticl = (id) => {
    const result = filterId(id, allnews);
    return result;
  } 

  const getLifeBlock1 = () => {
    return lifeBlock1;
  }

  const getLifeBlock2 = () => {
    return lifeBlock2;
  }

  const getLifeTwoNews = () => {
    return lifeTwonews;
  }

  const getEconomicBlock1 = () => {
    return economicBlock1;
  }

  const getEconomicBlock2 = () => {
    return economicBlock2;
  }

  const getEconomicTwoNews = () => {
    return economicTwonews;
  }

  const getPromoDescr = () => {
    return promoDescr;
  }

  const getPromoSlider = () => {
    return promoSliders;
  }

  const getBlock1 = () => {
    return block1;
  }

  const getTwoNews = () => {
    return twonews;
  }

  const getBlock2 = () => {
    return block2;
  }

  const getColonAuthor = (limit, page) => {
    const data = fetchServerData(limit, page, colonAuthor)
    return data;
  }

  const getVideoNews = () => {
    return videoNews;
  }

  const getBigVideo =  () => {
     return bigVideo;
  }

  const getSliders = () => {
    return sliderData;
  }

  const getRegionNews = () => {
    const result = regionNews;
    return result.map(_dataRegionNewsTransform) 
   }
  
  const getRedaction = () => {
    const result = redactionNews;
    return result.map(_dataRedactionTransform) 
   }

  const getNews = (limit, page) => {
   const result = fetchServerData(limit, page, news)
   return result.map(_dataNewsTransform); 
  }

  const getArticl = (limit, page) => {
   const result = fetchServerData(limit, page, articl)
   return result.map(_dataArticlTransform) 
  }

  const getAllNews = (limit, page) =>{
   const result = fetchServerData(limit, page, allnews)
   return result.map(_dataTransform) 
  
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
