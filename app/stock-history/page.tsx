'use client';

import { AppleStockHistory } from "@/components/apple-stock-history"
import { BackToHistoryButton } from "@/components/BackToHistoryButton"

export default function StockHistoryPage() {
  return (
    <div className="container mx-auto p-4">
      <BackToHistoryButton />
      <AppleStockHistory />
    </div>
  )
}