import *as React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductsListItem from './productsListItem'
import {crudBuilder} from "../../../helpers/httpRequest";
import { SaveProducts } from "../../../actions/actions";

interface IProps{
    SaveProducts?:any
    runtime?:any
}

class ProductsList extends React.Component<IProps>{
    componentDidMount(){
        if(!this.props.runtime.products) {
            this.getAllProducts();
        }
    }

    getAllProducts=async()=>{
        try{
            const response  = await crudBuilder('/items').get();
            this.props.SaveProducts(response.data.items);
        }
        catch (err){
            console.log(err)
        }
    };

    showProducts =()=>{
        if (this.props.runtime.products) {
            return this.props.runtime.products.map((item, i) => {
                return <ProductsListItem item={item} key={i}/>
            })
        } else {
            return(
                <div>Продуктів немає</div>
            )
        }
    };

    render(){
        return(
            <div className="products-list-wrapper">
                {this.showProducts()}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({ SaveProducts, dispatch }, dispatch);
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);

