import React from 'react';
import { Well, Button, FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import * as firebase from 'firebase';
import fbConfig from './firebaseConfig.jsx';

// Make sure you swap this out with your Firebase app's config
const  auth = firebase  
  .initializeApp(fbConfig).auth();

const Register = React.createClass({
    getInitialState() {
        return {
            username: "Paul Ku",
            mobile: "0912994172",
            email: "justlove0714@hotmail.com",
            lineid: "paulku",
            password:　"gg123456",
            password_check: "gg123456", 
        }
    },
    getValidationState() {

    },
    componentWillMount(){
        console.log("If user is login in?");
        auth.onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                console.log(uid);
                // ...
            } else {
                // User is signed out.
                // ...
            }
        });

    },
    handleChange(e) {
        var data = this.state;
        data[e.target.name] = e.target.value;
        this.setState(data);        
    },
    formSubmit() {
        console.log(this.state);
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ...
        });
    },
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6 col-md-offset-3">
                    <Well bsSize="sm">
                        <form>
                            <FormGroup
                                bsSize="sm"
                                validationState={this.getValidationState()}
                            >
                                <ControlLabel>姓名:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.username}
                                    name="username"
                                    placeholder="請輸入真實姓名"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                bsSize="sm"
                                validationState={this.getValidationState()}
                            >
                                <ControlLabel>手機號碼:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.mobile}
                                    name="mobile"
                                    placeholder="請輸入手機號碼"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                bsSize="sm"
                                validationState={this.getValidationState()}
                            >
                                <ControlLabel>電子信箱:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.email}
                                    name="email"
                                    placeholder="請輸入電子信箱"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                bsSize="sm"
                                validationState={this.getValidationState()}
                            >
                                <ControlLabel>Line ID:</ControlLabel>
                                <FormControl
                                    type="text"
                                    value={this.state.lineid}
                                    placeholder="請輸入Line ID"
                                    name="lineid"
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
                                    value={this.state.password}
                                    placeholder="請輸入密碼"
                                    name="password"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup
                                bsSize="sm"
                                validationState={this.getValidationState()}
                            >
                                <ControlLabel>請重複上列密碼:</ControlLabel>
                                <FormControl
                                    type="password"
                                    value={this.state.password_check}
                                    placeholder="請輸入密碼"
                                    name="password_check"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button
                                type="button"
                                bsStyle="primary"
                                onClick={this.formSubmit}
                            >註冊</Button>
                        </form>
                    </Well>
                </div>
            </div>
        );
    }
});
export default Register;