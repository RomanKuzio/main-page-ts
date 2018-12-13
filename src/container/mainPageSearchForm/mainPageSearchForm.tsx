import * as React from 'react';
import {reduxForm, Form, Field, InjectedFormProps} from 'redux-form';
import {  Button, DropdownButton, MenuItem, FormGroup, FormControl   } from 'react-bootstrap';
import {crudBuilder} from '../../helpers/httpRequest'
import {Link} from "react-router-dom";
import { bindActionCreators } from 'redux';
import { SaveMainPageCategory } from "../../actions/actions";
import {connect} from "react-redux";

interface IProps extends InjectedFormProps{
    handleSubmit: any;
    SaveMainPageCategory: any;
    runtime:any;
    anyTouched:any;
}

interface IState {
}

class MainPageSearchProductForm extends React.Component<IProps,IState>{
    componentDidMount(){
        this.getCategories();
    }

    getCategories = async()=>{
        try{
            const response =await crudBuilder("/categories").get();
            this.props.SaveMainPageCategory(response.data.categories);
            this.props.runtime.mainPageCategory.unshift({id:0,name: "Category"});
        }catch(err){
            console.log(err);
        }
    };

    renderDropdown= (props) => {
        const {
            input,
            placeholder,
            ...custom
        } = props;

        if (this.props.runtime.mainPageCategory) {
            return (
                <FormGroup
                    {...custom}
                    {...input}
                    controlId="formControlsSelect"
                    className="dropdown"
                >
                    <FormControl
                        {...custom}
                        {...input}
                        componentClass="select"
                        placeholder={placeholder}

                    >
                        {
                            this.props.runtime.mainPageCategory.map((item,i) => {
                                return (
                                    <option
                                        value={item.id}
                                        key={i}
                                    >
                                        {item.name}
                                    </option>
                                )
                            })
                        }
                    </FormControl>
                </FormGroup>
            )
        }else{
            return(
                <FormGroup
                    {...custom}
                    {...input}
                    controlId="formControlsSelect"
                    className="dropdown"
                >
                    <FormControl
                        {...custom}
                        {...input}
                        componentClass="select"
                        placeholder={placeholder}

                    >
                        <option>
                            Category
                        </option>
                    </FormControl>
                </FormGroup>
            )
        }
    };

    renderTextField =(props)=>{
        const {
            input,
            type,
            ...custom
        } = props;

        return(
            <FormControl
                {...custom}
                {...input}
                type={type}
            />

        )
    };
    render() {
        const{
            handleSubmit
        }=this.props;
        console.log(this.props.anyTouched);
        return (
            <Form onSubmit={handleSubmit}  className="search-form">
                <div className="search-form-wrapper">
                    <Field
                        className="input"
                        name="category"
                        type="text"
                        component={this.renderDropdown}
                    />
                    <Field
                        className="input"
                        name="name"
                        type="text"
                        component={this.renderTextField}
                    />
                    <Button type="submit" className="submit-btn">
                        <div>START SEARCHING</div>
                    </Button>

                </div>
            </Form>
        )
    }
}

const mapStateToProps=(state)=>{
  return state
};

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ SaveMainPageCategory, dispatch }, dispatch);
};

const MainPageSearchForm = connect(mapStateToProps,mapDispatchToProps)(MainPageSearchProductForm);

export default reduxForm({
    form: 'mainPageSearchForm',
})(MainPageSearchForm)
