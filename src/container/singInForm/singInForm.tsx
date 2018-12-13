import * as React from 'react';
import {reduxForm, Form, Field, InjectedFormProps} from 'redux-form';
import {TextField} from "material-ui";
import Button from '@material-ui/core/Button';


import "./singInFormStyles.scss"
import {email, required} from "../../helpers/validator";

interface IProps extends InjectedFormProps{
    handleSubmit: any;
}

class SingInForm extends React.Component<IProps>{
    renderTextField = (props) => {
        const {
            input,
            label,
            validate,
            meta: {touched, error},
            ...custom
        } = props;
        return <TextField
            hintText={label}
            floatingLabelText={label}
            errorText={touched && error}
            validate={validate}
            {...input}
            {...custom}
        />
    };
    render() {
         const{
             handleSubmit
         }=this.props;
         return (
             <Form onSubmit={handleSubmit} className="sing-in-form-wrapper">
                   <Field
                       name="email"
                       type="text"
                       label="Email Address"
                       hintText=''
                       className='sing-in-form-element'
                       component={this.renderTextField}
                       validate={[required, email]}
                   />
                   <Field
                       name="password"
                       type="password"
                       label="Password"
                       hintText=''
                       className='sing-in-form-element'
                       component={this.renderTextField}
                       validate={required}
                   />
                   <Field
                       name="confirmPassword"
                       type="password"
                       label="Confirm Password"
                       hintText=''
                       className='sing-in-form-element'
                       component={this.renderTextField}
                       validate={required}
                   />
                 <div className="submit-sing-in-form-btn-wrapper">
                     <Button
                         variant="extendedFab"
                         aria-label="Delete"
                         className="submit-sing-in-form-btn"
                         type="submit"
                     >
                         SING UP
                     </Button>
                 </div>
             </Form>
        )
    }
}

export default reduxForm({
    form: 'form',
})(SingInForm);
