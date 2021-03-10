import axios from 'axios';
import {ADD_POST, ADD_PHOTO, ADD_USER} from '../constans'

export const downloadPosts = data => {
    return{
        type: ADD_POST,
        payload: data,
    }
}

export const addPhoto = photo => {
    return{
        type: ADD_PHOTO,
        payload: {
            photo: photo,
        }
    }
}

export const downloadUsers = data => {
    return{
        type: ADD_USER,
        payload: data,
    }
}

export const getUsers = () => {
    return dispatch => 
      axios
        .get(`http://domer.tech:9999/users/`)
        .then(user => dispatch(downloadUsers(user.data.data)))
        .catch(err_data => console.log('error', err_data))
  }

  export const getPosts = () => {
    return dispatch => 
      axios
        .get(`http://domer.tech:9999/tweets/`)
        .then(posts => dispatch(downloadPosts(posts.data.data)))
        .catch(err_data => console.log('error', err_data))
  }

  export const addUser = (name, username, avatar) => {
      return dispatch => 
        axios
          .post(`http://domer.tech:9999/tweets/`,{
                name: name,
                username: username,
                avatar: avatar,
          })
          .then(() => dispatch(getUsers()))
          .catch(data => console.log('error', data))
  }

  export const addPost = (userId, content, image) => {
    return dispatch => {
      axios
        .post(`http://domer.tech:9999/tweets/`,{
              userId: userId,
              content: content,
              image: image,
        })
        .then(() => dispatch(getPosts()))
        .catch(data => console.log('error', data))

    }
}