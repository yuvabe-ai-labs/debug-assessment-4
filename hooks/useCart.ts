'use client'
import { useState } from 'react'
import { Product, CartItem } from '@/types/shop'

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([])
  const [itemCount, setItemCount] = useState(0)

  const addItem = (product: Product, qty: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + qty } : i
        )
      }
      return [...prev, { ...product, qty }]
    })
    setItemCount((c) => c + qty)
  }

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }

  return { items, addItem, removeItem, itemCount }
}
