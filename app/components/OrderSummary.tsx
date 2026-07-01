'use client'
import { DisplayItem } from '@/types/shop'

interface OrderSummaryProps {
  displayItems: DisplayItem[]
}

export function OrderSummary({ displayItems }: OrderSummaryProps) {
  const total = displayItems.reduce(
    (sum, item) => sum + item.price * (item.qty ?? 1),
    0
  )

  return (
    <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm text-zinc-400">Subtotal</p>
        <p className="text-sm text-white font-medium">${total}</p>
      </div>
      <div className="flex items-center justify-between pt-3 border-t border-zinc-800">
        <p className="text-sm font-semibold text-white">Total</p>
        <p className="text-lg font-bold text-white">${total}</p>
      </div>
      <button className="w-full mt-4 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm text-white font-medium transition-colors">
        Checkout
      </button>
    </div>
  )
}
