import { j as jsxRuntimeExports } from './jsx-runtime-Brv2UC_o.js';
// import './node_modules/react';

// function Hello(props) {
//     debugger;
//     console.log("Inside Hello.js");
//     return jsxRuntimeExports.jsxs("div", { children: ["Hello ", props.name] });
// }

// export default Hello;

// import { j as jsxRuntimeExports } from './jsx-runtime-DoKqoz7B.js';

function Hello(props) {
    return jsxRuntimeExports.jsxs("div", { children: [jsxRuntimeExports.jsx("p", { children: "Hello" }), jsxRuntimeExports.jsxs("button", { children: ["Click Here ", props.name] }), props.name] });
}

export { Hello as default };
