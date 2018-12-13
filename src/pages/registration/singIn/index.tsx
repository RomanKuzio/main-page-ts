import * as React from 'react';
import Button from '@material-ui/core/Button';
import { ToastContainer, toast } from 'react-toastify';

import SingInForm from '../../../container/singInForm/singInForm'
import {crudBuilder} from "../../../helpers/httpRequest";
import Google from '../../../static/images/googlePlusSinIn.png'
import Facebook from '../../../static/images/facebook .png'

import './singInStyles.scss';



export default class SingIn extends React.Component {
    handleSubmit=async(value)=>{
        try {
            if(value.password !=value.confirmPassword){
                toast.error("Passwords do not match")
            }else {
                const response: object = await (crudBuilder('/sign_up').post({
                    user: {
                        email: value.email,
                        password: value.password,
                    }
                }));
                toast.info("user is successfully registered")
            }
        } catch (err) {
            console.error(err);
            toast.info("A user with such an email is already registered",
            )
        }
    };

    public render(){
        return(
            <div className="sing-in-wrapper">
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                />
                <div className="sing-in-top">
                    <div className="sing-in-title">
                        Are you new user?
                    </div>
                    <SingInForm
                        onSubmit={this.handleSubmit}
                    />
                </div>
                <div className="sing-in-bottom">
                    <div className="sing-in-bottom-btns-wrapper">
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="sing-in-btn-facebook"
                        >
                            <img
                                className="sing-in-bottom-btns-image"
                                src={Facebook}
                            />
                        </Button>
                        <Button
                            variant="fab"
                            aria-label="Edit"
                            mini={true}
                            className="sing-in-btn-google"
                        >
                            <img
                                src={Google}
                                className="sing-in-bottom-btns-image"
                            />
                        </Button>
                    </div>
                    <h3 className="sing-in-bottom-text">
                        <a style={{color:"white"}}>Sing Up it's free</a>
                    </h3>
                </div>
            </div>
        );
    }
}


