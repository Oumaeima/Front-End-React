import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import avatar from '../../assets/user.png'

export default function DashClient() {
    const id = JSON.parse(localStorage.getItem('id'));
    const [client, setClient] = useState({
        nom: "",
        prenom: "",
        tel: "",
        email: "",
        nomsociete: "",
        activitesociete: "",
        password: ""
      })
    
      const { nom, prenom,email, tel, nomsociete, activitesociete, password } = client;

      const loadClient = () => {
        fetch(`http://localhost:5000/client/AllClient/${id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setClient({
                    id: id,
                    update: true,
                    nom: result[0].nom,
                    prenom: result[0].prenom,
                    tel: result[0].tel,
                    email: result[0].email,
                    nomsociete: result[0].nomsociete,
                    activitesociete: result[0].nomsociete,
                    password: result[0].password,
  
                });
            })
            .catch((error) => console.log("error", error));
    };

    useEffect(()=>{
        loadClient()
    }, [])
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
                  <a href='/dashClient/profile'> <img src={avatar} alt=""/></a>
                   <span className="online-status online"></span>
               </div>
               <div className="profile-name">
                   <p className="name">
                        {nom } {prenom}
                   </p>
                   
               </div>
               </div>
           </li>
           <li className="nav-item">
               <a className="nav-link" href="/dashClient">
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
               <a className="nav-link"  href="/dashClient/partOrder" >
               <i className="icon-location-pin menu-icon"></i>
               <span className="menu-title">Ticket Part Order</span>
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
