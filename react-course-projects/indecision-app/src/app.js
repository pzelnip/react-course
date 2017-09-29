class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = "Put your life in the hands of a computer";
        const options = ["One", "Two", "Four"];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
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
    render() {
        return (
            <div>
            <button>What should I do?</button>
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
    render() {
        return (
            <div>
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
    render() {
        return (
            <div>
                Add an option here
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))