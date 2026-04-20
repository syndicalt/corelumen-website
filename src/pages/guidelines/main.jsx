import { createRoot } from 'react-dom/client';

function Placeholder() {
  return (
    <div style={{ padding: 48, fontFamily: 'system-ui, sans-serif' }}>
      <h1>CoreLumen — Guidelines (scaffold)</h1>
      <p>Port in progress.</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Placeholder />);
