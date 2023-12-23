import React from "react";
import ReactDOM from "react-dom/client";

const Title=()=><h1>Namaste React</h1>;
const Heading=()=>{
    return <div id="container">
        <Title/>
        <h2>Namaste React functional component</h2>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
