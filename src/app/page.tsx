"use client";

import "./globals.css";
import Hero from "./components/Hero";
import { useEffect } from "react";
import "@mdi/font/css/materialdesignicons.css";

export default function Home() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" &&
      process.env.NEXT_PUBLIC_REACT_DEV_TOOLS === "true"
    ) {
      console.log("React DevTools are enabled");
    }
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}
