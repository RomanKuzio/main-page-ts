import * as React from 'react';
import Header from '../../component/header'
import Footer from '../../component/footer'
import LoginIn from "./loginIn/index";
import SingIn from "./singIn/index";

import './registrationStyles.scss';

export default class Registration extends React.Component {
     render(){
         return(
             <div className="registration-wrapper">
                 <Header/>
                 <div className="center-wrapper">
                     <LoginIn/>
                     <SingIn/>
                 </div>
                 <Footer/>
             </div>
         );
     }
}


