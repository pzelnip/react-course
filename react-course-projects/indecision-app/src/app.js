console.log("App.js is running");

var app = {
    title: "Indecision App!",
    subtitle: "This is some info formatted!"
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>

        <ol>
            <li>Item One</li>
            <li>Item two</li>
        </ol>
    </div>
);

var user = {
    name: "Adam Parkin",
    age: "old enough to know better",
    location: "Victoria"
};
var template2 = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById("app");
var appRoot2 = document.getElementById("app2");

ReactDOM.render(template, appRoot);
ReactDOM.render(template2, appRoot2);