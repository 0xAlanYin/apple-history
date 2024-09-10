'use client';

import { AppleFounders } from "@/components/apple-founders"
import { BackToHistoryButton } from "@/components/BackToHistoryButton"

export default function FoundersPage() {
  return (
    <div className="container mx-auto p-4">
      <BackToHistoryButton />
      <AppleFounders />
    </div>
  )
}