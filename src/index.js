import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Fact from "./project1-fact/App";
import Airbnb from "./Project2-airbnb/App";
import Meme from "./project3_meme/App";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<Fact />} /> */}
          <Route path="fact" element={<Fact />} />
          <Route path="airbnb" element={<Airbnb />} />
          <Route index element={<Meme />} />
          <Route path="meme" element={<Meme />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
