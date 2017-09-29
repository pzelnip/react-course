"use strict";

console.log("App.js is running");

var app = {
    title: "Indecision App!",
    subtitle: "This is some info formatted!",
    options: ['One', 'Two']
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options && app.options.length > 0 ? "Here are your options: " + app.options : "No options"
    )
);

var count = 0;

var addOne = function addOne() {
    return console.log('addone', count);
};
var subOne = function subOne() {
    return console.log('subOne', count);
};
var reset = function reset() {
    return console.log('reset');
};

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Count: ",
        count
    ),
    React.createElement(
        "button",
        { onClick: addOne, className: "button" },
        "+1"
    ),
    React.createElement(
        "button",
        { onClick: subOne, className: "button" },
        "-1"
    ),
    React.createElement(
        "button",
        { onClick: reset, className: "button" },
        "Reset"
    )
);
var appRoot = document.getElementById("app");
var appRoot2 = document.getElementById("app2");

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2);
