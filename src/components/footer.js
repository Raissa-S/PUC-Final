import React, { Component } from 'react'
import '../styles/footer.css'

export class footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='footerCenter'>
                    <div className="footerSection"><h6 style={{marginBottom: '20px'}}>ADMISSIONS</h6>

                        <ul style={{display: 'grid', color: 'black',gridRowGap: '40px'}}>
                            <h6>Link</h6>
                            <h6>Link</h6>
                            <h6>Link</h6>
                            <h6>Link</h6>
                        </ul>
                    </div>
                    <div className="footerSection"><h6 style={{marginBottom: '20px'}}>Online Services</h6>

                    <ul style={{display: 'grid', color: 'black', gridRowGap: '40px'}}>
                            <h6>Link</h6>
                            <h6>Link</h6>
                            <h6>Link</h6>
                            <h6>Link</h6>
                        </ul>
                    </div>
                    <div className="footerSection"><h6 style={{marginBottom: '20px'}}>CONTACT</h6>
                    <ul style={{display: 'grid', color: 'black',gridRowGap: '40px'}}>
                            <h6>Link</h6>
                            <h6>Link</h6>
                            <h6>Link</h6>
                            <h6>Link</h6>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer
