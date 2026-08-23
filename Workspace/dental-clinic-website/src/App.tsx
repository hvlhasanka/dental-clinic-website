import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Specialists from "./components/Specialists";
import Booking from "./components/Booking";

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
        <Booking />
      </main>
    </>
  );
}

export default App;
