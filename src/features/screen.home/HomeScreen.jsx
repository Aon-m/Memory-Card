import logo from "@/assets/icons/logo.png";
import Button from "@/shared/components/Button/Button.jsx";

export default function HomeScreen({ handleModeSelect }) {
  const btnStyles = "text text-white text-6 text-700";

  return (
    <section
      className="container container--flex flex-column gap-6 container--fullscreen"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <img className="icon icon--10" src={logo} alt="Minecraft logo" />
      <h1 className="text text-10 text--600 text-minecraft text-center text-black">
        Memory Game
      </h1>
      <div className="flex flex-tablet-column gap-3">
        <Button
          content="Passive mobs"
          styles={{ text: btnStyles }}
          onClick={(e) => handleModeSelect("passive", e)}
        />
        <Button
          content="Hostile mobs"
          styles={{ text: btnStyles }}
          onClick={(e) => handleModeSelect("hostile", e)}
        />
        <Button
          content="Iconic mobs"
          styles={{ text: btnStyles }}
          onClick={(e) => handleModeSelect("iconic", e)}
        />
      </div>
    </section>
  );
}
