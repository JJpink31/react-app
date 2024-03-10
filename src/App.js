import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather defaultCity="Washington D.C" />
      </header>
    </div>
  );
}

export default App;
