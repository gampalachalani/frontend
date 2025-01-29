import React from 'react';
import './Home.css'

const Home : React.FC = () => {
  return (
    <>
      <main className="home-page">
        <section className="main">
          <h1>Welcome to SeedLink</h1>
          <div className="buttons">
               <a href="/entrepreneurform">
               <button className="btn btn_1">Join as an Entrepreneur</button>
               </a>
               <a href="/investorform">
               <button className="btn btn_2">Join as an Investor</button>
               </a>
          </div>
        </section>
        <section className="features">
          <h2>Why Choose SeedLink?</h2>
          <div className="features">
            <div className="feature">
              <h3>For Entrepreneurs</h3>
              <p>Find investors to fund your dream projects and grow your business.</p>
            </div>
            <div className="feature">
              <h3>For Investors</h3>
              <p>Discover promising business opportunities to grow your portfolio.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;

