import SplitPane, {
  Divider,
  SplitPaneBottom,
  SplitPaneLeft,
  SplitPaneRight,
  SplitPaneTop,
} from "./Components/Panes/SplitPane";
import QuoteContext from "./Components/Panes/QuoteContext";
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
  const [currQuote, setCurrQuote] = useState(1);

  return (
    <div className="App">
      <QuoteContext.Provider value={{ quotes, currQuote, setCurrQuote }}>
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
      </QuoteContext.Provider>
    </div>
  );
}

export default App;
