
const app = {
    title: "Visibility Toggle",
    visible: false
};

const onClickShow = (e) => {
    console.log("clicked");
    app.visible = !app.visible;
    render();
}

const render = () =>  {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onClickShow}>Show Details</button>
            {app.visible && <p>This is the secret stuff</p>}
        </div>
    );
    ReactDOM.render(template, document.getElementById("visibility"));
}

render();
