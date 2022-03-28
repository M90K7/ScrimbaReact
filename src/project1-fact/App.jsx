
// Figma: https://www.figma.com/file/xA1rJVQOorqMW6xjGdBLcI/ReactFacts

import React, { Suspense } from "react";

// import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./App.css";

const Navbar = React.lazy(() => import("./components/Navbar"));

export default function App() {
  return (
    <div className="proj1 App container">
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
      </Suspense>
      <Main />
    </div>
  );
}