import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Banner from './components/Banner.js';
import FAQ from './components/FAQ.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Membership from './components/Membership.js';
import MoveSlider from './components/MoveSlider.js';
import Whyjoin from './components/Whyjoin.js';
import Login from './components/Login.js';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={
      <div className="app">
      <Header/>
      <Banner/>
      <MoveSlider/>
      <Whyjoin/>
      <FAQ/>
      <Membership/>
      <Footer/>
      </div>
      } />
      <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
