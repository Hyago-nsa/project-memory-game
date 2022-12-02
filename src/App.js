import React, { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState(null);
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
    const shuffled = [...items, ...items].sort(() => Math.random() - .5);
    setCards(shuffled);
  }

  useEffect(() => {
    resetCards();
  }, []);

  return (
    <div className="App">
      <div className="gameboard">
        {Object.entries(cards).map(({ symbol, id }) => (
          <Card key={id} emoji={symbol} />
        ))}
      </div>
    </div>
  );
};

export default App;
