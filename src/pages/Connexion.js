import React from 'react'
import client from '../assets/client.jpg';
import admin from '../assets/admin.png';
import employee from '../assets/employee.png';
import superAdmin from '../assets/superadmin.png';

export default function Connexion() {
  return (
    
    <>
   
   <div className="container">
                <h4 className="mb-3 text-center mt-4">Page Login</h4>
                <div className="row mt-3">
                    <div className="col-sm-3">
                        <div className="box p-3 mb-3 mt-5" style={{ border: "1px solid #d0d0d0" }}>
                            
                                <h5 className="mb-3 "> Admin</h5>
                                <img src={admin} />


                                <a href="loginAdmin">
                                <button type="submit" class="btn btn-primary btn-block mt-4" >Connecter</button>
                            </a>
                           
                        </div>
                        </div>
                        <div className="col-sm-3">
                        <div className="box p-3 mb-3 mt-5" style={{ border: "1px solid #d0d0d0" }}>
                            
                            <h5 className="mb-3 "> Client</h5>
                            <img src={client} />
                            <a href="LoginClient">
                                <button type="submit" class="btn btn-primary btn-block mt-4" >Connecter</button>
                            </a>
                       </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box p-3 mb-3 mt-5" style={{ border: "1px solid #d0d0d0" }}>
                            
                            <h5 className="mb-3 "> Super Admin</h5>
                            <img src={superAdmin} />
                            <a href="LoginSuperAdmin">
                                <button type="submit" className="btn btn-primary btn-block mt-4" >Connecter</button>
                            </a>
                       </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="box p-3 mb-3 mt-5" style={{ border: "1px solid #d0d0d0" }}>
                            
                            <h5 className="mb-3 "> Employe</h5>
                            <img src={employee} />
                            <a href="login">
                                <button type="submit" className="btn btn-primary btn-block mt-4" >Connecter</button>
                            </a>
                              
                            
                       </div>
                    </div>
                    </div>
                    
                    
                    
           </div>
 
    </>

  )
}
