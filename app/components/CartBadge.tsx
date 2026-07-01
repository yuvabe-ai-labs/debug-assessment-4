'use client'
import { ShoppingCart } from 'lucide-react'

interface CartBadgeProps {
  count: number
}

export function CartBadge({ count }: CartBadgeProps) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800/60 rounded-lg text-sm border border-zinc-700/50">
      <ShoppingCart className="w-3.5 h-3.5 text-blue-400" />
      <span className="text-white font-medium">{count}</span>
      <span className="text-zinc-500 text-xs">items</span>
    </div>
  )
}
