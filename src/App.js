import "./App.css";
import Clock from "./components/Clock/Clock";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1>Digital Clock</h1>
          <Clock/>
        </div>
      </div>
    </div>
  );
}

export default App;
