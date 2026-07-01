'use client'
import { ShoppingBag } from 'lucide-react'
import { CartBadge } from './CartBadge'

interface HeaderProps {
  itemCount: number
}

export function Header({ itemCount }: HeaderProps) {
  return (
    <nav className="border-b border-zinc-800 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <ShoppingBag className="w-5 h-5 text-blue-400" />
        <span className="text-white font-semibold text-sm">ShopCart</span>
      </div>
      <CartBadge count={itemCount} />
    </nav>
  )
}
