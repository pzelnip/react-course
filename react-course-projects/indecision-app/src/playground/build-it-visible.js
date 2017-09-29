class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visible: false
        }
    }
    handleToggleVisibility(e) {
        this.setState((previousState) => {
            return {
                visible: !previousState.visible
            }
        })
    }
    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visible ? "Hide Details" : "Show Details"}</button>
                {this.state.visible && <p>Hey you see the secret thing</p>}
            </div>
        );
    }
}




ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// const app = {
//     title: "Visibility Toggle",
//     visible: false
// };

// const onClickShow = (e) => {
//     app.visible = !app.visible;
//     render();
// }

// const render = () =>  {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={onClickShow}>{app.visible ? "Hide Details" : "Show Details"}</button>
//             {app.visible && <p>This is the secret stuff</p>}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById("app"));
// }

// render();
