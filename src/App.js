import { useState } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import { Welcome } from './Components/Welcome/Welcome';
import { SuppportingText } from './Components/SupportingText/SupportingText';
import { Carousel } from './Components/Carousel/Carousel';
// import { Ourplan } from './Components/Ourplan/Ourplan';
// import { Location } from './Components/Location/Location';
// import { Products } from './Components/Products/Products';
// import { Subscribe } from './Components/Subscribe/Subscribe';
// import { Footer } from './Components/Footer/Footer';
import { MobileMenu } from './Components/MobileMenu/MobileMenu';

function App() {
  const [menuToggler, setMenuToggler] = useState(false);

  return (
    <div className="App">
      <Header menuTogglerFunction={setMenuToggler} menuTogglerValue={menuToggler} />

      {menuToggler && <MobileMenu />}
      <Welcome />
      <SuppportingText />
      <Carousel />
      {/* <Ourplan /> */}
      {/* <Location /> */}
      {/* <Products /> */}
      {/* <Subscribe /> */}
      {/* <Footer />  */}
    </div>
  );
}

export default App;
