import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Works from './components/Works/Works';
import Industries from './components/Industries/Industries';
import Process from './components/Process/Process';
import Clients from './components/Clients/Clients';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import FAQ from './components/FAQ/FAQ';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Works />
        <Industries />
        <Process />
        <Clients />
        <About />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
    </div>
  );
}

export default App;
