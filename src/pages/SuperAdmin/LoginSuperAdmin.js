import axios from "axios"
import Swal from 'sweetalert2';

import React, { useState, useEffect } from "react";

export default function LoginSuperAdmin() {

    useEffect(() => {
        const loggedInUser = localStorage.getItem("user");
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setUser(foundUser);
        }
      }, []);

    const [user, setUser] = useState({
        email: "", password: ""
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
    

    
    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
        const res = await axios.post("http://localhost:5000/authentification/loginSuperAdmin", user );

            // set the state of the user
       setUser(res.data);
         // store the user in localStorage
     
        localStorage.setItem("id", JSON.stringify(res.data.data.users.id));
        localStorage.setItem("nom", JSON.stringify(res.data.data.users.nom));
        localStorage.setItem("prenom", JSON.stringify(res.data.data.users.prenom));
       
       if (user) {
                window.location.href = "/dashSuperAdmin"
            } 
          
       }catch (err) {
        Swal.fire({
            title: "Error",
            text: err.response.data.msg,
            icon: "error",
            button: "OK",

        });
    }
}

  return (
    <>
    <link rel="stylesheet" href="../../../../css/vertical-layout-dark/style.css"/>
    <link rel="stylesheet" href="../../../../vendors/flag-icon-css/css/flag-icon.min.css"/>
    <link rel="stylesheet" href="../../../../vendors/mdi/css/materialdesignicons.min.css"/>
    <link rel="stylesheet" href="../../../../vendors/font-awesome/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="../../../../vendors/simple-line-icons/css/simple-line-icons.css"/>
    <link rel="stylesheet" href="../../../../vendors/feather/feather.css"/>
    <link rel="stylesheet" href="../../../../vendors/css/vendor.bundle.base.css"/>
        <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth">
            <div className="row w-100">
                <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                    <div className="brand-logo">
                    <img id="logo" src="assets/img/opm-logo.png" alt="logo" />
                    </div>
                    <h4 id='lets'>Hello! let's get started</h4>
                   
                    <form onSubmit={handleSubmit} className="pt-3">
                    
                        <div className="form-group">
                            <input type="email" 
                            className="form-control form-control-lg" 
                            id="email" 
                            name="email"
                            placeholder="Username"
                            onChange={handleChange}
                            required />
                        </div>
                        <div className="form-group">
                            <input type="password" 
                            className="form-control form-control-lg" 
                            id="password" 
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                            required />
                        </div>
                        <div className="mt-3">
                            <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">SIGN IN</button>
                        </div>
                        <div className="my-2 d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <label className="form-check-label text-muted">
                                    <input  type="checkbox" className="form-check-input" />
                                    Keep me signed in
                                </label>
                            </div>
                            <a href="#" className="auth-link text-black">Forgot password?</a>
                        </div>
                    
                    </form>
                </div>
                </div>
            </div>
            </div>
            {/* content-wrapper ends */}
        </div>
        {/* page-body-wrapper ends */}
        </div>
       

</>
  )
}
