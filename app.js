import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement("div", { id: "child", key: 1 },
        [React.createElement("h1", { key: 5 }, "I am h1  tag"), React.createElement("h2", { key: 3 }, "I am h2  tag")]
    ),
    React.createElement("div", { id: "child", key: 2 },
        [React.createElement("h1", { key: 7 }, "I am h1  tag"), React.createElement("h2", { key: 4 }, "I am h2  tag")]
    )]
)



const head = React.createElement("h1", {}, "Hello from react....");
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);

console.log("parent: ", parent);
root.render(parent);

