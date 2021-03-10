import React, { useState } from 'react'
import {Link} from "react-router-dom";

import { connect } from 'react-redux'
import {addPost} from '../../actions'


import styled from './style.module.css';

function Post(props){
    const [author, setAuthor] = useState(props.user[0])
    const [message, setMessage] = useState('');
    const [PostPhoto , setPostPhot] = useState(props.photo[2])

    console.log('authorrrrr', author)

    return(
        <div className = {styled.post}>
            <div className = {styled.postBody}>
                <div className = {styled.userPhoto}>
                    <img src={author.avatar} alt=" " />
                </div>
                <div className = {styled.block}>
                    <div className = {styled.info}>
                        <div className = {styled.name}>
                            <select  onChange={e => {
                                return setAuthor(author => author = JSON.parse(e.target.value))
                                }}>
                                {props.user.map(user => {;
                                    return <option value={JSON.stringify(user)}>{user.name}  {user.username}</option>
                                }
                            )}
                            </select>
                        </div>
                </div>
                <div className = {styled.message}>
                    <input 
                        className = {styled.inputMessage}
                        value = {message}
                        placeholder = "message"
                        onChange = {e => setMessage(message => message = e.target.value)}
                    />
                </div>
            
                <div className = {styled.postPhoto}>
                    <img src={PostPhoto} alt=" " />
                </div>
            </div>
        </div>
        <Link to="/posts">
                <button class = {styled.CreatePostBtn} onClick = {addPost(author.id, message, PostPhoto)}>Create Post</button>
        </Link>
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
      post: state.post, 
      user: state.user,
      photo: state.photo,
    }
  }

export default connect(mapStateToProps, {addPost})(Post);