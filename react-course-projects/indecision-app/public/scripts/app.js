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

function getLocation(user) {
    if (user.location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            user.location
        );
    }
}

var user = {
    name: "Adam Parkin",
    age: "17",
    location: "Victoria"
};

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user)
);
var appRoot = document.getElementById("app");
var appRoot2 = document.getElementById("app2");

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2);
