import React from "react";
import { Routes, Route } from "react-router-dom";
import Birds from "../Pages/Birds/Birds";
import BirdDetails from "../Pages/BirdDetails/BirdDetails";

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Birds />} />
          <Route path="/details" element={ <BirdDetails /> } />
        </Routes>
      </main>
    </>
  );
}

export default App;
