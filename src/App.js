import "./App.css";
import Tabs from "./components/TabComponent/Tabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
        <span>
          lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut, autem
          officiis.
        </span>
      </header>
      <section className="main">
        <Tabs />
      </section>
    </div>
  );
}

export default App;
