import "../../styling/TabsStyling.css";
import TabsComponent from "./TabsComponent";

const Tabs = () => {
  return (
    <div className="tab--component-container">
      <img
        className="tab-image"
        src={require("../../images/wall2.jpg")}
        alt="Hi there"
      />
      <TabsComponent />
    </div>
  );
};

export default Tabs;
