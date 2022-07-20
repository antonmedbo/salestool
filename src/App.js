import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "./Components/Panes/SplitPane";
import { useState } from "react";

import "./App.css";

const quotes = [
  {
    id: 1,
    author: "Shimano",   
  },
  {
    id: 2,
    author: "Sram",
  },
  {
    id: 3,
    author: "Specialized",
  },
  {
    id: 4,
    author: "BBB",
  },
];

function App() {

  return (
    <div className="App">

        <SplitPane className="split-pane-row">
          <SplitPaneLeft>
            <SplitPane className="split-pane-col">
              <SplitPaneTop />
              <Divider className="separator-row" />
              <SplitPaneBottom />
            </SplitPane>
          </SplitPaneLeft>
          <Divider className="separator-col" />

          <SplitPaneRight />
        </SplitPane>

    </div>
  );
}

export default App;
