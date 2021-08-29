import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import pusag from '../assets/PUSAG-Awards-945A28451-scaled.jpg'


export class middle extends Component {
    render() {
        return (
            <div className="middleContainer">
                <div className="middleCenter">
                    <div className='linkAndImage'><div className='middleLink1' src={pusag} alt=""> </div> <Link>Awards and Achievements <i style={{color: 'rgb(238, 184, 4)'}} class="fas fa-chevron-right"></i></Link></div>
                    <div className='linkAndImage'><div className='middleLink2' src="" alt="" > </div> <Link>Academics <i style={{color: 'rgb(238, 184, 4)'}} class="fas fa-chevron-right"></i></Link></div>
                    <div className='linkAndImage'><div className='middleLink3' src="" alt="" > </div> <Link>Research and Project work <i style={{color: 'rgb(238, 184, 4)'}} class="fas fa-chevron-right"></i></Link></div>
                </div>
            </div>
        )
    }
}

export default middle
