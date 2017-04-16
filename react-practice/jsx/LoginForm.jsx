import React from 'react';
import { Well, Button, Nav, NavItem, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import * as firebase from 'firebase';
import fbConfig from './firebaseConfig.jsx';
const  auth = firebase
  .initializeApp(fbConfig).auth();

const LoginForm = React.createClass({
    getInitialState() {
        return {
            email: {
                className: "form-control danger",
                value:"justlove0714@hotmail.com",
            },
            password: {
                className: "form-control",
                value: "gg123456",
            },
            error: {
                className: "alert alert-danger",
                message: "密碼錯誤",
            },
        };
    },
    getValidationState(target) {
        
        var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if( target == "email" && this.state.email.value !== "" ){
            if(!email_regex.test(this.state.email.value)) {
                return "error";
            } else {
                return "success";
            }
        }
    },
    handleChange(e) {
        var data = this.state;
        data[e.target.name] = e.target.value;
        this.setState(data);
    },
    formSubmit() {
        var email = this.state.email.value;
        var password = this.state.password.value;
        auth
            .signInWithEmailAndPassword(email, password)
            .then(function(user){
                console.log(user);
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });

    },
    render() {
        return <div className="row">
                <div className="col-xs-12 col-md-6 col-md-offset-3">
                    <Well bsSize="sm">
                        <form>
                            <FormGroup
                                bsSize="sm"
                                
                            >
                                <ControlLabel>電子信箱:</ControlLabel>
                                <FormControl
                                    bsClass={this.state.email.className}
                                    type="text"
                                    value={this.state.email.value}
                                    name="email"
                                    placeholder="請輸入電子信箱"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                bsSize="sm"
                                validationState={this.getValidationState()}
                            >
                                <ControlLabel>請輸入密碼:</ControlLabel>
                                <FormControl
                                    type="password"
                                    bsClass={this.state.email.className}
                                    value={this.state.password.value}
                                    placeholder="請輸入密碼"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button
                                type="button"
                                bsStyle="primary"
                                onClick={this.formSubmit}
                            >登入</Button>
                        </form>
                    </Well>
                    <p className={this.state.error.className}>{this.state.error.message}</p>
                </div>
            </div>
    }
});

export default LoginForm;