
const app = {
    title: "Visibility Toggle",
    visible: false
};

const onClickShow = (e) => {
    app.visible = !app.visible;
    render();
}

const render = () =>  {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onClickShow}>{app.visible ? "Hide Details" : "Show Details"}</button>
            {app.visible && <p>This is the secret stuff</p>}
        </div>
    );
    ReactDOM.render(template, document.getElementById("visibility"));
}

render();
