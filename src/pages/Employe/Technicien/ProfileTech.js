import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import Navbar from '../../Navbar'


export default function ProfileTech() {

  const id = JSON.parse(localStorage.getItem('id'));

  let history = useNavigate();


  const [client, setClient] = useState({
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    password: ""
  })

  const { nom, prenom,email, tel, password } = client;

  const onInputChange = e => {
      setClient({ ...client, [e.target.name]: e.target.value });
  };

  useEffect(() => {
      loadClient();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateClient = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:5000/api/${id}`, client);
      Swal.fire(
        'Good job!',
        'Profile updated!',
        'success'
      )
      history("/dashTech");
  };

  const updateClientPass = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/admin/updatePassAdmin/${id}`, client);
    history("/dashTech");
};

  const loadClient = () => {
      fetch(`http://localhost:5000/api/getUserByID/${id}`, {
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
                  password: result[0].password,

              });
          })
          .catch((error) => console.log("error", error));
  };
  
  return (
    <>
   
    <Navbar></Navbar>

      <div>

        <link rel="stylesheet" href="../../../../vendors/flag-icon-css/css/flag-icon.min.css" />
        <link rel="stylesheet" href="../../../../vendors/mdi/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="../../../../vendors/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../../../../vendors/simple-line-icons/css/simple-line-icons.css" />
        <link rel="stylesheet" href="../../../../vendors/feather/feather.css" />
        <link rel="stylesheet" href="../../../../vendors/css/vendor.bundle.base.css" />
        <link rel="stylesheet" href="../../../../vendors/dropify/dropify.min.css" />
        <link rel="stylesheet" href="../../../../css/vertical-layout-dark/style.css" />
 
      </div>


  
        <div className="content-wrapper">
          <div className="row user-profile">
            
            <div className="col-lg-12 side-right stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper d-block d-sm-flex align-items-center justify-content-between">
                    <h4 className="card-title mb-0">Details</h4>
                    <ul className="nav nav-tabs tab-solid tab-solid-primary mb-0" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-expanded="true">Info</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="security-tab" data-toggle="tab" href="#security" role="tab" aria-controls="security">Security</a>
                      </li>
                    </ul>
                  </div>
                  <div className="wrapper">
                    <hr />
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info">
                        <form onSubmit={updateClient}>
                          <div className="form-group">
                            <label htmlFor="nom">Nom</label>
                            <input  name="nom"
                                    value={nom}
                                    onChange={e => onInputChange(e)} 
                                    type="text" 
                                    className="form-control" 
                                    id="nom" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="prenom">Prénom</label>
                            <input  name="prenom"
                                    value={prenom}
                                    onChange={e => onInputChange(e)} 
                                    type="text" 
                                    className="form-control" 
                                    id="prenom"/>
                          </div>
                          <div className="form-group">
                            <label htmlFor="prenom">Telephone</label>
                            <input  name="tel"
                                    value={tel}
                                    onChange={e => onInputChange(e)} 
                                    type="text" 
                                    className="form-control" 
                                    id="prenom"/>
                          </div>
                          
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input  name="email"
                                    value={email}
                                    onChange={e => onInputChange(e)}
                                    type="email" 
                                    className="form-control" 
                                    id="email"/>
                          </div>
                         
                          <div className="form-group mt-5">
                            <button type="submit" className="btn btn-success col-12">Update</button>
                            
                          </div>
                        </form>
                      </div>{/* tab content ends */}
                      <div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
                        <form onSubmit={updateClientPass}>
                          <div className="form-group">
                            <label htmlFor="change-password">Change password</label>
                            <input type="password" className="form-control" id="change-password" placeholder="Enter you current password" />
                          </div>
                          <div className="form-group">
                            <input  name="password"
                                    onChange={e => onInputChange(e)} 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    placeholder="Enter you new password" />
                          </div>
                          <div className="form-group mt-5">
                            <button type="submit" className="btn btn-success col-12">Update</button>
                           
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
     

    </> 
  )
}
