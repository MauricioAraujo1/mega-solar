import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../ui/pages/Home'
import { About } from '../ui/pages/About';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
