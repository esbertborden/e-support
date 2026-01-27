"use client";

import { Suspense } from "react";

import { Authenticated } from "@refinedev/core";
import MainPage from "./pages/mainpage";


export default function IndexPage() {
  return (
    <Suspense>
      <Authenticated key="home-page">
        <MainPage/>
      </Authenticated>
    </Suspense>
  );
}
