"use client";

// import { SidebarProvider } from "@*/components/ui/sidebar";
// import MainPage from "./pages/mainpage";
// import LoginPage from "./pages/login";
import { SignUpForm } from "./components/refine-ui/form/sign-up-form";

export default function Page() {
  return (
   
      <div className="flex h-screen w-full">
      <SignUpForm/>
      </div>
   
  );
}