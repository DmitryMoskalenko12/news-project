import Header from "../components/header/Header";
import Footer from "../footer/Footer";
import {Helmet} from "react-helmet";

const NewsPage = () => {
  return(
    <>
    <Helmet>
        <meta
          name="description"
          content="Page with News"
        />
        <title>News page</title>
    </Helmet>
    <Header/>
    <Footer/>
    </>
  )
}
export default NewsPage;