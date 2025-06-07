'use client';

import './styles/main.css'; 
// Ensure React and ReactDOM are installed via npm/yarn
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
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import { useClerk } from '@clerk/clerk-react';
// import Pricing from './components/Pricing.jsx';
// Import CSS (recommended way, ensure path is correct)
// For example, if styles/main.css is in the project root: import '../../styles/main.css';

// Please adjust or add CSS imports as needed

// Assuming reportError is a global function or imported from somewhere
// declare function reportError(error: any): void; // If global
// import { reportError } from '../../utils/errorReporting'; // If imported from a module

function App() {
    try {
        return (
            <div data-name="app">
                <Navbar />
                <Hero />
                <Features />
                <HowItWorks />
                <Trust />
                {/* <Pricing /> */}
                <Testimonials /> 
                <CallToAction />
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        // Ensure reportError function is available
        // reportError(error);
        return <div>Page loading error, please try again later.</div>; // Provide user-friendly error message
    }
}

export default App;
