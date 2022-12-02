import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [firstSelection, setFirstSelection] = useState(null);
  const [secondSelection, setSecondSelection] = useState(null);
  const items = [
    { symbol: "😍", id: 1 },
    { symbol: "🙌", id: 2 },
    { symbol: "😶‍🌫️", id: 3 },
    { symbol: "❤️", id: 4 },
    { symbol: "🥶", id: 5 },
    { symbol: "😶", id: 6 },
    { symbol: "🤡", id: 7 },
    { symbol: "👻", id: 8 },
  ];

  function resetCards() {
    const shuffled = [...items, ...items]
      .sort(() => Math.random() - 0.5)
      .map((idCard) => ({ ...idCard, key: Math.random() }));
    setCards(shuffled);
  }

  function evaluateSelection() {
    console.log(`First: ${firstSelection}`);
    console.log(`Second: ${secondSelection}`);
  }

  function handleCardClick(e) {
    firstSelection
      ? setSecondSelection(e.target.dataset.id)
      : setFirstSelection(e.target.dataset.id);
  }

  useEffect(() => {
    if(!secondSelection){return}
    if(firstSelection === secondSelection){
      setCards()
    }
  }, [firstSelection,secondSelection]);

  useEffect(() => {
    resetCards();
  }, []);

  return (
    <div className="App">
      <div className="gameboard">
        {cards &&
          Object.values(cards).map(({ symbol, key, id }) => (
            <Card
              key={key}
              id={id}
              emoji={symbol}
              disabled={disabled}
              handleCardClick={handleCardClick}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
