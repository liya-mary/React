import React from "react";
import ReactDOM from "react-dom/client";

//jsx
//Babel transpile jsx to react...
const jsxHeading = <h1>Namste jsx react</h1>


const number = 1000;
const HeadingComponent = () => {
    return (
        <div>
            {number}
            <h1 className="heading">Namaste React functional component</h1>
        </div>

    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)