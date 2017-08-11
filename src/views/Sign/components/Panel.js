import React from 'react';

class PanelHeader extends React.Component 
{
    constructor() {
        super();
        this.style = {
            float:"right",
            fontSize:"80%", 
            position:"relative",
            top:"-10px"
        }
    };
    
    render() {
        return (
            <div className="panel-heading">
                <div className="panel-title">Sign In</div>
                <div style={this.style}>
                    <a href="#">Forgot password?</a>
                </div>
            </div>
        );
    }
}

export default class Panel extends React.Component
{
    constructor() {
        super();
        this.style = {
            paddingTop:30
        }
    }
    render() {
        return (
            <div className="panel panel-info" >
                <PanelHeader />
                <div style={this.style} className="panel-body" >{this.props.children}</div>
            </div>            
        );  
    };
}


