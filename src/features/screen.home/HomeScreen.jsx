import logo from "@/assets/icons/logo.png";
import Button from "@/shared/components/Button/Button.jsx";

export default function HomeScreen({ handleDifficultySelect }) {
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
          content="Easy"
          styles={{ text: btnStyles }}
          onClick={(e) => handleDifficultySelect("easy", e)}
        />
        <Button
          content="Medium"
          styles={{ text: btnStyles }}
          onClick={(e) => handleDifficultySelect("medium", e)}
        />
        <Button
          content="Hard"
          styles={{ text: btnStyles }}
          onClick={(e) => handleDifficultySelect("hard", e)}
        />
      </div>
    </section>
  );
}
