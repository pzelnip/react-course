console.log("App.js is running");

const app = {
    title: "Indecision App!",
    subtitle: "This is some info formatted!",
    options: ['One', 'Two']
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options && app.options.length > 0 ? "Here are your options: " + app.options : "No options"}</p>
    </div>
);

let count = 0;

const addOne = () => console.log('addone', count);
const subOne = () => console.log('subOne', count);
const reset = () => console.log('reset');

const template2 = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne} className="button">+1</button>
        <button onClick={subOne} className="button">-1</button>
        <button onClick={reset} className="button">Reset</button>
    </div>
);
const appRoot = document.getElementById("app");
const appRoot2 = document.getElementById("app2");

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2);