import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export default function DashTech() {
  return (
    <>
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
              <a href='dashAdmin/profileA'> <img src="../../images/faces/face10.jpg" alt=""/></a>
               <span className="online-status online"></span>
           </div>
           <div className="profile-name">
               <p className="name">
               Marina Michel
               </p>
               <p className="designation">
               Super Admin
               </p>
           </div>
           </div>
       </li>
       <li className="nav-item">
           <a className="nav-link" href="/dashAdmin">
           <i className="icon-menu menu-icon"></i>
           <span className="menu-title">Dashboard</span>

           </a>
       </li>
      
        <li className="nav-item">
           <a className="nav-link"  href="/dashClient/intervention" >
           <i className="icon-grid menu-icon"></i>
           <span className="menu-title">Ticket d'Intervention</span>
           </a>
           
       </li>
       <li className="nav-item">
           <a className="nav-link" href="pages/apps/todo.html">
           <i className="icon-clock menu-icon"></i>
           <span className="menu-title">Todo List</span>
           </a>
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
</>
  )
}
