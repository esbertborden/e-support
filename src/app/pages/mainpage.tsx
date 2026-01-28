"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@*/components/ui/sidebar"

import { Button } from "@*/components/ui/button"
import { Input } from "@*/components/ui/input"
import {
  Home,
  FileText,
  CreditCard,
  Settings,
} from "lucide-react"

type Tab = "home" | "bank" | "cheque" | "settings"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<Tab>("home")

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>

            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeTab === "home"}
                  onClick={() => setActiveTab("home")}
                >
                  <Home />
                  <span>Home</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeTab === "bank"}
                  onClick={() => setActiveTab("bank")}
                >
                  <FileText />
                  <span>Bank Statement</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeTab === "cheque"}
                  onClick={() => setActiveTab("cheque")}
                >
                  <CreditCard />
                  <span>Cheque Balance</span>
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeTab === "settings"}
                  onClick={() => setActiveTab("settings")}
                >
                  <Settings />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter />
      </Sidebar>

      <SidebarInset>
        <div className="p-6">
          {activeTab === "home" && <HomeContent />}
          {activeTab === "bank" && <BankStatementForm />}
          {activeTab === "cheque" && <ChequeBalanceForm />}
          {activeTab === "settings" && <SettingsContent />}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

/* ---------- CONTENT SECTIONS ---------- */

function HomeContent() {
  return (
    <>
      <h1 className="text-2xl font-bold">Welcome 👋</h1>
      <p className="mt-2 text-muted-foreground">
        Use the sidebar to navigate through your banking options.
      </p>
    </>
  )
}

function BankStatementForm() {
  return (
    <div className="max-w-md">
      <h1 className="text-xl font-semibold text-white-200 mb-8">Bank Statement</h1>

      <Input placeholder="Account Number" className="mb-3" />
      <Input type="date" className="mb-3" />
      <Input type="date" className="mb-4" />

      <Button>Request Statement</Button>
    </div>
  )
}

function ChequeBalanceForm() {
  return (
    <div className="max-w-md">
      <h1 className="text-xl font-semibold mb-4">Cheque Balance</h1>

      <Input placeholder="Cheque Number" className="mb-3" />
      <Input placeholder="Account Number" className="mb-4" />

      <Button>Check Balance</Button>
    </div>
  )
}

function SettingsContent() {
  return (
    <>
      <h1 className="text-xl font-semibold">Settings</h1>
      <p className="mt-2 text-muted-foreground">
        Settings options will appear here.
      </p>
    </>
  )
}