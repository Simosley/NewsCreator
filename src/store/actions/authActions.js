export const signIn = (credentials) => {
    return(dispatch , getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch,getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: ' SIGNOUT_SUCCESS'})
        })

    }
}

export const signUp = (newUser) => {
    return ( dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then( resp => {
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0],
                photoUrl: newUser.photoUrl,
                newsLiked: []
            })

        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({type : 'SIGNUP_ERROR', err})
        })
    }
}
export const likeNew = (newsId) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const personId = getState().firebase.auth.uid;
        var personsLikedNews;
        personsLikedNews = profile.newsLiked.length > 0 ? 
                      JSON.parse(JSON.stringify(profile.newsLiked)) :
                      personsLikedNews = [];

        // newsId - current newsId
        // personsLikedNews - all event the person is participating
        if(personsLikedNews.includes(newsId)) {
          personsLikedNews = personsLikedNews.filter(aNew => aNew !== newsId)
        } else {
          personsLikedNews.push(newsId);
        }

        firestore.collection('users').doc(`${personId}`).set({
            ...profile,
            newsLiked: personsLikedNews
        }).then(() => {
            dispatch({ type: "LIKE_NEW" });
        }).catch((err) => {
            dispatch({ type: "LIKE_NEW_ERROR", err});
        });
    }
};