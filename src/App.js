import { Routes , Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="product/:id" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
