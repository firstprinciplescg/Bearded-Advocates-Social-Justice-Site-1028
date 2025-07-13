import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import EmailSignup from './components/EmailSignup';
import Representatives from './components/Representatives';
import TalkingPoints from './components/TalkingPoints';
import Resources from './components/Resources';
import Footer from './components/Footer';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <Mission />
      <EmailSignup />
      <Representatives />
      <TalkingPoints />
      <Resources />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;