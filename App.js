// const heading = React.createElement("h1", {id : "heading"}, "Hello world from react");

//    const parent = React.createElement("div", {id : "parent"},
//     React.createElement("h1", {id : "heading"}, "Hello from h1")  // For single div
//    );

import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", { id: "heading" }, "Hello from h1")
  ),
  React.createElement(
    "div",
    { id: "child2" },
    React.createElement("h2", { id: "heading" }, "Hello from h2")
  ),
]); // Nested tags
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
