import "../../styling/TabsComponentStyling.css";

const TabDescription = (props) => {
  return (
    <div className="description">
      <h1>{props.activeDescription[0]}</h1>
      <p>{props.activeDescription[1]}</p>
    </div>
  );
};
export default TabDescription;
