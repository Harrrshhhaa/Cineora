import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import { Film, Tv } from 'lucide-react';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </AnimatePresence>
        
        <footer className="bg-black/90 border-t border-gray-800 py-8 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Film className="w-8 h-8 text-red-600" />
              <h2 className="text-2xl font-bold tracking-wider">CINEORA</h2>
              <Tv className="w-8 h-8 text-red-600" />
            </div>
            <p className="text-center text-gray-400">
              © 2024 CINEORA. The Aura of Cinema
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;