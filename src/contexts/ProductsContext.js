import { createContext, useEffect, useState } from 'react'
import {
  createProduct,
  deleteProduct,
  listProducts,
} from '../services/requests/products'

export const ProductContext = createContext({});

export function ProductProvider({children}) {
  const [productQuantity, setProductQuantity] = useState(0);
  const [products, setProducts] = useState([]);
  const [lastSeeProducts, setLastSeeProducts] = useState([]);

  // useEffect(() => {
  //   loadProducts();
  // }, [])

  async function loadProducts() {
    const responseProducts = await listProducts();
    if (responseProducts) {
      setProducts(responseProducts);
      setProductQuantity(responseProducts.length)
    }
  }

  async function addProduct(product) {
    product = await createProduct(product);
    setProductQuantity(productQuantity + 1);

    let temporaryProducts = products;
    temporaryProducts.push(product);
    setProducts(temporaryProducts);

    let temporaryLastSeeProducts = new Set(lastSeeProducts);
    temporaryLastSeeProducts.add(product);
    setLastSeeProducts([...temporaryLastSeeProducts]);
  }

  async function deleteProducts() {
    products.forEach((product) => {deleteProduct(product.id)});
    setProducts([]);
    setProductQuantity(0);
  }

  return (
    <ProductContext.Provider value={{
      productQuantity,
      products,
      lastSeeProducts,
      addProduct,
      deleteProducts,
    }}>
      {children}
    </ProductContext.Provider>
  )
}
