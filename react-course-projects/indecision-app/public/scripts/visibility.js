"use strict";

var app = {
    title: "Visibility Toggle",
    visible: false
};

var onClickShow = function onClickShow(e) {
    console.log("clicked");
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
            "Show Details"
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
