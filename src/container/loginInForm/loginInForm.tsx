import * as React from 'react';
import {reduxForm, Form, Field, InjectedFormProps} from 'redux-form';
import {TextField} from "material-ui";

import arrow from '../../static/images/arrow.png'

import Button from '@material-ui/core/Button';

import { email, required } from '../../helpers/validator'

import "./loginInFormStyles.scss"

interface IProps extends InjectedFormProps{
    handleSubmit: any;
}

class LoginInForm extends React.Component<IProps>{
    renderTextField = (props) => {
        const {
            input,
            label,
            meta: {touched, error},
            ...custom
        } = props;
        return <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            {...input}
            {...custom}
        />
    };
    render() {
        const{
            handleSubmit
        }=this.props;
        return (
            <Form onSubmit={handleSubmit} className="login-in-form-wrapper">
                <Field
                    name="email"
                    type="text"
                    label="Email Address"
                    className='login-in-form-element'
                    component={this.renderTextField}
                    validate={[required, email]}
                />
                <Field
                    name="password"
                    type="password"
                    label="Password"
                    className='login-in-form-element'
                    component={this.renderTextField}
                    validate={required}
                />
                <div className="submit-login-in-form-btn-wrapper">
                    <Button
                        variant="extendedFab"
                        className="submit-login-in-form-btn"
                        type="submit"
                    >
                        <img
                            className="submit-login-in-form-btn-icon"
                            src={arrow}
                        />
                    </Button>
                </div>
            </Form>
        )
    }
}

export default reduxForm({
    form: 'loginInForm',
})(LoginInForm);
