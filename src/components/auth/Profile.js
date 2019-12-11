import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'
import { Redirect } from 'react-router-dom'

class Profile extends Component {
    render() {
        const { name,email,profileImage ,auth,profile,news,userId} =this.props
        if (!auth.uid) return <Redirect to ='/signin' />
        const userNews = news.filter(aNew => aNew.authorId ===userId);
        return (
        <div className="card-karta">
            <div className="card-glava">
                <img src={profileImage}/>
            </div>
            <div className="card-info">
                <h1 className="center-align">Personal Information</h1>
                <p>Name: {name.firstName} {name.lastName}</p>
                <p>Email: {email}</p>
                <p>Title: News director</p>
            </div>
            <div className="card-bot">
                <p>Liked news - {profile.newsLiked.length}</p>
                <p>Posted news - {userNews.length}</p>
            </div>
        </div>
            
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    
    return {
    
      name:state.firebase.profile,
      auth: state.firebase.auth,
      email:state.firebase.auth.email,
      profileImage: state.firebase.profile.photoUrl,
      profile:state.firebase.profile,
      news:state.firestore.ordered.projects,
      userId:state.firebase.auth.uid
    }
}


export default connect(mapStateToProps)(Profile)

