import React,{useState} from "react";
import Root from "router";
import DarkMode from "../darkMode";
import { SessionProvider } from "stores/session";
import { CarouselProvider } from "stores/carousel";

import "./index.scss";

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={isDark ? "appContainer darkMode":"appContainer"}>
      <SessionProvider>
        <CarouselProvider>
        <DarkMode isDark={isDark} setIsDark={setIsDark}/>
          <Root />
        </CarouselProvider>
      </SessionProvider>
    </div>
  );
}

export default App;
