import { useState } from "react";
import "./App.css";
import stateData from "./stateData";

function App() {
  return (
    <div className="App">
      <StateTypeahead
        stateData={stateData}
        onSelectState={(state) => {
          alert(state.label);
        }}
      />
    </div>
  );
}

function StateTypeahead(props) {
  const [inputValue, setInputValue] = useState("");

  const items = props.stateData
    .filter((state) => state.label.indexOf(inputValue) > -1)
    .map((state) => {
      return (
        <div
          className="listItem"
          onClick={() => {
            props.onSelectState(state);
          }}
        >
          {state.label}
        </div>
      );
    });

  return (
    <div className="typeahead">
      <input
        className="input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="list">{items}</div>
      <h1>Selected State: {null}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin feugiat
        ex in velit cursus tempor vestibulum vitae risus. Duis nec diam eu urna
        lacinia iaculis. Aenean velit erat, dapibus sed massa id, sagittis
        rhoncus diam. In tellus nisi, blandit ac magna id, suscipit scelerisque
        justo. Donec a vulputate libero. Aliquam consectetur ligula lectus, ut
        sagittis ex dignissim vitae. Pellentesque et lacinia velit, sed viverra
        neque.
      </p>
    </div>
  );
}

export default App;
