"use strict";

var app = {
    title: "Visibility Toggle",
    visible: false
};

var onClickShow = function onClickShow(e) {
    app.visible = !app.visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            app.title
        ),
        React.createElement(
            "button",
            { onClick: onClickShow },
            app.visible ? "Hide Details" : "Show Details"
        ),
        app.visible && React.createElement(
            "p",
            null,
            "This is the secret stuff"
        )
    );
    ReactDOM.render(template, document.getElementById("visibility"));
};

render();
