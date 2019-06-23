import React from 'react'
import Navbar from './partials/navbar'
import MobileNavbar from './partials/mobileNavBar'
import Footer from './partials/footer'
import ModalHelp from './partials/modalHelp'
import '../assets/css/A.css'

export default class landing extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="wrapper" style={{width: "100%"}}>
            <div id="campaignPopupCont"></div>
                <Navbar />
                <MobileNavbar />
                <h1>ESTE ES UN EJEMPLO</h1>
                <ModalHelp />
                <Footer />
            </div>
        );
    }
}

