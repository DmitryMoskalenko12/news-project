import { useParams } from "react-router-dom";
import useNewsService from "../../services/NewsService";
import { useState,useEffect } from "react";
import Header from "../header/Header";
import Footer from "../../footer/Footer";
import './articl.scss';

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
    <Header/>
    <section className="articlinfo">
      <div className="articlinfo__place">
        <div>{time}</div>
        <div>{content}</div>
      </div>
    </section>
    <Footer/>
    </div>
  )
}
export default Articl;