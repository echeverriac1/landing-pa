import React from 'react'
import Navbar from './partials/Navbar'
import MobileNavbar from './partials/MobileNavBar'
import Footer from './partials/Footer'
import ModalHelp from './partials/ModalHelp'
import Luna from './partials/Luna'
import Search from './partials/Search'
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
                <Luna />
                <Search />
                <h1>ESTE ES UN EJEMPLO</h1>
                <ModalHelp />
                <Footer />
            </div>
        );
    }
}

