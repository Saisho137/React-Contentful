import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import useContentful from './hooks/useContentful';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const { getProducts } = useContentful();

  useEffect(() => {
    getProducts().then((response) => response && setProducts(response));
    console.log('Fetching');
  });

  return (
    <>
      <Header />
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
}

export default App;
