import Button from "@/shared/components/Button/Button";
import "./Sounds.scss";
import { useState } from "react";

export default function Sounds({ handleSfx, handleMusic, onHover, onClick }) {
  const [sfxMuted, setSfxMuted] = useState(handleSfx(false));
  const [musicMuted, setMusicMuted] = useState(handleMusic(false));

  function toggleSfx() {
    setSfxMuted((prev) => !prev);
    handleSfx();
  }

  function toggleMusic() {
    setMusicMuted((prev) => !prev);
    handleMusic();
  }

  return (
    <div className="sounds flex flex-row gap-3">
      <Button
        tooltip="Sound Effects"
        onClick={onClick}
        onPointerEnter={onHover}
        styles={{
          button: `button--circle sounds__btn sounds__btn--volume ${
            musicMuted
              ? "sounds__btn--volume--unmute"
              : "sounds__btn--volume--mute"
          }`,
        }}
        onClick={toggleMusic}
      />
      <Button
        content={sfxMuted ? "S" : "NS"}
        tooltip="Music"
        onClick={onClick}
        onPointerEnter={onHover}
        styles={{
          button: "button--black button--circle sounds__btn",
        }}
        onClick={toggleSfx}
      />
    </div>
  );
}
