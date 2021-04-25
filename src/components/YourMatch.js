import React from 'react'
import profile1 from '../assets/profile1.png'
import profile2 from '../assets/profile2.png'
import match from '../assets/match.svg'
//renderde when a match has been made
function YourMatch() {
    return (
        <div className="m-container">
            <div className="your-match-container">
                <div className="card-1">
                    <div className="img-container">
                        <img src={profile1} alt=""/>
                    </div>
                    <div className="profile-desc">
                        <p>Jannelle</p>
                        <p>Seeking Mentors in Design</p>
                    </div>
                </div>
                <div className="match-found-container">
                    <img src={match} alt="handshake-image"/>
                    <p>It's a match</p>
                </div>
                <div className="card-2">
                    <div className="img-container">
                            <img src={profile2} alt=""/>
                    </div>
                    <div className="profile-desc">
                        <p>Rachel Jackson</p>
                        <p>Designer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YourMatch
