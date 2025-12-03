import './App.css';
import Client from './Client';
import Footer from './Footer';
import Header from './Header';
import Intro from './Intro';
import Skills from './Skills';
import Work from './Work';
const App = () => {
    return(
      <div className='app'>
        <Header />
        <Intro />
        <Skills />
        <Work />
        <Client />
        <Footer />
      </div>//dont use this

    )
  }

export default App
