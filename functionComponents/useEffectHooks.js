import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [ counter, setCounter ] = useState(0);

    useEffect( () => {
        cosole.log('useEffect is called');
    }, []);
    return(
        <>
            <div>
                <p>"Counter value is", {counter}</p>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
        </>
        )
}

ReactDOM.render(<App />, document.getElementById('root'));
