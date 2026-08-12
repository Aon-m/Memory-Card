import "./Scoreboard.scss";
import { forwardRef, useImperativeHandle, useState } from "react";

const Scoreboard = forwardRef(function Scoreboard(props, ref) {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useImperativeHandle(
    ref,
    () => ({
      increment() {
        setScore((prev) => prev + 1);
      },

      reset() {
        setBestScore((prev) => Math.max(prev, score));
        setScore(0);
      },

      clear() {
        setScore(0);
        setBestScore(0);
      },

      set(no) {
        setScore(no);
        setBestScore(no);
      },
    }),
    [score],
  );

  const textStyles = "text text-5 text-300 text-white";
  const divStyles = "flex flex-row gap-2";

  return (
    <div className="scoreboard flex flex-column">
      <div className={divStyles}>
        <h2 className={textStyles}>Current Score: </h2>
        <p className={textStyles}>{score}</p>
      </div>
      <div className={divStyles}>
        <h2 className={textStyles}>Best Score: </h2>
        <p className={textStyles}>{bestScore}</p>
      </div>
    </div>
  );
});

export default Scoreboard;
