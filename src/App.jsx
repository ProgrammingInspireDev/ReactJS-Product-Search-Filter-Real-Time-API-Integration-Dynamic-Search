import React, { useEffect, useState } from 'react';
import './App.css';
import {FaSearch} from 'react-icons/fa';
import axios from 'axios';


const App = () => {

  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
   const fetchProducts = async() => {
    try{
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
      console.log(res.data);
    }catch(error){
      console.log('Error fetching');
    }
   };

   fetchProducts();
  },[])


  const filterProducts = products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return(
    <div className='container'>
      <h1 className='title'>ProgrammingInspireDev Product Search</h1>

      <div className='search-bar'>
        <FaSearch className='search-icon'/>
        <input 
        type='text' 
        placeholder='Search Products....' 
        className='search-input'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>

      <div className='product-grid'>
        {filterProducts.map(product => (
          <div className='product-card'>
            <img src={product.image} alt={product.title} className='product-image'/>
            <h2 className='product-title'>{product.title}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}


export default App;