"use client";

import "./globals.css";
import Hero from "./components/Hero";
import { useEffect } from "react";
import "@mdi/font/css/materialdesignicons.css";

export default function Home() {
  useEffect(() => {
    if (process.env.REACT_DEV_TOOLS === "true") {
      console.log("React DevTools are enabled");
    } else {
      (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = undefined;
    }
  }, []);

  return (
    <div>
      <Hero />
    </div>
  );
}
