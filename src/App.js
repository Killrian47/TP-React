// Import CSS
import './App.css';
import './Footer.css';
import './Header.css';
import './Product.css';
import './BestProduct.css'

// Import JSX file
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Cgv from './pages/Cgv.jsx';
import AllCanapes from './pages/AllCanapes.jsx';

const products =[
  {
    id:1,
    title:"Canapé cuir",
    price:1000,
    rating:4.5,
    isPublished:true,
  },
  {
    id:2,
    title:"Canapé tissu",
    price:800,
    rating:3.5,
    isPublished:false,
  },
  {
    id:3,
    title:"Canapé velours",
    price:1200,
    rating:5,
    isPublished:true,
  },
  {
    id:4,
    title:"Canapé lin",
    price:900,
    rating:2.5,
     isPublished:false,
    },
    {
      id:5,
      title:"Canapé cotton",
      price:900,
      rating:2.2,
      isPublished:true,
    },
    {
      id:6,
      title:"Canapé cuir de vache",
      price:600,
      rating:1.5,
      isPublished:false,
    },
    {
      id:7,
      title:"Canapé cuir de chèvre",
      price:700,
      rating:2,
      isPublished:true,
    },
  ];


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home products={products}/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cgv" element={<Cgv />} />
        <Route path="/canapes" element={<AllCanapes products={products}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
