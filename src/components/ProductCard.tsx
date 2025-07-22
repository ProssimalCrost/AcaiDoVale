import type { Product } from '../types/Product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>R$ {product.price.toFixed(2)}</span>
    </div>
  );
}
