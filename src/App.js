import "./App.css";
import Header from "./Layout/Component/Header/Header"
import ToggleChat from "./Layout/Component/ToggleChat";
import Home from "./Pages/Home"

function App() {
  return (
    <div className="wrapper">
            <Header />
            <ToggleChat/>
            <div className="container">
                <div className="content">
                <Home/>
                </div>
            </div>
      </div>
  );
}

export default App;
