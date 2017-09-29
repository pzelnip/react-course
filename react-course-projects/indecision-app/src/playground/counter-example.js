let count = 0;

const addOne = () => {
    count++;
    console.log('addone', count);
    renderCounterApp();
}
const subOne = () => {
    count--;
    console.log('subOne', count);
    renderCounterApp();
}
const reset = () => {
    count = 0;
    console.log('reset', count);
    renderCounterApp();
}


const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne} className="button">+1</button>
            <button onClick={subOne} className="button">-1</button>
            <button onClick={reset} className="button">Reset</button>
        </div>
    );
    
    ReactDOM.render(template2, appRoot2);
}
renderCounterApp();