
import React, { useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Leadership from './pages/Leadership';
import News from './pages/News';
import Membership from './pages/Membership';
import VoteFinder from './pages/VoteFinder';
import Youth from './pages/Youth';
import Contact from './pages/Contact';
import About from './pages/About';
import Policies from './pages/Policies';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Interviews from './pages/Interviews';
import MediaHub from './pages/MediaHub';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={setActivePage} />;
      case 'about':
        return <About />;
      case 'leadership':
        return <Leadership />;
      case 'policies':
        return <Policies />;
      case 'events':
        return <Events />;
      case 'media-hub':
        return <MediaHub onNavigate={setActivePage} />;
      case 'news':
        return <News onNavigate={setActivePage} />;
      case 'media-gallery':
        return <Gallery />;
      case 'media-interviews':
        return <Interviews />;
      case 'membership':
        return <Membership />;
      case 'vote-finder':
        return <VoteFinder />;
      case 'youth':
        return <Youth />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <Layout activePage={activePage} onNavigate={setActivePage}>
      {renderPage()}
    </Layout>
  );
};

export default App;
