import { Provider } from "react-redux";
import { store } from "./app/redux";
import { List } from "./component/List";
import { Tool } from "./component/Tool";
import { Body } from "./component/Body";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Hello WEB!</h1>
      </header>
      <Provider store={store}>
        <List />
        <Tool />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
