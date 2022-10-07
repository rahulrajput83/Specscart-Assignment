import Awards from './Components/Awards/Awards';
import Cart from './Components/Cart/Cart';
import Follow from './Components/Follow/Follow';
import Footer from './Components/Footer/Footer';
import Glasses from './Components/Glasses/Glasses';
import Header from './Components/Header/Header';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className='w-full flex flex-col'>
      <Header />
      <Glasses />
      <Reviews />
      <Cart />
      <Awards />
      <Follow />
      <Footer />
    </div>
  );
}

export default App;
