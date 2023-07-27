import './App.css';

import React, { useState } from "react";
import heroImage from "./images/hero.jpg";
import communityImage from "./images/community.jpg";

const plasticTypes = [
  { id: 1, name: "Plastic Bottles" },
  { id: 2, name: "Plastic Bags" },
  { id: 3, name: "Plastic Straws" },
  { id: 4, name: "Plastic Packaging" }
];

function App() {
  const [progress, setProgress] = useState(0);
  const [selectedPlastics, setSelectedPlastics] = useState([]);
  const [isLogButtonClickable, setLogButtonClickable] = useState(true);

  const handlePlasticSelect = (plasticId) => {
    if (!selectedPlastics.includes(plasticId) && progress < 100) {
      setSelectedPlastics((prevSelected) => [...prevSelected, plasticId]);
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }
  };

  const handleLogPlasticUsage = () => {
    if (progress < 100) {
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    } else {
      setLogButtonClickable(false);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Plastic-Free Lifestyle Tracker</h1>
      </header>
      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to the Plastic-Free Lifestyle Tracker</h2>
            <p>
              Start tracking your plastic usage and contribute to a greener
              planet!
            </p>
            <button>Get Started</button>
          </div>
          <img src={heroImage} alt="Plastic-Free Lifestyle" />
        </section>
        <section className="tracker">
          <h3>Your Plastic-Free Progress</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}>
              {progress > 0 && <span>{progress}%</span>}
            </div>
          </div>
          <button
            onClick={handleLogPlasticUsage}
            disabled={!isLogButtonClickable}
          >
            {progress < 100
              ? "Log Plastic Usage"
              : "Congratulations! You are 100% Plastic-Free"}
          </button>
        </section>
        <section className="plastic-options">
          <h3>Select Plastic Types You Are Reducing</h3>
          <div className="plastic-options-container">
            {plasticTypes.map((plastic) => (
              <div
                key={plastic.id}
                className={`plastic-option ${
                  selectedPlastics.includes(plastic.id) ? "selected" : ""
                }`}
                onClick={() => handlePlasticSelect(plastic.id)}
              >
                {plastic.name}
                <div className="counter">
                  {selectedPlastics.filter((id) => id === plastic.id).length}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="tips">{/* Tips section content */}</section>
        <section className="community">
          <div className="community-content">
            <h3>Join the Plastic-Free Community</h3>
            <p>
              Connect with like-minded people, share tips, and support each
              other!
            </p>
            <button>Join Now</button>
          </div>
          <img src={communityImage} alt="Plastic-Free Community" />
        </section>
      </main>
      <footer>
        <p>
          &copy; {new Date().getFullYear()} Plastic-Free Lifestyle Tracker. All
          rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
