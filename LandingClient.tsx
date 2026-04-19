// LandingClient.tsx
import React from 'react';
import './LandingClient.css';

const LandingClient = () => {
    return (
        <div className="landing-client">
            <header className="header">
                <h1>Welcome to Our Service</h1>
                <p>Your gateway to next-generation solutions.</p>
            </header>
            <section className="who-this-is-for">
                <h2>Who This Is For</h2>
                <p>This service is ideal for individuals and businesses looking for innovative solutions to streamline their operations.</p>
            </section>
            <section className="who-this-is-not-for">
                <h2>Who This Is Not For</h2>
                <p>We do not cater to those seeking temporary fixes or who are not ready to embrace change.</p>
            </section>
            <section className="decision-certainty">
                <h2>Decision Certainty</h2>
                <p>We provide clear, data-driven insights to help you make informed decisions confidently.</p>
            </section>
            <section className="what-you-get">
                <h2>What You Get</h2>
                <ul>
                    <li>Access to premium resources</li>
                    <li>Dedicated support team</li>
                    <li>Regular updates and insights</li>
                    <li>Community access</li>
                </ul>
            </section>
            <section className="pricing">
                <h2>Realistic Pricing</h2>
                <p>Our pricing model is designed to be transparent and affordable. Plans start at $19/month.</p>
            </section>
        </div>
    );
};

export default LandingClient;
