import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0); // État pour le compteur
  const [warning, setWarning] = useState(""); // État pour le message d'avertissement

  const increment = () => {
      setCount(count + 1);
      setWarning(""); // Supprimer le message d'avertissement
  };

  const decrement = () => {
      if (count > 0) {
          setCount(count - 1);
          setWarning(""); // Supprimer le message si l'utilisateur décrémente correctement
      } else {
          setWarning("Le compteur ne peut pas être inférieur à 0."); // Afficher le message
      }
  };

  return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
          <h1>Compteur : {count}</h1>
          <div>
              <button onClick={increment} style={buttonStyle}>
                  + 
              </button>
              <button onClick={decrement} style={buttonStyle}>
                  - 
              </button>
          </div>
          {warning && <p style={warningStyle}>{warning}</p>}
      </div>
  );
}

// Styles pour les boutons et le message
const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
};

const warningStyle = {
  color: "red",
  fontWeight: "bold",
};

export default App
