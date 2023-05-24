import './App.css';
import { Header } from './Components/Header/Header';
import { Welcome } from './Components/Welcome/Welcome';
import { SuppportingText } from './Components/SupportingText/SupportingText';
import { Carousel } from './Components/Carousel/Carousel';
import { Ourplan } from './Components/Ourplan/Ourplan';
import { Location } from './Components/Location/Location';
import { Products } from './Components/Products/Products';
import { Subscribe } from './Components/Subscribe/Subscribe';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <SuppportingText />
      <Carousel />
      <Ourplan />
      <Location />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
