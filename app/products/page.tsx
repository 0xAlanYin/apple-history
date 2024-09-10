'use client';

import { AppleProducts } from "@/components/apple-products"
import { BackToHistoryButton } from "@/components/BackToHistoryButton"

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <BackToHistoryButton />
      <AppleProducts />
    </div>
  )
}