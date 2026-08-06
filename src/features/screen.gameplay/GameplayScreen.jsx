import logo from "@/assets/icons/logo.png";

export default function GameplayScreen({ exitGameHandler, scoreboard, cards }) {
  return (
    <section
      className="container container--flex flex-column gap-6 container--fullscreen"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div
        className="flex flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <img
          className="icon icon--6"
          src={logo}
          alt="Minecraft logo"
          onClick={exitGameHandler}
        />
        {scoreboard}
      </div>
      {cards}
    </section>
  );
}
