"use strict";

console.log("App.js is running");

var app = {
    title: "Indecision App!",
    subtitle: "This is some info formatted!",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        // add the new option
        app.options.push(option);

        // clear the input field
        e.target.elements.option.value = '';
        // re-render the page
        render();
    }
    console.log(app.options);
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    render();
};

var appRoot = document.getElementById("app");

var numbers = [55, 101, 1000];

var render = function render() {
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
        ),
        React.createElement(
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: onRemoveAll },
            "Remove All"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (option) {
                return React.createElement(
                    "li",
                    { key: 'option-' + option },
                    option
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Add Option"
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
