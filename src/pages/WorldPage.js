import Header from "../components/header/Header";
import Footer from "../footer/Footer";
import {Helmet} from "react-helmet";

const WorldPage = () => {
  return(
    <>
      <Helmet>
          <meta
            name="description"
            content="Page with World"
          />
          <title>World page</title>
      </Helmet>
    <Header/>
    <Footer/>
    </>
  )
}
export default WorldPage;