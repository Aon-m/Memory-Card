import Button from "@/shared/components/Button/Button";
import "./Sounds.scss";
import { useState } from "react";

export default function Sounds({ handleSfx, handleMusic }) {
  const [sfxMuted, setSfxMuted] = useState(false);
  const [musicMuted, setMusicMuted] = useState(false);

  function toggleSfx() {
    setSfxMuted((prev) => !prev);
    handleSfx(sfxMuted);
  }

  function toggleMusic() {
    setMusicMuted((prev) => !prev);
    handleMusic(musicMuted);
  }

  return (
    <div className="sounds flex flex-row gap-3">
      <Button
        tooltip="Sound Effects"
        styles={{
          button: `button--circle sounds__btn sounds__btn--volume ${
            sfxMuted
              ? "sounds__btn--volume--unmute"
              : "sounds__btn--volume--mute"
          }`,
        }}
        onClick={toggleSfx}
      />
      <Button
        content={musicMuted ? "S" : "NS"}
        tooltip="Music"
        styles={{
          button: "button--black button--circle sounds__btn ",
        }}
        onClick={toggleMusic}
      />
    </div>
  );
}
