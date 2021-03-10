import React, { useEffect, useState } from 'react'

import styled from './style.module.css';
import { connect } from 'react-redux';
import {addUser} from '../../actions';
import { Link } from 'react-router-dom';

const DEFAULT_PHOTO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsPTi7dzo4I5310OjTH1NlIDeV7nP4IHKFg&usqp=CAU"

function AddUsers(props){

    const [Name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [photoLink, setPhotoLink] = useState('');

    const LoadUser = () => {
        props.addUser({
            firstName: Name, 
            lastName: userName, 
            photo: photoLink,
        })
    }
    

    return (
        <div class = {styled.addUserForm}>
            <input className = {styled.inputForm} 
            value = {Name} 
            placeholder = "Name"
            onChange = {event => setName(name => name = event.target.value)} />

            <input className = {styled.inputForm} 
            value = {userName} 
            placeholder = "User name"
            onChange = {event => setUserName(userName => userName = event.target.value)} />

            <input className = {styled.inputForm} 
            value = {photoLink} 
            placeholder = "Photo link"
            onChange = {event => setPhotoLink(photoLink => photoLink = event.target.value)} />

            <div className = {styled.userPhoto}>
                <img src = {photoLink} alt = {''}></img>
            </div>

            <Link to="/users">
                <button className = {styled.createUsetBtn} 
                onClick = {addUser(Name, userName, photoLink)}>Create User</button>
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
  

export default connect( mapStateToProps, {addUser})(AddUsers);
