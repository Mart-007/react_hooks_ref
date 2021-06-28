import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';

const App = () => {
    const[counter, setCounter] = useState(0);
    const[username, setUsername] = useState("")

    useEffect( () => {
        console.log("useEffect executed")
    }) 
}


return( 
    <>
        <div>
            <p>Counter value is: {counter}</p>
            <button onClick={ () => setCounter(+1)}>Increment</button>
        </div>
        <br />
        <br />
        Name:{""}
        <input 
            type="text" 
            name="username" 
            autocomplete="off" 
            placeholder="Enter your name" 
            value={username} 
            onChange={event => setUsername(event.target.value)}
        />
        <br />
        { username }
    </>

)

ReactDom.render(<App />, document.getElementById('root'));