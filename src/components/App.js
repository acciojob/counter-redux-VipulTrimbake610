
import React from "react";
import './../styles/App.css';
import { Provider } from "react-redux";
import store from "../redux/store";
import CounterApp from "./CounterApp";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <CounterApp/>
      </Provider>
    </div>
  )
}

export default App
