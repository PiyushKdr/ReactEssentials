import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const jsxHeading = <h1>This is a simple React Element</h1>;

//Creating a React Component
const HeadingComponent1 = () => {
  return <h1>This is Functional Component1</h1>;
};

//Component Composition
const HeadingComponent2 = () => {
  return (
    <div id="container">
      <HeadingComponent1 />
      <h1>This is a Functional Component2</h1>;
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
