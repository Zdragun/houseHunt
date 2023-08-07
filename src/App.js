import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Tour from './components/Tour';
import AboutUs from './components/AboutUs';
import Extra from './components/Extra';
import Subscription from './components/Subscription';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Featured/>
      <Tour/>
      <AboutUs />
      <Extra/>
      <Subscription/>
      <Footer />
    </div>
  );
}

export default App;
