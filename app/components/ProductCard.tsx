'use client'
import { useState } from 'react'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import { Product } from '@/types/shop'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
  onAdd: (product: Product, qty: number) => void
}

export function ProductCard({ product, onSelect, onAdd }: ProductCardProps) {
  const [qty, setQty] = useState(1)

  const decrement = (e: React.MouseEvent) => {
    e.stopPropagation()
    setQty((q) => Math.max(1, q - 1))
  }

  const increment = (e: React.MouseEvent) => {
    e.stopPropagation()
    setQty((q) => Math.min(10, q + 1))
  }

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation()
    onAdd(product, qty)
    setQty(1)
  }

  return (
    <div
      onClick={() => onSelect(product)}
      className="p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
    >
      <div className="mb-3">
        <p className="text-sm font-medium text-white">{product.name}</p>
        <p className="text-xs text-zinc-500 mt-0.5">{product.category}</p>
      </div>
      <p className="text-blue-400 font-semibold text-lg mb-3">${product.price}</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-zinc-800 rounded-lg p-0.5">
          <button
            onClick={decrement}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <span className="text-sm text-white w-6 text-center">{qty}</span>
          <button
            onClick={increment}
            className="p-1 text-zinc-400 hover:text-white transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
        <button
          onClick={handleAdd}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-xs text-white font-medium transition-colors"
        >
          <ShoppingCart className="w-3 h-3" />
          Add
        </button>
      </div>
    </div>
  )
}
