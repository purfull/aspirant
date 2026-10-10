import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Clients from './components/Clients/Clients';
import About from './components/About/About';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <About />
      </main>
    </div>
  );
}

export default App;
