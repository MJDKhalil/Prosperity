import React, { useEffect, useState } from 'react';
import './Feed.css';
import MessageSender from './MessageSender';
import StoryReel from './StoryReel';
// import db from './firebase';
import Post from './Post';

function Feed() {

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post 
            profilePic='.\static\images\mk.jpg'
            message='wow this works'
            timestamp='This is a timestamp'
            username='Mkhalilo'
            image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSor6dTb6h6xb3WWt3wQeBjwuV9F2DPNbDIUQ&usqp=CAU'
            />

            <Post />
            <Post />

        </div>
    );
}

export default Feed;
