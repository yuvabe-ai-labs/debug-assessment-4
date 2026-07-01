'use client'
import { Product } from '@/types/shop'
import { ProductCard } from './ProductCard'

interface ProductGridProps {
  products: Product[]
  onSelect: (product: Product) => void
  onAdd: (product: Product, qty: number) => void
}

export function ProductGrid({ products, onSelect, onAdd }: ProductGridProps) {
  return (
    <div>
      <h2 className="text-lg font-semibold text-white mb-4">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onSelect={onSelect}
            onAdd={onAdd}
          />
        ))}
      </div>
    </div>
  )
}
