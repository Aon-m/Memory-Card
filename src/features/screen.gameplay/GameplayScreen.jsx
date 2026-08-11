import "./GameplayScreen.scss";
import logo from "@/assets/icons/logo.png";

export default function GameplayScreen({
  handleGameExit,
  scoreboard,
  board,
  dialog,
  onHover,
}) {
  return (
    <section
      className="container container--flex flex-column gap-6 container--fullscreen gameplay-screen"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="gameplay-screen__header flex flex-row">
        <img
          className="icon icon--6 gameplay-screen__logo"
          src={logo}
          onPointerEnter={onHover}
          alt="Minecraft logo"
          onClick={handleGameExit}
        />
        {scoreboard}
      </div>
      {board}
      {dialog}
    </section>
  );
}
