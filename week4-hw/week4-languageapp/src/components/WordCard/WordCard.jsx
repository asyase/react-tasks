import React, { useState } from "react"; 

import "./WordCard.css";

const WordCard = ({ word, translation }) => {
    const [showTranslation, setShowTranslation] = useState(false);
    return (
        <div className="word-card">
                  <h3>{word}</h3>

{!showTranslation && (
    <button onClick={() => setShowTranslation(true)}>
      show translation
    </button>
  )}
  {showTranslation && <p>{translation}</p>}
  </div>
  );
};

export default WordCard;
