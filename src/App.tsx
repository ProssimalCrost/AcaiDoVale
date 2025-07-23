import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import Hero from './components/Hero'
import type { Product } from './types/Product';

function App() {
  const [products, setProducts] = useState<Product[]>([
    // aqui pode vir um fetch ou dados mock
    { id: 1, name: 'Açaí 300ml', description: 'Açaí puro', price: 12.9, inventoryStatus: 'disponivel', image: '/img/acai300.png' },
    { id: 2, name: 'Açaí 500ml', description: 'Açaí com granola', price: 18.5, inventoryStatus: 'disponivel', image: '/img/acai500.png' },
    // …
  ]);

  return (
    <>
      <Header/>
      <Hero/>
    </>
  )
}


export default App
