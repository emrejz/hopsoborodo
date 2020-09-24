import React from "react";
import Root from "router";
import { SessionProvider } from "stores/session";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <SessionProvider>
        <Root />
      </SessionProvider>
    </div>
  );
}

export default App;
