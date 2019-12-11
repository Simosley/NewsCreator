import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks= (props) => {
    const { profileName} = props

    return(
        <ul className="right bold-nav">
            <li><NavLink to ='/create'>Post a new</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
            <li><NavLink to ='/profile' className='btn btn-floating yellow darken-3'>{profileName.initials}</NavLink></li>
        </ul>
    )
}

const mapStateToProps = (state) => {
    return{
        profileName:state.firebase.profile

    }
}
 
const mapDispatchToProps = (dispatch) => {
    return {
        signOut : () => dispatch (signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)