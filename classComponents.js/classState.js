import React, { Component } from 'react';
import reactDOM, { render } from 'react-dom';

class App extends React{
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState(prevState => ({
            count: this.state.count + 1
        }));
    };

    render(){
        return(
            <div>
                <p>Counter value is: {this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }

}

ReactDom.render(<App/>, document.getElementbyId('root'));

