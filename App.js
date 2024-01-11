import React from "react";
import  ReactDOM  from "react-dom";

//React Element
// const heading=React.createElement("h1",{id:"heading"},"Hello!")

//JSX
const jsxHeading=(
<h1 id="heading">
    Hello!
</h1>)

//React Functional Component
const Title=()=>(
    <h1 id="heading">
        Hello!
    </h1>
)
const Heading=()=>(
    <h1 id="heading">
        <Title />
        Hello ME!
    </h1>
)




const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(< Heading/>)
