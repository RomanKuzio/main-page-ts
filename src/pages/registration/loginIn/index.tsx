import * as React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import LoginInForm from '../../../container/loginInForm/loginInForm'
import { LogInFacebookLogo, LogInGoogleLogo} from '../../../helpers/icons'


import './loginInStyles.scss'

export default class LoginIn extends React.Component {
    handleSubmit=async(value)=>{
        try {
            const response = await axios.post('', {
                email: value.email,
                password: value.password,
            });
            console.log(response);
        } catch (err) {
            console.error(err);
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
                                src={LogInFacebookLogo}
                            />
                        </Button>
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="login-in-btn-google"
                        >
                            <img
                                className="login-in-bottom-btns-image"
                                src={LogInGoogleLogo}
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


