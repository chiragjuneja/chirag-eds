import { j as jsxRuntimeExports } from './jsx-runtime-Brv2UC_o.js';
// import 'react';
// import '../myscripts/node_modules/react';

var Hey = function (props) {
    var name = props.name, _a = props.isFriendly, isFriendly = _a === void 0 ? true : _a, _b = props.showTime, showTime = _b === void 0 ? false : _b;
    var getGreeting = function () { return (isFriendly ? "Hi " : "Hey ") + name; };
    var currentTime = showTime ? new Date().toLocaleTimeString() : '';
    return (jsxRuntimeExports.jsxs("div", { children: [getGreeting(), currentTime && jsxRuntimeExports.jsxs("div", { children: ["Current time: ", currentTime] })] }));
};

export { Hey as default };
