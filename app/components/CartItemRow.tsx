'use client'
import { Trash2 } from 'lucide-react'
import { CartItem } from '@/types/shop'

interface CartItemRowProps {
  item: CartItem
  onRemove: (id: string) => void
}

export function CartItemRow({ item, onRemove }: CartItemRowProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-zinc-900 rounded-lg border border-zinc-800">
      <div className="flex-1 min-w-0">
        <p className="text-sm text-white truncate">{item.name}</p>
        <p className="text-xs text-zinc-500">
          {item.qty} × ${item.price}
        </p>
      </div>
      <p className="text-sm text-white font-medium shrink-0">
        ${item.qty * item.price}
      </p>
      <button
        onClick={() => onRemove(item.id)}
        className="p-1 text-zinc-500 hover:text-red-400 transition-colors shrink-0"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  )
}
