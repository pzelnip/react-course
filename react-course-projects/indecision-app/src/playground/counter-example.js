class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("app"))

// let count = 0;

// const addOne = () => {
//     count++;
//     console.log('addone', count);
//     renderCounterApp();
// }
// const subOne = () => {
//     count--;
//     console.log('subOne', count);
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     console.log('reset', count);
//     renderCounterApp();
// }


// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="button">+1</button>
//             <button onClick={subOne} className="button">-1</button>
//             <button onClick={reset} className="button">Reset</button>
//         </div>
//     );
    
//     ReactDOM.render(template2, appRoot2);
// }
// renderCounterApp();