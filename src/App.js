import './App.scss';
import Banner from './components/Banner.js';
import FAQ from './components/FAQ.js';
import Header from './components/Header.js';

const App = () => {
  return (
    <div className="app">
      <Header/>
      <Banner/>
      <FAQ/>
    </div>
  );
};

export default App;
