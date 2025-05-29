'use client';

import './styles/main.css'; 
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import components needed for this page (assuming they are in the sibling components directory and are .jsx)
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Trust from './components/Trust.jsx';
import CallToAction from './components/CallToAction.jsx';
import Footer from './components/Footer.jsx';
import Testimonials from './components/Testimonials.jsx';

function App() {
    try {
        return (
            <div data-name="app">
                <Navbar />
                <Hero />
                <Features />
                <HowItWorks />
                <Trust />
                <CallToAction />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        return <div>Seite wird geladen, bitte versuchen Sie es später erneut.</div>;
    }
}

export default App;
