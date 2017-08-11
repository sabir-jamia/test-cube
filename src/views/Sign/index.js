import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'; 
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';
import Grid from 'react-bootstrap/lib/Grid';
import Col from 'react-bootstrap/lib/Col';
import Panel from './components/Panel';
import Input from './components/Input';

export default class Login extends React.Component 
{
    constructor() {
        super();
        this.loginBox = { marginTop : 50};
    }
    
    render () {
        return (
            <Grid> 
             <Col style={this.loginBox} sm={8} smOffset={2} md={6} mdOffset={3}> 
                    <Panel>
                    <form id="loginform" class="form-horizontal" role="form">
                            <FormGroup controlId="formBasicText">
                                <Input />
                            </FormGroup>
                            <FormGroup controlId="sss">
                                <FormControl
                                type="password"
                                placeholder="password"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Checkbox>
                                    Remember me
                                </Checkbox>
                            </FormGroup>
                            <FormGroup>
                            <Button type="submit" bsStyle="success">
                                Login
                            </Button>
                            <Button bsStyle="info">
                                Login with facebbok
                            </Button>
                            </FormGroup>
                        </form>
                    </Panel>
                </Col>
            </Grid>
        );
    }
}
