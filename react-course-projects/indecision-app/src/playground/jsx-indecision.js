console.log("App.js is running");

const app = {
    title: "Indecision App!",
    subtitle: "This is some info formatted!",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option && app.options.indexOf(option) < 0) {
        // add the new option
        app.options.push(option);

        // re-render the page
        render();
    }
    // clear the input field
    e.target.elements.option.value = '';
    console.log(app.options);
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * app.options.length);

    const option = app.options[randNum];
    console.log(option);
}

const appRoot = document.getElementById("app");

const numbers = [55, 101, 1000];

const render = () =>  {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && app.options.length > 0 ? "Here are your options: " + app.options : "No options"}</p>

            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={'option-'+option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();
