import React from 'react'
import { useNavigate } from 'react-router-dom'
import favicon from '../assets/favicon.png'
import prologic from '../assets/prologic.png'


export default function Navbar() {
  
  let history = useNavigate()
  const logout = () =>{
    localStorage.clear()
    history("/connexion")
  }

  return (
  
  <div>
    
    {/* NAVBAR */}

      <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-top justify-content-center">
          <a style={{marginLeft : "0px"}} class="navbar-brand brand-logo" href="index.html"><img src={prologic} alt="logo"/></a>
          <a className="navbar-brand brand-logo-mini" ><img src={favicon} alt="logo"/></a>
        </div>
        <div className="navbar-menu-wrapper d-flex align-items-center">
          <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
            <span className="icon-menu"></span>
          </button> 
         
          <ul className="navbar-nav navbar-nav-right">
            
            <li className="nav-item dropdown">
              <a className="nav-link count-indicator dropdown-toggle" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
                <i className="icon-envelope mx-0"></i>
                <span className="count"></span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
               
                <div className="dropdown-divider"></div>
                <a className="dropdown-item preview-item">
                 
                  <div className="preview-item-content flex-grow">
                    <h6 onClick={logout} className="preview-subject ellipsis font-weight-medium">Logout </h6>
                  </div>
                </a>
                
               
        
              </div>
            </li>
          
          </ul>
          
          <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
            <span className="icon-menu"></span>
          </button>
        </div>
      </nav>

    {/* END NAVBAR */}


 
    
  </div>
   
   
  )
}
