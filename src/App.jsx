import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import CuriosityShowcase from "./components/CuriosityShowcase";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-black dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturesGrid />
        <CuriosityShowcase />
      </main>
    </div>
  );
}

export default App;
