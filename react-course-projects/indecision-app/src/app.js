
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    handleDeleteOptions() {
        this.setState(() => {
            return  {
                options: []
            };
        });
    }
    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return "Enter a valid value to add";
        } else if (this.state.options.indexOf(option) >= 0){
            return option + " already exists";
        } else {
            this.setState((prevState) => {
                return {
                    options: prevState.options.concat(option)
                };
            });
        }
    }
    render() {
        const subTitle = "Put your life in the hands of a computer";

        return (
            <div>
            <Header subTitle={subTitle} />
            <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
            );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                disabled={!props.hasOptions}
                onClick={props.handlePick}
            >
                What should I do?
            </button>
        </div>
    );
};

const Option = (props) => {
    return (
        <li>{props.optionText}</li>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ol>
                {
                    props.options.map(
                        (option) => <Option key={option} optionText={option} />
                    )
                }
            </ol>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleOnSubmit(e) {
        e.preventDefault();
        const value = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(value);
        this.setState(() => {
            return { error };
        });
         
        // clear the input field
        e.target.elements.option.value = '';
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleOnSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))
