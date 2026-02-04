import React, { useEffect } from 'react';
import './App.css';
import './animations.css';
import './theme.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Garantir que sempre comece no topo ao carregar/recarregar
    window.history.scrollRestoration = 'manual';
    
    // Remover qualquer hash da URL
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Forçar scroll para o topo imediatamente e depois de um pequeno delay
    window.scrollTo(0, 0);
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, []);

  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
