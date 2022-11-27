import Header from "../components/header/Header";
import Footer from "../footer/Footer";
import {Helmet} from "react-helmet";

const SocioPage = () => {
  return(
    <>
      <Helmet>
          <meta
            name="description"
            content="Page with Society"
          />
          <title>Society page</title>
      </Helmet>
    <Header/>
    <Footer/>
    </>
  )
}
export default SocioPage;