import React from 'react'
import Navbar from './partials/navbar'
import Footer from './partials/footer'

export default class landing extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div style={{width: "100%"}}>
                <Navbar />
                <h1>ESTE ES UN EJEMPLO</h1>
                <Footer />
            </div>
        );
    }
}

