import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import IntroLogo from "./components/IntroLogo";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LayoutGroup>
      <AnimatePresence mode="wait">
        {loading ? (
          <IntroLogo key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <Home key="home" />
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
