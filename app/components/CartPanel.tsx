'use client'
import { CartItem, DisplayItem } from '@/types/shop'
import { CartItemRow } from './CartItemRow'
import { OrderSummary } from './OrderSummary'

interface CartPanelProps {
  items: CartItem[]
  onRemove: (id: string) => void
}

export function CartPanel({ items, onRemove }: CartPanelProps) {
  const displayItems: DisplayItem[] = items.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price,
  }))

  if (items.length === 0) {
    return (
      <div className="w-80 shrink-0">
        <h2 className="text-lg font-semibold text-white mb-4">Cart</h2>
        <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center text-zinc-500 text-sm">
          Your cart is empty
        </div>
      </div>
    )
  }

  return (
    <div className="w-80 shrink-0">
      <h2 className="text-lg font-semibold text-white mb-4">Cart</h2>
      <div className="space-y-2 mb-4">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} onRemove={onRemove} />
        ))}
      </div>
      <OrderSummary displayItems={displayItems} />
    </div>
  )
}
