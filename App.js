import React from "react";
import ReactDOM from "react-dom";
{/* <div id="parent">
    <div id="child">
        <h1 id="heading"></h1>
    </div>
</div> */}
const heading=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"heading"},"Hello World!"),
    React.createElement("h2",{id:"heading1"},"Hello!")
]),
React.createElement("div",{id:"child"},[
    React.createElement("h1",{id:"heading"},"Hello World!"),
    React.createElement("h2",{id:"heading1"},"Hello World1!")
])
]
);


// const heading=React.createElement("h1",{id:"heading"},"Hello World!");
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)