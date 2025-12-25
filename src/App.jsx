import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import IntroLogo from "./components/IntroLogo";
import Home from "./pages/Home";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <LayoutGroup>
      {/* Home is always rendered, but hidden behind the loader initially */}
      {!loading && <Home />}

      {/* IntroLogo sits on top and disappears when loading is false */}
      {loading && <IntroLogo onComplete={() => setLoading(false)} />}
    </LayoutGroup>
  );
}




