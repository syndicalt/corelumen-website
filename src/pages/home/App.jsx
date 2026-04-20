import { Nav } from '../../shared/Nav.jsx';
import { Hero } from './Hero.jsx';
import { Products } from './Products.jsx';
import { Principles } from './Principles.jsx';
import { Writing } from './Writing.jsx';
import { Footer } from './Footer.jsx';

export function App() {
  return (
    <div>
      <Nav active="home" />
      <Hero />
      <Products />
      <Principles />
      <Footer />
    </div>
  );
}
