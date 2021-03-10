import React from 'react'
import { connect } from 'react-redux'

import styled from './style.module.css'

const userList = props => {
    return(
        <div className = {styled.userList}>
            {props.user.map(user => <div className = {styled.user}>
                <img src = {user.avatar} className = {styled.userPhoto}/>
                <span> {user.name} {user.username}</span>
            </div>
            )}
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

export default connect(mapStateToProps)(userList)