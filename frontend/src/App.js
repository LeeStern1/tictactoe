import React from "react";
import Game from "./components/Game";
import "./App.css";
import createStore from './redux';
import { Provider } from 'react-redux';

const STORE = createStore();

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/app")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  const AppWrapper = () => {
    return (
        <Provider store={STORE}>
          <Game />
        </Provider>
    ); 
  }
  return <AppWrapper></AppWrapper>;
}

export default App;