console.log("App.js is running");

const app = {
    title: "Indecision App!",
    subtitle: "This is some info formatted!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        // add the new option
        app.options.push(option);

        // clear the input field
        e.target.elements.option.value = '';
        // re-render the page
        render();
    }
    console.log(app.options);
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById("app");

const render = () =>  {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? "Here are your options: " + app.options : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();
