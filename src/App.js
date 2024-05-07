import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import useContentful from './hooks/useContentful';
import ProductCard from './components/ProductCard';

function App() {
  const [products, setProducts] = useState([]);
  const { getProducts } = useContentful();

  /* useEffect(() => {
    getProducts().then((response) => {
      response && setProducts(response)
      console.log(response);
    });
  }); */

  const product = [{
    name: "Caramel Flan",
    description: "Basically a Flan, but caramelized.",
    avatar: {
      title: 'Caramel Flan',
      description: '',
      file: {
        contentType: "image/jpeg",
        fileName: "Product3.jpg",
        url: "//images.ctfassets.net/2gssinhyknyf/2CcI7wMc7sSfyTqTqesSqN/f64a6c0a4fe39a9db3affad3db9ffd9b/Product3.jpg",
        details: {
          image: { width: 3900, height: 4875 },
          size: 1639283
        }
      },
    },
  }]

  return (
    <>
      <Header />
      {product.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
}

export default App;
