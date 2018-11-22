import * as React from 'react';
import Button from '@material-ui/core/Button';

import LoginInForm from '../../../container/loginInForm/loginInForm'
import Google from '../../../static/images/googlePlus.png'
import FacebookLoginIn from '../../../static/images/facebookLoginIn.png'
import {crudBuilder} from "../../../helpers/httpRequest";

import './loginInStyles.scss'

export default class LoginIn extends React.Component {
    handleSubmit=async(value)=>{
        try {
            const response:any = await crudBuilder('/user_token').post(
                {
                    auth: {
                        email: value.email,
                        password: value.password
                    }
                }
            );
            console.log(response);
            localStorage.setItem('token', response.data.jwt);
        } catch (err) {
            console.error(err.response);
        }
    };
    public render(){
        return(
            <div className="login-in-wrapper">
                <div className="login-in-top">
                    <div className="login-in-title">
                        Have an Account?
                    </div>
                    <LoginInForm
                        onSubmit={this.handleSubmit}
                    />
                </div>
                <div className="login-in-bottom">
                    <div className="login-in-bottom-btns-wrapper">
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="login-in-btn-facebook"
                        >
                            <img
                                className="login-in-bottom-btns-image"
                                src={FacebookLoginIn}
                            />
                        </Button>
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="login-in-btn-google"
                        >
                           <img src={Google}
                                className="login-in-bottom-btns-image"
                           />
                        </Button>
                    </div>
                    <h3 className="login-in-bottom-text">
                        Forgot Password?
                    </h3>
                </div>
            </div>
        );
    }
}


