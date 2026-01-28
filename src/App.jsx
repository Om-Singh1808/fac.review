import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import ProfessorProfilePage from './pages/ProfessorProfilePage';
import SearchResultsPage from './pages/SearchResultsPage';

import RateProfessorPage from './pages/RateProfessorPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/professor/:id" element={<ProfessorProfilePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/rate/:id" element={<RateProfessorPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
