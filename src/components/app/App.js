import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Page404 from '../../pages/Page404';

function App() {

  const StartPage = lazy(() => import('../../pages/StartPage'));
  const Articl = lazy(() => import('../articls/Articl'));
  const NewsPage = lazy(() => import('../../pages/NewsPage'));
  const PolitPage = lazy(() => import('../../pages/PolitPage'));
  const EconomicPage = lazy(() => import('../../pages/EconomicPage'));
  const SocioPage = lazy(() => import('../../pages/SocioPage'));
  const ViewsPage = lazy(() => import('../../pages/ViewsPage'));
  const WorldPage = lazy(() => import('../../pages/WorldPage'));
  const VideoPage = lazy(() => import('../videoPage/VideoPage'));
  const MoreVideoNews = lazy(() => import('../moreVideoNews/MoreVideoNews'));

  return (
  <Suspense fallback = { <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '300px'}}>Завантаження...</div> }>
      <Router>
        <Routes>
          <Route path = '/' element = {<StartPage/>}/>
          <Route path = '/:id' element = {<Articl/>}/>
          <Route path = '/video/:idvideo' element = {<VideoPage/>}/>
          <Route path='/videoPage' element = {<MoreVideoNews/>}/>

          <Route path = '/NewsPage' element = {<NewsPage/>}/>
          <Route path = '/PolitPage' element = {<PolitPage/>}/>
          <Route path = '/EconomPage' element = {<EconomicPage/>}/>
          <Route path = '/SocPage' element = {<SocioPage/>}/>
          <Route path = '/ViewsPage' element = {<ViewsPage/>}/>
          <Route path = '/WorldPage' element = {<WorldPage/>}/>
          <Route path = '*' element = {<Page404/>}/>
        </Routes>
    </Router>
  </Suspense>
  );
}

export default App;
