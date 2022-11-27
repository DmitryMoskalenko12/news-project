import Header from "../components/header/Header";
import Footer from "../footer/Footer";
import {Helmet} from "react-helmet";

const EconomicPage = () => {
  return(
    <>
    <Helmet>
        <meta
          name="description"
          content="Page with Economic"
        />
        <title>Economic page</title>
    </Helmet>
    <Header/>
    <Footer/>
    </>
  )
}
export default EconomicPage;