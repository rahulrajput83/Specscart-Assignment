/* Imports */
import Awards from './Components/Awards/Awards';
import Cart from './Components/Cart/Cart';
import Follow from './Components/Follow/Follow';
import Footer from './Components/Footer/Footer';
import Glasses from './Components/Glasses/Glasses';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';

/* Functional Component */
function App() {
  return (
    <div className='w-full flex flex-col'>
      {/* Rendering Header Component */}
      <Header />
      {/* Rendering Glasses Component */}
      <Glasses />
      {/* Rendering Reviews Component */}
      <Reviews />
      {/* Rendering Cart Component */}
      <Cart />
      {/* Rendering Awards Component */}
      <Awards />
      {/* Rendering Follow Component */}
      <Follow />
      {/* Rendering Follow Component */}
      <Footer />
    </div>
  );
}

/* Export App Component */
export default App;
