import { useState } from "react";
import { HomeButton, Display, Sidebar } from "../common";
import { StudyButton, ExportButton } from "./buttons";

const UploadSidebar = ({ auth }) => {
  const [study, setStudy] = useState(null);
  const [text, setText] = useState(["Select a study", "Export the game"]);

  return (
    <Sidebar>
      <li className="border-top"></li>
      <li className="my-2">
        <StudyButton study={study} setStudy={setStudy} auth={auth} />
      </li>
      <li className="my-2">
        <ExportButton study={study} setText={setText} auth={auth} />
      </li>
      <li className="border-top"></li>
      <li className="my-2">
        <Display text={text} />
      </li>
      <li className="border-top"></li>
      <li className="my-2">
        <HomeButton />
      </li>
    </Sidebar>
  );
};

export default UploadSidebar;