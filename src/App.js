import { Routes , Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './Dashboard/Products';
import Categories from './Dashboard/Categories';
import Dashboard from './Dashboard/Dashboard';
import Veiwproduct from './Dashboard/Veiwproduct';
import CreateProduct from './Dashboard/CreateProduct';
import Updateproduct from './Dashboard/Updateproduct';


function App() {
  return (
    <div className='App'>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/dashboard' element={<Dashboard />}>
      <Route path='products' element={<Products />} />
      <Route path='products/:id' element={<Veiwproduct />} />
      <Route path='products/add' element={<CreateProduct />} />
      <Route path='products/update/:id' element={<Updateproduct />} />
      <Route path='category' element={<Categories />} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
