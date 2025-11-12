import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import AboutPage from "@/react-app/pages/About";
import CollectionsPage from "@/react-app/pages/Collections";
import Galeria from './pages/Galeria'; // ou o caminho correto


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/colecoes" element={<CollectionsPage />} />
        <Route path="/galeria" element={<Galeria />} />
      </Routes>
    </Router>
  );
}
