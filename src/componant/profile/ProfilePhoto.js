import React from 'react'
import User1 from '../profile/User1.png'
import User3 from '../profile/User3.png'
export default function ProfilePhoto() {
    return (
        <div className="photo">
            
             <img src= "https://i.insider.com/6079f58b44f454001920739d?width=700" alt="img1" width="400px" height="300px"/> 
             <img className="im1" src= {User3} alt="img2" width="400px" height="300px"/> 
             <img src= {User1} alt="img3" width="400px" height="300px"/> 
        </div>
    )
}
