"use client"

import { Input } from "@*/components/ui/input"
import { Button } from "@*/components/ui/button"

export default function ChequeBalance() {
  return (
    <div className="p-6 max-w-md">
      <h1 className="text-xl font-semibold mb-4">Cheque Balance</h1>

      <Input placeholder="Cheque Number" className="mb-3" />
      <Input placeholder="Account Number" className="mb-3" />

      <Button>Check Balance</Button>
    </div>
  )
}