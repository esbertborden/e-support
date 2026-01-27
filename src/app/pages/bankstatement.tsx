"use client"

import { Input } from "@*/components/ui/input"
import { Button } from "@*/components/ui/button"

export default function BankStatement() {
  return (
    <div className="p-6 max-w-md">
      <h1 className="text-xl font-semibold mb-4">Bank Statement</h1>

      <Input placeholder="Account Number" className="mb-3" />
      <Input type="date" className="mb-3" />
      <Input type="date" className="mb-3" />

      <Button>Request Statement</Button>
    </div>
  )
}