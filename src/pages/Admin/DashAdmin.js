import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export default function DashAdmin() {
    

    const id = JSON.parse(localStorage.getItem('id'));
  let history = useNavigate();

  const[record,setRecord]=useState([]);

  const [client, setClient] = useState({
      nom: "",
      prenom: "",
      email: "",
      password: "",
    
  })

  const { nom, prenom,email, password } = client;

  const onInputChange = e => {
      setClient({ ...client, [e.target.name]: e.target.value });
  };

  useEffect(() => {
      loadClient();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadClient = () => {
      fetch(`http://localhost:5000/admin/AllAdmin/${id}`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setClient({
                  id: id,
                  update: true,
                  nom: result.response[0].nom,
                  prenom: result.response[0].prenom,
                  
                  email: result.response[0].email,
                  
                  password: result.response[0].password,

              });
          })
          .catch((error) => console.log("error", error));
  };

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
                  <a href='/dashAdmin/profileA'> <img src="../../images/faces/face10.jpg" alt=""/></a>
                   <span className="online-status online"></span>
               </div>
               <div className="profile-name">
                   <p className="name">
                   {nom} , {prenom}
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
               <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
               <i className="icon-grid menu-icon"></i>
               <span className="menu-title">Administration</span>
               </a>
               <div className="collapse" id="tables">
               <ul className="nav flex-column sub-menu">
                   <li className="nav-item"> <a className="nav-link" href="/dashAdmin/gerer_client">Gestion Client</a></li>
                   <li className="nav-item"> <a className="nav-link" href="/dashAdmin/gerer_employee">Gestion Employer</a></li>
                   <li className="nav-item"> <a className="nav-link" href="/dashAdmin/gerer_dossier">Gestion Dossier</a></li>

               </ul>
               </div>
           </li>
           
           <li className="nav-item">
               <a className="nav-link"  href="index.html" >
               <i className="icon-location-pin menu-icon"></i>
               <span className="menu-title">Traking</span>
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
