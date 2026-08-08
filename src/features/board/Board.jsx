import "./Board.scss";
import { forwardRef, useImperativeHandle, useState } from "react";
import shuffleArray from "@/shared/utils/shuffleArray";
import Card from "./Card";

const Board = forwardRef(function Board(
  { cardObjs, number, displayable, handleCardFlip, flippedCards },
  ref,
) {
  // State
  const [cards, setCards] = useState(() =>
    cardObjs.map((obj) => ({
      id: obj.id,
      name: obj.name,
      url: obj.url,
      flipped: false,
    })),
  );

  // Derived values
  function changeVisibleCards(id) {
    const card = cards.find((card) => card.id === id);

    if (card.flipped) {
      handleCardFlip(false);
      return;
    }

    const updatedCards = cards.map((card) =>
      card.id === id ? { ...card, flipped: true } : card,
    );

    if (updatedCards.every((card) => card.flipped)) {
      handleCardFlip("won");
      return;
    }

    setCards(updatedCards);
    handleCardFlip(true);
  }

  // Methods
  useImperativeHandle(ref, () => ({
    resetCards() {
      setCards((prev) =>
        prev.map((card) => ({
          ...card,
          flipped: false,
        })),
      );
    },
  }));

  // Render
  const displayableCards = shuffleArray(
    cards,
    displayable,
    (card) => card.flipped === false,
  );

  return (
    <div className="board flex flex-column gap-3  gap">
      <div className="board__cards gap-3">
        {displayableCards.map((obj) => (
          <Card
            key={obj.id}
            id={obj.id}
            title={obj.name}
            imgUrl={obj.url}
            onClick={() => changeVisibleCards(obj.id)}
          />
        ))}
      </div>
      <p className="text text-center text-white text-200 text-6">
        {flippedCards} / {number}
      </p>
    </div>
  );
});

export default Board;
