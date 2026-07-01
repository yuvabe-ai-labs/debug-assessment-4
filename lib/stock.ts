import { Product } from '@/types/shop'

export async function checkStock(_product: Product): Promise<boolean> {
  return new Promise((resolve) => setTimeout(() => resolve(true), 300))
}
