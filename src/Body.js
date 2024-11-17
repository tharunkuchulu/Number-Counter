import React, { useState } from 'react';

const Body = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #1e3c72, #2a5298)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
    },
    box: {
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      borderRadius: '10px',
      padding: '10px 20px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    },
    button: {
      background: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      padding: '10px 20px',
      margin: '0 10px',
      fontSize: '18px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    buttonHover: {
      background: '#0056b3',
    },
    buttonDisabled: {
      background: '#cccccc',
      cursor: 'not-allowed',
    },
    display: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#333',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Number Counter</h1>
      <div style={styles.box}>
        <button
          style={{ ...styles.button, ...(count === 0 ? styles.buttonDisabled : {}) }}
          onClick={handleDecrement}
          disabled={count === 0}
        >
          -
        </button>
        <div style={styles.display}>{count}</div>
        <button
          style={styles.button}
          onMouseOver={(e) => (e.target.style.background = styles.buttonHover.background)}
          onMouseOut={(e) => (e.target.style.background = styles.button.background)}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Body;
