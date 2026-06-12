import { Nav } from '../../shared/Nav.jsx';
import { Hero } from './Hero.jsx';
import { RhizomaticEngineering } from './RhizomaticEngineering.jsx';
import { SystemMap } from './SystemMap.jsx';
import { EventStream } from './EventStream.jsx';
import { ArticleFeed } from './ArticleFeed.jsx';
import { FounderNote } from './FounderNote.jsx';
import { Contact } from './Contact.jsx';
import { Footer } from './Footer.jsx';

export function App() {
  return (
    <div>
      <Nav active="home" />
      <Hero />
      <RhizomaticEngineering />
      <SystemMap />
      <EventStream />
      <ArticleFeed />
      <FounderNote />
      <Contact />
      <Footer />
    </div>
  );
}
