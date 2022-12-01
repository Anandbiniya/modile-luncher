import logo from "./logo.svg";
import "./App.css";
import Mobile from "./Components/Mobile";
import BlueTooth from "./Components/Bluetooth";

function App() {
  return (
    <div className="App">
      {/* here all the data fetches */}
      <Mobile />
      <BlueTooth />
    </div>
  );
}

export default App;
