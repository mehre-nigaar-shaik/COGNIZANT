import ListofPlayers from "./components/ListofPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {

  const flag = true;

  if (flag) {
    return <ListofPlayers />;
  } else {
    return <IndianPlayers />;
  }

}

export default App;