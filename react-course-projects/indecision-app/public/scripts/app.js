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

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

var count = 0;

var addOne = function addOne() {
    count++;
    console.log('addone', count);
    renderCounterApp();
};
var subOne = function subOne() {
    count--;
    console.log('subOne', count);
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    console.log('reset', count);
    renderCounterApp();
};

var appRoot2 = document.getElementById("app2");

var renderCounterApp = function renderCounterApp() {
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

    ReactDOM.render(template2, appRoot2);
};
renderCounterApp();
