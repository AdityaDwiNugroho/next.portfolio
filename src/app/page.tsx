import "./globals.css";
import Hero from "./components/Hero";

if (process.env.REACT_DEV_TOOLS === "true") {
  console.log("React DevTools are enabled");
} else {
  (window as any).__REACT_DEVTOOLS_GLOBAL_HOOK__ = undefined;
}

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
