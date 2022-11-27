import { useParams } from "react-router-dom";
import useNewsService from "../../services/NewsService";
import { useState,useEffect } from "react";

const Articl = () => {
const {getSingleArticl} = useNewsService();
const [singleArticl, setSingleArticl] = useState({})

  const {id} = useParams();

  useEffect(() => {
  getSingleArticl(id)
  .then((res) => setSingleArticl(res))
  .catch((e) => console.log(e))
  },[])

const {content, time} = singleArticl;

  return(
    <div>
    <div>{time}</div>
    <div>{content}</div>
    </div>
  )
}
export default Articl;