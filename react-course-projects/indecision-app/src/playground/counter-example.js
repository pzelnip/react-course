class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }
    handleAddOne() {
        console.log("Handle add one", this.props);
    }
    handleMinusOne() {
        console.log("Handle sub one", this.props);
    }
    handleReset() {
        console.log("Handle clear", this.props);
    }
    render() {
        return (
            <div>
                <h1>Count: </h1>
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