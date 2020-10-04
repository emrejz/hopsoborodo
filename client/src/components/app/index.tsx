import React from "react";
import Root from "router";
import { SessionProvider } from "stores/session";
import { CarouselProvider } from "stores/carousel";

import "./index.scss";

function App() {
  return (
    <div className="App">
      <SessionProvider>
        <CarouselProvider>
          <Root />
        </CarouselProvider>
      </SessionProvider>
    </div>
  );
}

export default App;
