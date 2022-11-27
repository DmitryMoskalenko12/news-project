import Header from "../components/header/Header";
import Footer from "../footer/Footer";
import PaginationBlock from "../components/PaginitionBlock/PaginationBlock";
import {Helmet} from "react-helmet";


const PolitPage = () => {
  return(
    <>
    <Helmet>
        <meta
          name="description"
          content="Page with Politics"
        />
        <title>Politics page</title>
    </Helmet>

    <Header/>
    <PaginationBlock/>
    <Footer/>
    </>
  )
}
export default PolitPage;