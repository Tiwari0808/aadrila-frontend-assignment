import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import IntroLogo from "./components/IntroLogo";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LayoutGroup>
      {!loading && <Home />}
      
      {loading && <IntroLogo onComplete={() => setLoading(false)} />}
    </LayoutGroup>
  );
}
