import React, { useState, useEffect } from 'react';

// Helper function to generate random colors
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const App = () => {
  // State to store the colors of the boxes
  const [boxColors, setBoxColors] = useState([]);

  // Initialize random colors on load
  useEffect(() => {
    const initialColors = [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()];
    setBoxColors(initialColors);
  }, []);

  // Handle color change when a box is clicked
  const handleBoxClick = (index) => {
    let newColor;
    do {
      newColor = getRandomColor();
    } while (newColor === boxColors[index]); // Ensure the new color is different from the previous one

    // Update the color of the clicked box
    const updatedColors = [...boxColors];
    updatedColors[index] = newColor;
    setBoxColors(updatedColors);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        {boxColors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleBoxClick(index)}
            style={{
              width: '100px',
              height: '100px',
              margin: '10px',
              backgroundColor: color,
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
