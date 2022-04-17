import "./App.css";
import Count from "./componentEffect.jsx/Count";
import GIPHYAPI from "./componentEffect.jsx/GIPHYAPI";
import MouseMove from "./componentEffect.jsx/MouseMove";
import RandomUser from "./componentEffect.jsx/RandomUser";
import Robohash from "./componentEffect.jsx/Robohash";

function App() {
  return (
    <>
      <Count />
      <MouseMove />
      <GIPHYAPI />
      <Robohash />
      <RandomUser />
    </>
  );
}

export default App;
