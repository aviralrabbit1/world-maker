import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Navigation from "@/components/site/navigation";

const Layout = ({ children }:{ children: React.ReactNode }) => {
  return (
    <main className="h-full">
      <Navigation />
      { children }

    </main>
  );
}

export default Layout;
