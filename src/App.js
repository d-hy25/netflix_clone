import './App.scss';
import Banner from './components/Banner.js';
import FAQ from './components/FAQ.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Membership from './components/Membership.js';
import MoveSlider from './components/MoveSlider.js';
import Whyjoin from './components/Whyjoin.js';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <MoveSlider/>
      <Whyjoin/>
      <FAQ/>
      <Membership/>
      <Footer/>
    </div>
  );
};

export default App;
