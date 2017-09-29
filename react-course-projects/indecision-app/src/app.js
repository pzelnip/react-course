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

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);

let count = 0;

const addOne = () => {
    count++;
    console.log('addone', count);
    renderCounterApp();
}
const subOne = () => {
    count--;
    console.log('subOne', count);
    renderCounterApp();
}
const reset = () => {
    count = 0;
    console.log('reset', count);
    renderCounterApp();
}

const appRoot2 = document.getElementById("app2");

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={subOne} className="button">-1</button>
            <button onClick={reset} className="button">Reset</button>
        </div>
    );
    
    ReactDOM.render(template2, appRoot2);
}
renderCounterApp();