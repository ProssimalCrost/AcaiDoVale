import type { Product } from '../types/Product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <ul className="product-list">
      {products.map((prod) => (
        <li key={prod.id}>
          <ProductCard product={prod} />
        </li>
      ))}
    </ul>
  );
}
