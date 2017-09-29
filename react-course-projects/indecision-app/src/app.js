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

function getLocation(user) {
    if (user.location) {
        return <p>Location: {user.location}</p>;
    }
}

const user = {
    name: "Adam Parkin",
    age: "17",
    location: "Victoria"
};

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user)}
    </div>
);
const appRoot = document.getElementById("app");
const appRoot2 = document.getElementById("app2");

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2);