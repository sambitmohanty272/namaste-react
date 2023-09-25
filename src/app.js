import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import  Body from "./Components/Body";






const AppController = () => {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppController />);
