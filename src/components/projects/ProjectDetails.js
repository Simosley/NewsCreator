import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect} from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import LikeButton from './likeButton'
import { likeNew } from '../../store/actions/authActions'
const ProjectDetails = (props) => {
    const  { project,auth,profile,likeNew } = props;
    console.log("props" ,props)
    if (!auth.uid) return <Redirect to ='/signin' />
    const currentnewId = props.history.location.pathname.toString().split('/')[2];
    const isLiked = profile.newsLiked.includes(currentnewId);

    const handleLike = (e) => {
        e.preventDefault();
        likeNew(currentnewId);
    }


    if(project){
        return(
        <div className="container section project-details">
            <div className="card z-depth-0 ">
                <div className="card-content">
                    <span className="card-title2">{ project.title }</span>
                    <i className="medium material-icons hoverable right" onClick={handleLike}>{isLiked ? 'favorite' : 'favorite_border'}</i>
                    <p className="right"> Like/Dislike: </p>
                    <p>{ project.content }</p>
                    <p><img className="New-Photo" src={props.project.photoPost}/></p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    
                    <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                    <div>{moment(project.createdAt.toDate()).calendar()}</div>
                </div>
            </div>
        </div>
        )
    } else{
        return (
            <div className="containter center">
                <p>Loading project...</p>
            </div>
            )
    }
    
    
}
const mapStateToProps = (state, ownProps) => {
   // console.log(state);
    
    const id = ownProps.match.params.id
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null
    return{
        project: project,
        auth: state.firebase.auth,
        profile:state.firebase.profile

    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        likeNew: (newId) => dispatch(likeNew(newId))
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails)
