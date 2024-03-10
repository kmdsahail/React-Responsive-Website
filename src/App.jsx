import { Analytics } from "./components/Analytics";
import { Footer } from "./components/Footer";

import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Newsletter } from "./components/Newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
