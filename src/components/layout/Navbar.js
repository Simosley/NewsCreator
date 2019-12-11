import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'

const Navbar= (props) =>{
    const  { auth } = props
    //console.log(auth);
    const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />;
    return(
        <nav className="nav-wrapper transparent">
            <div className="container">
                <Link to='/' className="brand-logo bold-nav">News Creator</Link>
                { links }
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => {

    return{
        auth: state.firebase.auth

    }
}

export default connect(mapStateToProps)(Navbar)