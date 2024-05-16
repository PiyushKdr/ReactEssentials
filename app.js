const parent = React.createElement(
  "div",
  { id: "Parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "child2" }, "I'm H1 tag")
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
