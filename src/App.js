import './App.css';
import { Header } from './Components/Header/Header';
import { SuppportingText } from './Components/SupportingText/SupportingText';
import { Welcome } from './Components/Welcome/Welcome';
import { Products } from './Components/Products/Products';
import { Subscribe } from './Components/Subscribe/Subscribe';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <SuppportingText />
      <Products />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
