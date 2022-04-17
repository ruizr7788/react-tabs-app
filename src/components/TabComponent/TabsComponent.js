import "../../styling/TabsComponentStyling.css";
import TabDescription from "./TabDescription";
import { useState } from "react";

const TabsComponent = () => {
  const description = {
    History: "something long about history here",
    Vision: "something a companies outlook here",
    Goals: "something about a companies goals here",
  };

  const [activeDescription, setActiveDescription] = useState([
    "",
    "Click on a Tab!",
  ]);

  const toggleActive = (e) => {
    //   read the data-tab and set description based on tab then pass description down to tabdescriptions.js--update activedescription
    if (e.target.dataset.tab === "History") {
      setActiveDescription(["History", description.History]);
    }
    if (e.target.dataset.tab === "Vision") {
      setActiveDescription(["Vision", description.Vision]);
    }

    if (e.target.dataset.tab === "Goals") {
      setActiveDescription(["Goals", description.Goals]);
    }
  };

  return (
    <div className="tabs--container">
      <ul className="tabs--ul">
        <li onClick={toggleActive} data-tab="History">
          History
        </li>
        <li onClick={toggleActive} data-tab="Vision">
          Vision
        </li>
        <li onClick={toggleActive} data-tab="Goals">
          Goals
        </li>
      </ul>
      <TabDescription activeDescription={activeDescription} />
    </div>
  );
};

export default TabsComponent;
