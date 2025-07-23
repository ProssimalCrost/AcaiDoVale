import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import type { Product } from '../types/Product';
import { motion } from 'framer-motion';

export default function HeroSectionWithCarousel() {
  const [products, setProducts] = useState<Product[]>([]);

  const responsiveOptions = [
    { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
    { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
    { breakpoint: '767px', numVisible: 2, numScroll: 1 },
    { breakpoint: '575px', numVisible: 1, numScroll: 1 }
  ];

  const getSeverity = (product: Product) => {
    switch (product.inventoryStatus) {
      case 'INSTOCK': return 'success';
      case 'LOWSTOCK': return 'warning';
      case 'OUTOFSTOCK': return 'danger';
      default: return null;
    }
  };

  useEffect(() => {
    ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
  }, []);

  const productTemplate = (product: Product) => (
    <div className="border-1 surface-border border-round m-2 text-center py-5 px-3 bg-white rounded-xl shadow-md">
      <div className="mb-3">
        <img src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`} alt={product.name} className="w-6 shadow-2 mx-auto" />
      </div>
      <h4 className="mb-1">{product.name}</h4>
      <h6 className="mt-0 mb-3">${product.price}</h6>
      <Tag value={product.inventoryStatus} severity={getSeverity(product)} />
      <div className="mt-5 flex flex-wrap gap-2 justify-center">
        <Button icon="pi pi-search" className="p-button-rounded" />
        <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" />
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-purple-800 to-purple-600 px-8 py-16">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Texto animado */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-white space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold">Sinta o sabor do Açaí do Aço</h1>
          <p className="text-lg md:text-xl">O melhor açaí da região, com ingredientes selecionados e qualidade premium.</p>
          <button className="bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-purple-100 transition">Peça Agora</button>
        </motion.div>

        {/* Imagem animada */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="src/assets/images/background/parallax/Website_Collections_HeaderBanner_SFP_1013x900_a01e4949-4e8b-4310-b28f-c4ae7602a820.webp" 
            alt="Mulher comendo açaí"
            className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Carrossel */}
      <div className="mt-16 max-w-6xl mx-auto w-full">
        <Carousel
          value={products}
          numVisible={3}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={3000}
          itemTemplate={productTemplate}
        />
      </div>
    </section>
  );
}
