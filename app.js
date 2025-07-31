const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1  tag"), React.createElement("h2", {}, "I am h2  tag")]
    ),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1  tag"), React.createElement("h2", {}, "I am h2  tag")]
    )]
)



const head = React.createElement("h1", {}, "Hello from react....");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);

console.log("parent: ", parent);
root.render(parent);
