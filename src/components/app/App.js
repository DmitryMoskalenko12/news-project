import './app.scss';
import Header from '../header/Header';
import SectionSlider from '../sectionSlider/SectionSlider';
import NewsSection from '../newsSection/NewsSection';
import Redaction from '../redaction/Redaction';
import RegionalNews from '../regionalNews/RegionalNews';

function App() {
  return (
    <>
     <Header/>
     <SectionSlider/>
      <div className='newswrap'>
      <NewsSection/>
      <div className='regandredac'>
      <Redaction/>
      <RegionalNews/>
      </div>

     </div>
     
    </>
  );
}

export default App;
