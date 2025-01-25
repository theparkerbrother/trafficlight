import React, { useState } from "react";

// Helper function to convert hex color to rgba
const hexToRgba = (hex, alpha = 0.8) => {
  hex = hex.replace(/^#/, "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

const Home = () => {
  const [selectedLight, setSelectedLight] = useState("red");

  // Define colors as a state object
  const [colors, setColors] = useState({
    red: {
      backgroundColor: "#8f0000", // Hex color for red
    },
    yellow: {
      backgroundColor: "#666600", // Hex color for yellow
    },
    green: {
      backgroundColor: "#1D4909", // Hex color for green
    },
  });

  // Function to get the next color in the cycle
  const getNextColor = () => {
    const colorKeys = Object.keys(colors);
    const currentIndex = colorKeys.indexOf(selectedLight);
    const nextIndex = (currentIndex + 1) % colorKeys.length;
    return colorKeys[nextIndex];
  };

  // Function to add a new color dynamically
  const addColor = () => {
    const newColorName = "purple";
    setColors((prevColors) => ({
      ...prevColors,
      [newColorName]: {
        backgroundColor: "#800080", // Hex color for purple
      },
    }));
    setSelectedLight(newColorName); // Automatically select the new color
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div id="trafficTop"></div>
      <div
        id="lightContainer"
        className="d-flex flex-column align-items-center justify-content-around"
      >
        {Object.keys(colors).map((color) => (
          <div
            key={color}
            className={`light ${selectedLight === color ? "selected" : ""}`}
            onClick={() => setSelectedLight(color)}
            style={{
              backgroundColor: colors[color].backgroundColor,
              boxShadow:
                selectedLight === color
                  ? `0 0px 20px ${hexToRgba(
                      colors[color].backgroundColor,
                      0.8
                    )}, 0 0px 40px ${hexToRgba(
                      colors[color].backgroundColor,
                      0.5
                    )}`
                  : "none",
            }}
          ></div>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-dark mt-5 myButton"
        onClick={() => {
          setSelectedLight(getNextColor());
        }}
      >
        Click Through Colors
      </button>

      <button
        type="button"
        className="btn btn-dark mt-5 myButton"
        onClick={addColor}
      >
        Add Purple
      </button>
    </div>
  );
};

export default Home;
