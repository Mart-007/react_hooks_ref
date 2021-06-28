import React, { useState } from 'react';
import ReactDOM  from 'react-dom';

const App = () => {
    const [state, setState] = useState({
        counter: 0,
        username: ""
    });

    const handleonClick = () => {
        setState({
            counter: state.counter + 1;
        })
    }

}