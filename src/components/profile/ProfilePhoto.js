import React from 'react'
import MaPhoto from "../profile/MaPhoto.jpg"

const ProfilePhoto = () => {
  return (
    <div>
        <img style={{width:350}} src={MaPhoto} alt="photo"/>
    </div>
  )
}

export default ProfilePhoto