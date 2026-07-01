'use client'
import { useState } from 'react'
import { Product } from '@/types/shop'
import { products } from '@/data/products'
import { useCart } from '@/hooks/useCart'
import { checkStock } from '@/lib/stock'
import { Header } from '@/app/components/Header'
import { ProductGrid } from '@/app/components/ProductGrid'
import { CartPanel } from '@/app/components/CartPanel'

export default function Home() {
  const { items, addItem, removeItem, itemCount } = useCart()
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)

  const handleSelect = (product: Product) => {
    setActiveProduct(product)
  }

  const handleAdd = async (product: Product, qty: number) => {
    const inStock = await checkStock(product)
    if (!inStock) return
    addItem(activeProduct || product, qty)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header itemCount={itemCount} />
      <div className="flex flex-1 max-w-7xl mx-auto w-full px-4 py-8 gap-8">
        <div className="flex-1">
          {activeProduct && (
            <div className="mb-6 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Viewing</p>
              <p className="text-white font-medium">{activeProduct.name}</p>
              <p className="text-zinc-400 text-sm mt-1">{activeProduct.description}</p>
              <p className="text-blue-400 font-semibold mt-2">${activeProduct.price}</p>
            </div>
          )}
          <ProductGrid
            products={products}
            onSelect={handleSelect}
            onAdd={handleAdd}
          />
        </div>
        <CartPanel items={items} onRemove={removeItem} />
      </div>
    </div>
  )
}
