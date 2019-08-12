import React from 'react';
import Routes from './routes';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => (
  <div id="root">
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  </div>
);

export default App;
