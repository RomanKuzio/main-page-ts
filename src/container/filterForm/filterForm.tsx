import *as React from 'react';
import {reduxForm, Form, Field, InjectedFormProps} from 'redux-form';
import {FormControl, FormGroup, Glyphicon,} from "react-bootstrap";

import SearchBaground from '../../static/images/searchIcon.png'
import Star from '../../static/images/iconStar.png'

import './filterFormStyles.scss';

interface IProps extends  InjectedFormProps{
    handleSubmit: any;
}

const arrRating=[
    "5",
    "4.5",
    "4",
    "3.5",
    "3",
    "2.5",
    "2",
    "1.5",
    "1",
    "0.5",
    "0"
];

const arrCategory=[
    "Choose category",
    "scasc",
    "sadasd",
    "asfd",
    "asdasd",
    "das",
];

class FilterForm extends React.Component<IProps>{
    renderDropdown= (props) => {
        const {
            input,
            placeholder,
            icon,
            array,
            ...custom
        } = props;

        const renderIcon =()=>{
            if(icon) {
                return (
                    <img className="dropdown-icon" src={Star}/>
                )
            } else{
                return undefined
            }
        };

        return(
            <FormGroup
                  {...custom}
                {...input}
                controlId="formControlsSelect">
                {renderIcon()}

                <FormControl
                    componentClass="select"
                    placeholder={placeholder}
                >
                {
                    array.map((item,i) => {
                        return(
                            <option key={i} value={item} style={{color: "black"}}>
                                {item}
                            </option>
                        )
                    })
                }
                </FormControl>
            </FormGroup>
        )
    };

    renderTextField =(props)=>{
        const {
            input,
            type,
            text,
            icon,
            ...custom
        } = props;

        const renderIcon =()=>{
            if(icon) {
                return (
                    <img className="input-icon" src={SearchBaground}/>
                )
            } else{
                return undefined
            }
        };

        return(
            <FormGroup
                controlId="formBasicText"
                {...custom}
                {...input}
            >
              <FormControl
                  type={type}
                  placeholder={text}
              />
                {
                    renderIcon()
                }
              <FormControl.Feedback />
            </FormGroup>
        )
    };

  render() {
    const{ handleSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit} className="filter-form-wrapper">
        <Field
            className="filter-form-dropdown"
            name="category"
            placeholder="Choose category"
            component={this.renderDropdown}
            array={arrCategory}
        />
        <Field
            icon
            className="filter-form-searcher"
            name="information"
            component={this.renderTextField}
            text="Search..."

        />
        <div>Rating:</div>
        <Field
            className="filter-form-rating"
            name="rating"
            component={this.renderDropdown}
            array={arrRating}
            icon
        />
        <div>Price:</div>
        <Field
            className="filter-form-start-price"
            name="startPrice"
            type="text"
            component={this.renderTextField}
        />
        <div>-</div>
        <Field
            className="filter-form-end-price"
            name="endPrice"
            component={this.renderTextField}
        />
      </Form>
    )
  }
}

export default reduxForm({
  form: 'FilterForm',
})(FilterForm);
