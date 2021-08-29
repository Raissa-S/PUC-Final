import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

export class navbar extends Component {
    render() {
        return (
            <div className="navContainer">
                <div className="topNav">
                    <div>
                        <Link to="/courseRegistration">Course Registration</Link>

                        <Link to ="/about">About</Link>
                        <Link to ="/contact">Contact us</Link>
                    </div>
                        

                </div>

                <div className="middleNav">
                     <div class="input-group mb-3 cn">
                        <input type="text" class="form-control cni" placeholder="search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary cnb" type="button"><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>

                <div className="bottomNav">
                    <div className='logo'>

                    </div>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/admission">Admission</Link>
                        <Link className="faculties">
                            Faculties and Departments
                            <div>
                                <Link className='facultiesAnnex' >Faculty of Business Administration 
                                    <div>
                                        <a href="">Accounting and Finance</a>
                                        <a href="">Department of Economics, Marketing and Services</a>
                                        <a href="">Department of Management</a>
                                    </div>
                                </Link>  
                                <Link className='facultiesAnnex2' href="#">Faculty of Engineering Science and Computing
                                    <div>
                                        <a href="">Department of Information Technology</a>
                                        <a href="">Department of Built Environment</a>
                                    </div>
                                </Link>
                                <Link className="facultiesAnnex3" href="#">School of Theology, Mission and Leadership
                                      <div>
                                        <a href="">Department of Theology</a>
                                        <a href="">Department of Mission</a>
                                        <a href="">Department of Leadership</a>
                                        <a href="">Centre for Ministerial Formation</a>
                                      </div>
                                </Link>
                                <Link className="facultiesAnnex4" href="#"> Faculty of Health and Allied Sciences
                                <div>
                                        <a href="">Department of Nursing and Midwifery</a>
                                        <a href="">Department of Physician Assistantship</a>
                                      </div>
                                </Link>

                            </div>
                        </Link>
                        <Link to="programmes">Undergraduate Programmes</Link>
                      
                        <Link to='postgraduate'>Post-graduate School</Link>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default navbar
