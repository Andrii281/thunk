import React from 'react'
import Post from '../post'

import { connect } from 'react-redux'

const Posts = props => {
    
    if(props.post.length != 0 ){
        return(
            <div className = 'postBlock'>
                { props.post.map( 
                    (post, key) => 
                        <Post 
                            key = {key} 
                            postData = {post} 
                            author = {props.user[post.userId - 1]}
                        />
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      post: state.post, 
      user: state.user,
      photo: state.photo,
    }
  }
  


export default connect(mapStateToProps)(Posts);