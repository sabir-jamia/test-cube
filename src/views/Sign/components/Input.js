import React from 'react';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

export default class Input extends React.Component
{
    constructor() {
        super();
        this.style = {marginBottom:25};
    };
    
    render() {
        return ( 
                <div style={this.style} className="input-group">
                <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                    <FormControl type="text" />
                </div>          
        );
    }
}