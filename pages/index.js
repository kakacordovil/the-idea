import { useState } from 'react';
function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}
function Counter() {
    const [counter, setCounter] = useState();
    function addCounter() {
        setCounter(counter +1);
    }
    return(
        <div>{counter}</div>
        <button onClick={addCounter}>Add</button>
    )
}

export default Home