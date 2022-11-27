import Header from "../components/header/Header";
import Footer from "../footer/Footer";
import {Helmet} from "react-helmet";

const ViewsPage = () => {
  return(
    <>
      <Helmet>
          <meta
            name="description"
            content="Page with Views"
          />
          <title>Views page</title>
      </Helmet>
    <Header/>
    <Footer/>
    </>
  )
}
export default ViewsPage;