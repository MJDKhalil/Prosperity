import React from 'react';
import Header from './Header';
import './Profile.css';
import MessageSender from './MessageSender';
import Sidebar from './Sidebar';
import Post from './Post';


function Profile() {
  return <div className='profile'>
              <Header />
            <div className='profile__body'>
              <Sidebar />   
                  <div className='profile__right'> 
                    <div className='profile__rightTop'> MoMO</div>
                    <div className='profile__rightBottom'>
                        <MessageSender />
                        <Post />
                    </div>
                  </div>
            </div>
          </div>;
}

export default Profile;
