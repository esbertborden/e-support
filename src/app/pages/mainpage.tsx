// "use client"

// import * as React from "react"
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
//   SidebarProvider,
//   SidebarInset,
// } from "@*/components/ui/sidebar"

// import { Button } from "@*/components/ui/button"
// import { Input } from "@*/components/ui/input"
// import {
//   Home,
//   FileText,
//   CreditCard,
//   Settings,
// } from "lucide-react"

// type Tab = "home" | "bank" | "cheque" | "settings"

// export default function DashboardPage() {
//   const [activeTab, setActiveTab] = React.useState<Tab>("home")

//   return (
//     <SidebarProvider>
//       <Sidebar>
//         <SidebarContent>
//           <SidebarGroup>
//             <SidebarGroupLabel>Menu</SidebarGroupLabel>

//             <SidebarMenu>
//               <SidebarMenuItem>
//                 <SidebarMenuButton
//                   isActive={activeTab === "home"}
//                   onClick={() => setActiveTab("home")}
//                 >
//                   <Home />
//                   <span>Home</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               <SidebarMenuItem>
//                 <SidebarMenuButton
//                   isActive={activeTab === "bank"}
//                   onClick={() => setActiveTab("bank")}
//                 >
//                   <FileText />
//                   <span>Bank Statement</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>

//               <SidebarMenuItem>
//                 <SidebarMenuButton
//                   isActive={activeTab === "cheque"}
//                   onClick={() => setActiveTab("cheque")}
//                 >
//                   <CreditCard />
//                   <span>Cheque Balance</span>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//               <SidebarMenuItem>
//                 <SidebarMenuButton
//                   isActive={activeTab === "settings"}
//                   onClick={() => setActiveTab("settings")}
//                 >
//                   <Settings />
//                   <span>Settings</span>
//                </SidebarMenuButton>
//               </SidebarMenuItem>
//               </SidebarMenu>
//               </SidebarGroup>
//               </SidebarContent>

//         <SidebarFooter />
//       </Sidebar>

//       <SidebarInset>
//         <div className="p-6">
//           {activeTab === "home" && <HomeContent />}
//           {activeTab === "bank" && <BankStatementForm />}
//           {activeTab === "cheque" && <ChequeBalanceForm />}
//           {activeTab === "settings" && <SettingsContent />}
//         </div>
//       </SidebarInset>
//     </SidebarProvider>
//   )
// }

// /* ---------- CONTENT SECTIONS ---------- */

// function HomeContent() {
//   return (
//     <>
//       <h1 className="text-2xl font-bold">Welcome 👋</h1>
//       <p className="mt-2 text-muted-foreground">
//         Use the sidebar to navigate through your banking options.
//       </p>
//     </>
//   )
// }

// function BankStatementForm() {
//   return (
//     <div className="max-w-md">
//       <h1 className="text-xl font-semibold text-white-200 mb-8">Bank Statement</h1>

//       <Input placeholder="Account Number" className="mb-3" />
//       <Input type="date" className="mb-3" />
//       <Input type="date" className="mb-4" />

//       <Button>Request Statement</Button>
//     </div>
//   )
// }

// function ChequeBalanceForm() {
//   return (
//     <div className="max-w-md">
//       <h1 className="text-xl font-semibold mb-4">Cheque Balance</h1>

//       <Input placeholder="Cheque Number" className="mb-3" />
//       <Input placeholder="Account Number" className="mb-4" />

//       <Button>Check Balance</Button>
//     </div>
//   )
// }

// function SettingsContent() {
//   return (
//     <>
//       <h1 className="text-xl font-semibold">Settings</h1>
//       <p className="mt-2 text-muted-foreground">
//         Settings options will appear here.
//       </p>
//     </>
//   )
// }


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
  Download,
  Calendar,
  Mail,
  FileSpreadsheet,
  ListChecks,
  ChevronDown,
  ChevronRight,
  Package,
  ShoppingCart,
  Tag,
  DollarSign,
} from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@app/components/ui/select"
import { useNotification } from "@refinedev/core"
import { useForm } from "@refinedev/react-hook-form"
import { cn } from "@*/lib/utils"

type Tab = "home" | "bank" | "products" | "catalogue" | "checkout-links" | "discounts" | "usage-billing" | "cheque" | "settings" | "requests"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = React.useState<Tab>("home")
  const [bankMenuOpen, setBankMenuOpen] = React.useState(false)
  const { open } = useNotification()

  // Handle bank statement request
  const handleBankStatementRequest = async (data: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      open?.({
        type: "success",
        message: "Bank Statement Requested",
        description: "Your bank statement will be generated and sent to your email.",
      })
      
      return data
    } catch (error) {
      open?.({
        type: "error",
        message: "Request Failed",
        description: "Failed to request bank statement. Please try again.",
      })
      throw error
    }
  }

  // Handle cheque balance request
  const handleChequeBalanceRequest = async (data: any) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      open?.({
        type: "success",
        message: "Cheque Balance Retrieved",
        description: `Balance for cheque ${data.chequeNumber}: $${Math.random() * 10000}`,
      })
      
      return data
    } catch (error) {
      open?.({
        type: "error",
        message: "Request Failed",
        description: "Failed to retrieve cheque balance. Please try again.",
      })
      throw error
    }
  }

  const handleBankMenuClick = () => {
    setBankMenuOpen(!bankMenuOpen)
    // Set default tab when opening bank menu
    if (!bankMenuOpen) {
      setActiveTab("products")
    }
  }

  const handleBankSubMenuClick = (tab: Tab) => {
    setActiveTab(tab)
  }

  // Define bank menu items matching the screenshot
  const bankMenuItems = [
    { id: "products", label: "Products", icon: <Package className="h-4 w-4" /> },
    { id: "catalogue", label: "Catalogue", icon: <FileSpreadsheet className="h-4 w-4" /> },
    { id: "checkout-links", label: "Checkout Links", icon: <ShoppingCart className="h-4 w-4" /> },
    { id: "discounts", label: "Discounts", icon: <Tag className="h-4 w-4" /> },
    { id: "usage-billing", label: "Usage Billing", icon: <DollarSign className="h-4 w-4" /> },
  ]

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

              {/* Bank Statement with Dropdown */}
              <SidebarMenuItem>
                <div>
                  <SidebarMenuButton
                    isActive={activeTab.startsWith("bank") || bankMenuItems.some(item => item.id === activeTab)}
                    onClick={handleBankMenuClick}
                    className="justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <FileText />
                      <span>Bank Statement</span>
                    </div>
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform",
                      bankMenuOpen && "rotate-180"
                    )} />
                  </SidebarMenuButton>
                  
                  {/* Dropdown Submenu */}
                  {bankMenuOpen && (
                    <div className="ml-2 mt-1 space-y-1 border-l pl-2">
                      {bankMenuItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => handleBankSubMenuClick(item.id as Tab)}
                          className={cn(
                            "flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md transition-colors",
                            activeTab === item.id
                              ? "bg-blue-50 text-blue-700 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
                  isActive={activeTab === "requests"}
                  onClick={() => setActiveTab("requests")}
                >
                  <ListChecks />
                  <span>All Requests</span>
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
          {activeTab === "products" && <ProductsContent onSubmit={handleBankStatementRequest} />}
          {activeTab === "catalogue" && <CatalogueContent onSubmit={handleBankStatementRequest} />}
          {activeTab === "checkout-links" && <CheckoutLinksContent onSubmit={handleBankStatementRequest} />}
          {activeTab === "discounts" && <DiscountsContent onSubmit={handleBankStatementRequest} />}
          {activeTab === "usage-billing" && <UsageBillingContent onSubmit={handleBankStatementRequest} />}
          {activeTab === "cheque" && <ChequeBalanceForm onSubmit={handleChequeBalanceRequest} />}
          {activeTab === "requests" && <AllRequestsContent />}
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

// Bank Statement Submenu Content Components
interface BankContentProps {
  onSubmit: (data: any) => Promise<any>
}

function ProductsContent({ onSubmit }: BankContentProps) {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    refineCoreProps: {
      action: "create",
      resource: "bank-statements",
      redirect: false,
    },
  })

  const onFormSubmit = async (data: any) => {
    try {
      await onSubmit(data)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Package className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold">Products</h1>
            <p className="text-sm text-gray-500 mt-1">Manage your banking products and statements</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Statement Request Form */}
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Request Statement</h2>
          <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Account</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select account" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="savings">Savings Account</SelectItem>
                  <SelectItem value="checking">Checking Account</SelectItem>
                  <SelectItem value="business">Business Account</SelectItem>
                  <SelectItem value="joint">Joint Account</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Period</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="last-quarter">Last Quarter</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                  <SelectItem value="custom">Custom Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Format</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Document</SelectItem>
                  <SelectItem value="excel">Excel File</SelectItem>
                  <SelectItem value="csv">CSV File</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Processing..." : "Request Statement"}
            </Button>
          </form>
        </div>

        {/* Products Overview */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Your Products</h2>
            <div className="space-y-3">
              {['Savings Account', 'Checking Account', 'Business Account'].map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <Package className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-medium">{product}</div>
                      <div className="text-sm text-gray-500">Active • Last updated: Today</div>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="outline" className="h-auto py-3">
                <Download className="h-4 w-4 mr-2" />
                Download All
              </Button>
              <Button variant="outline" className="h-auto py-3">
                <FileText className="h-4 w-4 mr-2" />
                View History
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CatalogueContent({ onSubmit }: BankContentProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <FileSpreadsheet className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold">Catalogue</h1>
            <p className="text-sm text-gray-500 mt-1">View and manage statement templates</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Statement Templates</h2>
          <p className="text-sm text-gray-500">Pre-configured statement formats</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { name: 'Standard Summary', desc: 'Monthly account summary', format: 'PDF' },
            { name: 'Detailed Transaction', desc: 'Complete transaction list', format: 'Excel' },
            { name: 'Tax Ready', desc: 'Formatted for tax purposes', format: 'PDF' },
          ].map((template, index) => (
            <div key={index} className="border rounded-lg p-4 hover:border-blue-300 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-medium">{template.name}</div>
                  <div className="text-sm text-gray-500">{template.desc}</div>
                </div>
                <span className="text-xs px-2 py-1 bg-gray-100 rounded">{template.format}</span>
              </div>
              <Button size="sm" className="w-full">Use Template</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckoutLinksContent({ onSubmit }: BankContentProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <ShoppingCart className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold">Checkout Links</h1>
            <p className="text-sm text-gray-500 mt-1">Generate links for statement purchases</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Generate Payment Link</h2>
          <p className="text-sm text-gray-500">Create links for customers to purchase statements</p>
        </div>

        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <label className="text-sm font-medium">Statement Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select statement type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">Standard Statement</SelectItem>
                <SelectItem value="detailed">Detailed Statement</SelectItem>
                <SelectItem value="certified">Certified Statement</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Validity Period</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select validity" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="24h">24 Hours</SelectItem>
                <SelectItem value="7d">7 Days</SelectItem>
                <SelectItem value="30d">30 Days</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Price (USD)</label>
            <Input type="number" placeholder="0.00" />
          </div>

          <Button className="w-full">Generate Link</Button>
        </div>
      </div>
    </div>
  )
}

function DiscountsContent({ onSubmit }: BankContentProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Tag className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold">Discounts</h1>
            <p className="text-sm text-gray-500 mt-1">Manage statement discounts and promotions</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border p-6">
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Active Discounts</h2>
          <p className="text-sm text-gray-500">Currently available promotions</p>
        </div>

        <div className="space-y-4">
          {[
            { code: 'STMT25', desc: '25% off all statements', valid: 'Until Jan 31, 2024' },
            { code: 'BULK50', desc: '50% off bulk orders', valid: 'Valid for 30 days' },
            { code: 'FIRSTFREE', desc: 'First statement free', valid: 'For new customers' },
          ].map((discount, index) => (
            <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono font-medium bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    {discount.code}
                  </span>
                  <div className="font-medium">{discount.desc}</div>
                </div>
                <div className="text-sm text-gray-500 mt-1">{discount.valid}</div>
              </div>
              <Button size="sm" variant="outline">Apply</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function UsageBillingContent({ onSubmit }: BankContentProps) {
  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <DollarSign className="h-6 w-6 text-gray-600" />
          <div>
            <h1 className="text-2xl font-bold">Usage Billing</h1>
            <p className="text-sm text-gray-500 mt-1">Track and manage statement usage costs</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Current Usage</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Statements Generated</span>
                <span className="font-medium">42</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600" style={{ width: '70%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-1">70% of monthly limit</div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Total Cost</span>
                <span className="font-medium">$126.00</span>
              </div>
              <div className="text-xs text-gray-500">This billing cycle</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border p-6">
          <h2 className="text-lg font-semibold mb-4">Billing Settings</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Auto-renew</div>
                <div className="text-sm text-gray-500">Renew subscription automatically</div>
              </div>
              <div className="h-6 w-11 bg-blue-600 rounded-full relative">
                <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 right-0.5"></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Email Notifications</div>
                <div className="text-sm text-gray-500">Receive billing alerts</div>
              </div>
              <div className="h-6 w-11 bg-gray-300 rounded-full relative">
                <div className="h-5 w-5 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ChequeBalanceFormProps {
  onSubmit: (data: any) => Promise<any>
}

function ChequeBalanceForm({ onSubmit }: ChequeBalanceFormProps) {
  const { register, handleSubmit, formState: { isSubmitting } } = useForm({
    refineCoreProps: {
      action: "create",
      resource: "cheque-balances",
      redirect: false,
    },
  })

  const onFormSubmit = async (data: any) => {
    try {
      await onSubmit(data)
    } catch (error) {
      console.error("Form submission error:", error)
    }
  }

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-bold mb-8">Cheque Balance</h1>
      
      <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Cheque Number</label>
          <Input 
            placeholder="Enter cheque number" 
            {...register("chequeNumber", { required: true })}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Account Number</label>
          <Input 
            placeholder="Enter account number" 
            {...register("accountNumber", { required: true })}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Checking..." : "Check Balance"}
        </Button>
      </form>
    </div>
  )
}

function AllRequestsContent() {
  // Sample request data
  const requests = [
    { id: 1, type: "Bank Statement", status: "Completed", date: "2024-01-28", account: "Savings", format: "PDF" },
    { id: 2, type: "Cheque Balance", status: "Pending", date: "2024-01-27", account: "Checking", cheque: "12345" },
    { id: 3, type: "Bank Statement", status: "Processing", date: "2024-01-26", account: "Business", format: "Excel" },
    { id: 4, type: "Bank Statement", status: "Completed", date: "2024-01-25", account: "Savings", format: "PDF" },
    { id: 5, type: "Cheque Balance", status: "Completed", date: "2024-01-24", account: "Checking", cheque: "12346" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-green-100 text-green-800"
      case "Processing": return "bg-blue-100 text-blue-800"
      case "Pending": return "bg-yellow-100 text-yellow-800"
      default: return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">All Requests</h1>
        <p className="text-sm text-gray-500 mt-1">View and manage all your banking requests</p>
      </div>

      <div className="bg-white rounded-lg border">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="text-left py-3 px-4 font-medium">Request Type</th>
                <th className="text-left py-3 px-4 font-medium">Status</th>
                <th className="text-left py-3 px-4 font-medium">Date</th>
                <th className="text-left py-3 px-4 font-medium">Account</th>
                <th className="text-left py-3 px-4 font-medium">Details</th>
                <th className="text-left py-3 px-4 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id} className="border-b hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {request.type === "Bank Statement" ? (
                        <FileText className="h-4 w-4 text-gray-500" />
                      ) : (
                        <CreditCard className="h-4 w-4 text-gray-500" />
                      )}
                      <span>{request.type}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{request.date}</td>
                  <td className="py-3 px-4">{request.account}</td>
                  <td className="py-3 px-4">
                    {request.type === "Bank Statement" 
                      ? `Format: ${request.format}`
                      : `Cheque: ${request.cheque}`}
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      {request.status === "Completed" && request.type === "Bank Statement" && (
                        <Button size="sm" variant="outline" className="h-8">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      )}
                      <Button size="sm" variant="ghost" className="h-8">
                        View Details
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function SettingsContent() {
  return (
    <>
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="mt-2 text-muted-foreground">
        Configure your banking preferences and notifications.
      </p>
    </>
  )
}