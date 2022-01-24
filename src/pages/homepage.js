import React from "react";
import { exhibitions } from "../exhibition_data";
import { Link } from "react-router-dom";
import { FaAngleDoubleDown } from "react-icons/fa";

export default function Homepage({ setApp }) {
  return (
    <section id="exhibits pic" className="exhibits-section">
      <div className="exhibits-section-container">
        {/* Introduction heading and paragraph */}
        <div className="exhibits-section-introduction">
          <h1 className="exhibits-section-header">
            Virtual <br /> Museum Prototype
          </h1>

          <a
            href="#exhibition-grid"
            className="exhibit-introduction-button"
            alt="down"
          >
            <FaAngleDoubleDown />
          </a>
          <p className="exhibits-section-paragraph">
            Click on any of the exhibits below to explore them in a virtual
            scene. <br />
            Once inside, interact with the artefacts to learn more and see them
            up close.
          </p>
        </div>
        {/* List of exhibits stored in an array */}
        <div id="exhibition-grid" className="exhibition-grid">
          {exhibitions.map((exhibition) => (
            <div className="exhibition-grid-item-container">
              <Link to={exhibition.link}></Link>
              <a
                href={exhibition.link}
                key={exhibition.image}
                onClick={() => setApp(true)}
              >
                <div className="exhibition-grid-item">
                  <img
                    src={exhibition.image}
                    alt="exhibit"
                    className="exhibition-grid-item-image"
                  />
                  <div className="exhibition-grid-item-overlay">
                    <h2 className="text">{exhibition.title}</h2>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
