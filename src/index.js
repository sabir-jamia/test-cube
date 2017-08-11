import React from 'react';
import ReactDOM from 'react-dom';
import Login from './views/Sign/index'

class HelloWorld extends React.Component
{
    constructor() {
        super();
        this.state = {
            counter : 0
        };
    };
    
    render() {
        return (
            <div>   
                <Login />
            </div>
        );
    };
};

ReactDOM.render(<HelloWorld name="Chris Harrington" />, document.getElementById('root'));