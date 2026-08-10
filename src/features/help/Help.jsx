import "./Help.scss";
import Button from "@/shared/components/Button/Button";
import Dialog from "@/shared/components/Dialog/Dialog";
import ToolTip from "./ToolTip";
import { useRef } from "react";

export default function Help() {
  const dialogRef = useRef(null);

  function toggleDialog() {
    dialogRef.current.toggle();
  }

  return (
    <>
      <Button
        content="?"
        onClick={toggleDialog}
        tooltip="Help Button"
        styles={{
          other: "help-btn",
          button: "button--black button--circle",
        }}
      ></Button>
      <Dialog
        modal={false}
        ref={dialogRef}
        styles={{
          dialog: "help-dialog",
        }}
      >
        <div className="flex flex-column gap-2">
          <ToolTip>Click the help button to close dialog</ToolTip>
          <ToolTip>Don't click on the same card twice!</ToolTip>
          <ToolTip>Click the Minecraft logo to go back</ToolTip>
        </div>
      </Dialog>
    </>
  );
}
