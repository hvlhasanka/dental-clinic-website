import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Specialists from "./components/Specialists";
import Booking from "./components/Booking";
import Testimonials from "./components/Testimonials";

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
        <Testimonials />
      </main>
    </>
  );
}

export default App;
