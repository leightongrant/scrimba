import React from 'react'
import profilePic from '../../assets/images/profile-pic.png'
const ProfilePic = () => {
  return (
    <div>
      <img
        src={profilePic}
        width={317}
        alt="profile pic"
        className="rounded-t-lg"
      />{' '}
    </div>
  )
}

export default ProfilePic
