
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ["One", "Two", "Four"]
        }
    }
    render() {
        const title = 'Indecision';
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action hasOptions={this.state.options.length > 0}/>
                <Options options={this.state.options} />
                <AddOption />
            </div>
            );
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        console.log("handlepick");
    }
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.handlePick}>What should I do?
                </button>
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll() {
        console.log("Handle remove all ", this.props.options);
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                <ol>
                    {
                        this.props.options.map(
                            (option) => <Option key={option} optionText={option} />
                        )
                    }
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleOnSubmit(e) {
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        if (value) {
            alert(value);
        }
        // clear the input field
        e.target.elements.option.value = '';
        console.log("Handle on add option", value);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))