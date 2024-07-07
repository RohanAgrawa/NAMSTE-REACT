import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namste React");

const root = ReactDOM.createRoot(document.getElementById("root"));

// JSX
const jsxHeader = (
  <div>
    <h1 id="heading">JSX Header</h1>
  </div>
);

// Functional Component
const HeaderComponent = () => {
  return (
    <div>
      {jsxHeader}
      <h1 id="heading">Namste React</h1>
    </div>
  );
};

const title = (
  <div>
    <HeaderComponent></HeaderComponent>
    <h4>This is title JSX</h4>
  </div>
);

root.render(title);

// To use Function component we use angular brackets

//root.render(<HeaderComponent />);
