import { useState } from "react";
import tecnologes from "./data/tecnologes.json";

import tecnologyCard from "./component/tecnologyCard"
import yourStack from "./component/yourStack"
import foter from "./component/foter";

function App() {
  const [stack, setStack] = useState([]);

  const handleAdd = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      alert(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
  };

  const handleRemove = (id) => {
    setStack(
      stack.filter((item) => item.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <div>

      {/* Navbar */}
      <header className="navbar">
        <h1>TechStack</h1>

        <nav>
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Stack</a>
        </nav>
      </header>


      {/* Hero */}
      <section className="hero">
        <p className="hero-small">
          MODERN DEVELOPMENT
        </p>

        <h1>
          Build Your
          <span> Technology Stack</span>
        </h1>

        <p>
          Explore popular technologies and create
          your own development stack.
        </p>
      </section>


      {/* Main */}
      <main className="main-container">

        {/* Technology Section */}
        <section className="technology-section">

          <div className="section-title">
            <div>
              <p>EXPLORE</p>
              <h2>Technologies</h2>
            </div>

            <span>
              {technologies.length} Technologies
            </span>
          </div>

          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                onAdd={handleAdd}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
              />
            ))}
          </div>

        </section>


        {/* Stack */}
        <YourStack
          stack={stack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />

      </main>


      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;