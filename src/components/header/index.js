import React from 'react'
import {
    Link
  } from "react-router-dom";

import styled from './style.module.css';

const Header = () =>{
    return (
        <div className ={styled.Header}>
            <div className = {styled.logo}>
                <img src = "https://stickerzone.shop/wp-content/uploads/2018/10/21.png"></img>
            </div>
                <div className={styled.menu}>
                    <Link to="/posts"><span>Posts</span></Link>

                    <Link to="users"><span>Users</span></Link>
                   
                    <Link to="/create-post"><span>Create Post</span></Link>

                    <Link to="add-user"><span>Add user</span></Link>
                   
                </div>   
        </div>
    )
}

export default Header