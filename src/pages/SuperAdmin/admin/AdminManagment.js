import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export default function AdminManagment() {

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);
   

    const [admin, setAdmin] = useState({
        nom:"",
        prenom:"",
        email: "",
        password: "" 
    });

    //  Object Destructuring 
    const {nom,prenom,email, password } = admin;

    const onInputChange = e => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    // On Page load display all records 
    const loadAdminDetail = async () => {
        // eslint-disable-next-line no-unused-vars
        var response = fetch('http://localhost:5000/admin/AllAdmin')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadAdminDetail();
    }, []);

        // Search Records here 
        const searchRecords = () => {
            alert(search)
            axios.get(`http://localhost:5000/admin/searchad/${search}`)
                .then(response => {
                    setRecord(response.data);
                });
        };
    
        // Delete Admin Record
        const deleteRecord = (adminId) => {
            axios.delete(`http://localhost:5000/admin/${adminId}`)
                .then((result) => {
                    loadAdminDetail();
                })
                .catch(() => {
                    alert('Error in the Code');
                });
        };

            // Insert Admin Records 
    const submitAdminRecord = async (e) => {
        e.preventDefault();
        e.target.reset();
        await axios.post("http://localhost:5000/authentification/createAdmin", admin);
        alert('Data Inserted');

        loadAdminDetail();
    };

  return (
    <>
        
        <div>
            {/* plugins:css */}
            <link rel="stylesheet" href="../../../../vendors/flag-icon-css/css/flag-icon.min.css" />
            <link rel="stylesheet" href="../../../../vendors/mdi/css/materialdesignicons.min.css" />
            <link rel="stylesheet" href="../../../../vendors/font-awesome/css/font-awesome.min.css" />
            <link rel="stylesheet" href="../../../../vendors/simple-line-icons/css/simple-line-icons.css" />
            <link rel="stylesheet" href="../../../../vendors/feather/feather.css" />
            <link rel="stylesheet" href="../../../../vendors/css/vendor.bundle.base.css" />
            {/* endinject */}
            {/* plugin css for this page */}
            <link rel="stylesheet" href="../../../../vendors/datatables.net-bs4/dataTables.bootstrap4.css" />
        </div>

        <div class="row grid-margin">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">

                        <button className="btn"  data-toggle="modal" data-target="#AddAdmin">+ Create new</button>
                        
                        <form style={{paddingBottom : "50px"}} className="form-inline my-2 my-lg-0">
                            
                            <input onChange={(e) => setSearch(e.target.value)} style={{marginLeft : "850px"}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={searchRecords} className="btn btn-outline-success my-2 my-sm-0" type="submit" data-bs-dismiss="modal">Search</button>
                        </form>

                        <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">FirstName</th>
                                <th scope="col">LastName</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>


                        {record.map((name) =>
                            <tbody>
                                <tr class="bg-blue">
                                    <td class="pt-3">{name.ida}</td>
                                    <td class="pt-3">{name.nom}</td>
                                    <td class="pt-3">{name.prenom}</td>
                                    <td class="pt-3">{name.email}</td>
                                    <td>
                                        <button type="button" class="btn  btn-primary"><i class="icon-cursor-move"></i></button>
                                        <button style={{marginLeft : "5px"}} type="button" class="btn  btn-danger"
                                             onClick={() =>
                                            
                                                Swal.fire({
                                                    title: 'Vous été Sur ?',
                                                    text: "Sur Pour supprimer l'admin : " + name.nom,
                                                     icon: 'warning',
                                                     showCancelButton: true,
                                                         confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                         confirmButtonText: 'Oui, Supprimer!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) 
                                                        {
                                                           deleteRecord(name.ida)
                                                         Swal.fire(
                                                                'Supprimer!',
                                                                   'Votre admin a été Supprimer.',
                                                                      'success'
                                                                  )
                                                                }
                                                        })
                                            }
                                        ><i class=" icon-trash"></i></button>
                                    </td>
                                </tr>    
                            </tbody>
                        )}

                        </table>

                        <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <nav>
                                    <ul className="pagination rounded-flat pagination-success">
                                        <li className="page-item"><a className="page-link" href="#"><i className="mdi mdi-chevron-left" /></a></li>
                                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                                        <li className="page-item"><a className="page-link" href="#"><i className="mdi mdi-chevron-right" /></a></li>
                                    </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>

            {/* CREATE ADMIN ACCOUNT POPUP */}   

             <div className="modal fade" id="AddAdmin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div  className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ajouter Client</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    <div className="modal-body">
                        <form onSubmit={submitAdminRecord}>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Nom:</label>
                            <input type="text" className="form-control" id="recipient-name" name="nom" value={nom} onChange={e => onInputChange(e)}  minlength='3'pattern='[a-zA-Z]*' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenom" className="col-form-label">Prenom:</label>
                            <input type="text" className="form-control" id="prenom" name="prenom" value={prenom} onChange={e => onInputChange(e)}  minlength='3'pattern='[a-zA-Z]*'required/>
                        </div>
 
                        <div className="form-group">
                            <label htmlFor="email" className="col-form-label">Email:</label>
                            <input type="email" className="form-control" id="email" name="email" value={email} onChange={e => onInputChange(e)} required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" className="col-form-label">Password:</label>
                            <input required type="password" className="form-control" id="password" name="password" value={password} onChange={e => onInputChange(e)} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label="Close">Quiter</button>
                            <button type="submit" className="btn btn-primary">Valider</button>
                        </div>
                        </form>
                    </div>
                    
                    </div>
                </div>
            </div>

            {/* END CREATE ADMIN ACCOUNT POPUP */}
    </>

  )
}
