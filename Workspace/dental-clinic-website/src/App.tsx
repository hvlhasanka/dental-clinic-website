import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Specialists from "./components/Specialists";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyChooseUs />
        <Services />
        <Specialists />
      </main>
    </>
  );
}

export default App;
