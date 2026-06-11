import CTA from "./components/CTA";
import Header from "./components/Header";
import Hero from "./components/Hero"
import Services from "./components/Services"
import Study from "./components/Study"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <CTA/>
      <Study/>
      <Footer/>
    </>
  );
}
