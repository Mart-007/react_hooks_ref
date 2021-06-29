//This approach returns Nan for counter when you type on input field, but the counter works wen hit it first.
//This is because using an object in -useState- will completely replace the object instead of merging it when we set state using setState method.

import React, { useState } from 'react';
import ReactDOM  from 'react-dom';

const App = () => {
    const [state, setState] = useState({
        counter: 0,
        username: ""
    });

    const handleonClick = () => {
        setState({
            counter: state.counter + 1
        })
    };

    //proper approach in handleonClick if you try to use an object in useState --------->
    const handleonClick = () => {
        setState(prevState => ({
            ...prevState,
            counter: prevState.counter + 1
        }))
    }

    const handleonChange = event => {
        setState({
            username: event.target.value
        })
    };

    //proper approach in handleonChange if you try to use an object in useState -------->
    const handleonChange = event => {
        const value = event.target.value;
        setState(prevState => ({
            ...prevState,
            username: value
        }))
    }
        return(
            <div>
                <div>
                    <p>Counter value is: {state.counter}</p>
                    <button onClick={handleonClick}></button>
                <br />
                <br />
                Name:{""}
                <input 
                    type="text" 
                    name="username" 
                    value={state.username} 
                    placeholder="Input text here.. ."
                    autocomplete="off"/>
                    onChange={handleonChange}
                <br />
                {state.username}
                </div>
            </div>
        )
}

ReactDOM.render(<App />, document.getElementById('root'));