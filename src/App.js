import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ContextProvider from './context/ContextProvider';
import DetailView from './components/ItemDetails/DetailView';
import Cart from './components/cart/Cart';
import DetailForm from './components/detailEnter/DetailForm';

function App() {
  return (
    <ContextProvider>

    <div className="App">
     <BrowserRouter>
     <Header />
     <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/detail" element={<DetailForm />} />
     <Route path= '/cart' element={<Cart />} />
     <Route path="/product/:id" element={<DetailView/>} />
     </Routes>
     </BrowserRouter>
    </div>
    </ContextProvider>
  );
}

export default App;
