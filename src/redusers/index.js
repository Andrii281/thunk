import {combineReducers} from 'redux'
import postsReduser from './posts_reduser'
import usersRender from './users_reduser'
import photoRender from './photos_reduser'

export default combineReducers({
    post: postsReduser,
    user: usersRender,
    photo: photoRender,
});