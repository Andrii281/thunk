import React, { useState } from 'react'
import styled from './style.module.css'

function Post(props){
    return(
        <div className = {styled.post}>
            <div className = {styled.postBody}>
                <div className = {styled.userPhoto}>
                    <img src={props.author.avatar} alt=" " />
                </div>
                <div className = {styled.block}>
                    <div className = {styled.info}>
                        <div className = {styled.name}>
                            {props.author.name} {props.author.username}
                        </div>
                </div>

                <div className ={styled.message}>
                    {props.postData.content}
                </div>
                
                <div className={styled.postPhoto}>
                    <img src={props.postData.image} alt= " " />
                </div>
            </div>
        </div>
    </div>
    )
}

export default Post;