import *as React from 'react';
import {reduxForm, Form, Field, InjectedFormProps} from 'redux-form';
import { FormControl, FormGroup,HelpBlock } from "react-bootstrap";
import IconButton from '@material-ui/core/IconButton';
import { bindActionCreators } from 'redux';

import { SaveFilterCategory } from "../../actions/actions";
import {crudBuilder} from "../../helpers/httpRequest";
import SearchBaground from '../../static/images/searchIcon.png'
import Star from '../../static/images/iconStar.png'

import './filterFormStyles.scss';
import {connect} from "react-redux";

interface IProps extends  InjectedFormProps{
    handleSubmit: any;
    handleChange: any;
    SaveFilterCategory:any
    item: any;
    runtime?:any;
    FilterForm: any;
    form:any;
}

interface IState {
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

class FilterForm extends React.Component<IProps,IState>{

    componentDidMount(){
        this.getCategories();
    }

    getCategories = async()=>{
        try{
            const response =await crudBuilder("/categories").get();
            this.props.SaveFilterCategory(response.data.categories);
            this.props.runtime.filterCategory.unshift({id:0,name: "Chose Category"});
        }catch(err){
            console.log(err);
        }
    };

    renderDropdown= (props) => {
        const {
            input,
            text,
            onChange,
            icon,
            categories,
            defaultValue,
            value,
            ...custom
        } = props;

        const renderIcon =()=>{
            if(icon) {
                return (
                    <img className="dropdown-icon" src={Star} />
                )
            } else{
                return undefined
            }
        };

        if(categories){

            if(this.props.runtime.filterCategory) {
                return <FormGroup
                    {...custom}
                    {...input}
                    controlId="formControlsSelect">
                    {renderIcon()}
                    <FormControl
                        componentClass="select"
                        placeholder={text}
                        onChange={onChange}
                    >
                        {
                            this.props.runtime.filterCategory.map((item, i) => {
                                return (
                                    <option
                                        value={item.id}
                                        className="dropdown-option"
                                        key={i}
                                    >
                                        {item.name}
                                    </option>
                                )
                            })
                        }

                    </FormControl>
                </FormGroup>
            }
            else{
                return(
                <FormGroup
                    {...custom}
                    {...input}
                    controlId="formControlsSelect">
                    {renderIcon()}
                    <FormControl
                        componentClass="select"
                        placeholder={text}
                    >
                        <option
                            value={0}
                            style={{color: "black"}}
                            className="dropdown-option"

                        >
                            Chose Category
                        </option>

                    </FormControl>
                </FormGroup>
                )
            }
         }
        else {
            return (
                <FormGroup
                    {...custom}
                    {...input}
                    controlId="formControlsSelect">
                    {renderIcon()}

                    <FormControl
                        componentClass="select"
                        placeholder={text}

                    >
                        {
                            arrRating.map((item, i) => {
                                return (
                                    <option
                                        value={item}
                                        style={{color: "black"}} key={i}
                                    >
                                        {item}
                                    </option>
                                )
                            })
                        }
                    </FormControl>
                </FormGroup>
            )
        }
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
                    <IconButton type="submit" className="input-icon-btn" >
                        <img
                            className="input-icon"
                            src={SearchBaground}
                        />
                    </IconButton>
                );
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
                {
                    renderIcon()
                }
              <FormControl
                  type={type}
                  placeholder={text}
              />

            </FormGroup>
        )
    };

    render() {
    const{ handleSubmit, handleChange } = this.props;

    console.log("FILTER",this.props);
    return (
      <Form onSubmit={handleSubmit} onChange={handleChange} className="filter-form-wrapper">
        <Field
            className="filter-form-dropdown"
            name="category"
            placeholder="Choose category"
            component={this.renderDropdown}
            categories
        />
        <Field
            icon
            className="filter-form-searcher"
            name="name"
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
            text="0"
            component={this.renderTextField}
        />
        <div>-</div>
        <Field
            className="filter-form-end-price"
            name="endPrice"
            text="0"
            component={this.renderTextField}
        />
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ SaveFilterCategory, dispatch }, dispatch);
};

const FiltersForm = connect(mapStateToProps , mapDispatchToProps)(FilterForm);

export default reduxForm({
  form: 'FilterForm',
})(FiltersForm);
