export interface Product {
  id: string
  name: string
  price: number
  category: string
  description: string
}

export interface CartItem extends Product {
  qty: number
}

export interface DisplayItem {
  id: string
  name: string
  price: number
  qty?: number
}
