import { FC } from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './styles/App.css';

const App: FC = () => {
  return (
    <div className="app">
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
