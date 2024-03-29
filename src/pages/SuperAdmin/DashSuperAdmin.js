import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Outlet } from 'react-router-dom'
import avatar from '../../assets/user.png'
import Login from '../Login'


export default function DashSuperAdmin() {

    const nom = JSON.parse(localStorage.getItem('nom'));
    const prenom = JSON.parse(localStorage.getItem('prenom'));

    const [authenticated, setauthenticated] = useState(null);
    useEffect(() => {
        const loggedInUser = localStorage.getItem("authenticated");
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            setauthenticated(foundUser);
        }
      }, []);

    if (!authenticated) {
        return <Login/>;
    } else {
        return (
            <>
        
                <Navbar></Navbar>
                
            
                <div>
                <link rel="stylesheet" href="../../vendors/flag-icon-css/css/flag-icon.min.css" />
                <link rel="stylesheet" href="../../vendors/mdi/css/materialdesignicons.min.css" />
                <link rel="stylesheet" href="../../vendors/font-awesome/css/font-awesome.min.css" />
                <link rel="stylesheet" href="../../vendors/simple-line-icons/css/simple-line-icons.css" />
                <link rel="stylesheet" href="../../vendors/feather/feather.css" />
                <link rel="stylesheet" href="../../vendors/css/vendor.bundle.base.css" />
                <link rel="stylesheet" href="../../vendors/font-awesome/css/font-awesome.min.css" />
                <link rel="stylesheet" href="../../vendors/jquery-bar-rating/fontawesome-stars.css" />
                <link rel="stylesheet" href="../../css/vertical-layout-dark/style.css" />

                </div>

                <div class="container-fluid page-body-wrapper">


                        <nav className="sidebar sidebar-offcanvas" id="sidebar">
                            <ul className="nav">
                                <li className="nav-item nav-profile">
                                    <div className="nav-link">
                                    <div className="profile-image">
                                    <a href='dashSuperAdmin/profile'> <img src={avatar} alt=""/></a>
                                        <span className="online-status online"></span>
                                    </div>
                                    <div className="profile-name">
                                        <p className="name">
                                        {nom} {prenom}
                                        </p>
                                        
                                    </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/dashSuperAdmin">
                                    <i className="icon-menu menu-icon"></i>
                                    <span className="menu-title">Dashboard</span>

                                    </a>
                                </li>
                            
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                                    <i className="icon-grid menu-icon"></i>
                                    <span className="menu-title">Administration</span>
                                    </a>
                                    <div className="collapse" id="tables">
                                    <ul className="nav flex-column sub-menu">
                                        <li className="nav-item"> <a className="nav-link" href="/dashSuperAdmin/admin">Gestion Admin</a></li>
                                        <li className="nav-item"> <a className="nav-link" href="/dashSuperAdmin/clients">Gestion Client</a></li>
                                        <li className="nav-item"> <a className="nav-link" href="/dashSuperAdmin/techniciens">Gestion Technicen</a></li>
                                        <li className="nav-item"> <a className="nav-link" href="/dashSuperAdmin/dossiers">Gestion Dossier</a></li>
                                        <li className="nav-item"> <a className="nav-link" href="/dashSuperAdmin/commercials">Gestion Commercial</a></li>
                                    </ul>
                                    </div>
                                </li>
                            
                            </ul>
                        </nav>

                            {/* partial */}

                        
                    <div className="main-panel">
                        <div className="content-wrapper">
                        <Outlet></Outlet>
                        </div>
                    
                    <Footer></Footer>
                    </div>

                </div>

            </>
        
        )
    }
}
