import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function DossierManagment() {

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);

    const [ListeSociete, setListNomsociete] = useState([]);
  
   

    const [dossier, setDossier] = useState({
        nomsociete: "",
        categorie: "",
        type: "",
        matricule:""
       
    

    });
    const { nomsociete,  categorie, type,matricule } = dossier;
    const onInputChange = e => {
        setDossier({ ...dossier, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getNomsociete = async () => {
            const res = await fetch('http://localhost:5000/client/AllnomSociete');

            const getdata = await res.json();
            setListNomsociete(getdata);
        }
        getNomsociete();
    }, []);

    


    // On Page load display all records 
    const loadDossierDetail = async () => {
        // eslint-disable-next-line no-unused-vars
        var response = fetch('http://localhost:5000/dossier/getDossierList')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadDossierDetail();
    }, []);

    // Insert Employee Records 
    const submitDossier = async (e) => {
        e.preventDefault();
        e.target.reset();
        try{
        await axios.post("http://localhost:5000/dossier/createNewDossier", dossier);
        Swal.fire(
            'Good job!',
            'Dossier Crer!',
            'success'
        )

        loadDossierDetail();
    }catch(err){
        Swal.fire({
            title: "Error",
            text: err.response.data.msg,
            icon: "error",
            button: "OK",

        });

    }
    };

    // Search Records here 
    const searchRecords = () => {
        alert(search)
        axios.get(`http://localhost:5000/dossier/searchRecord/${search}`)
            .then(response => {
                setRecord(response.data);
            });
    };
    // Delete Employee Record
    const deleteRecord = (dossierId) => {
        axios.delete(`http://localhost:5000/dossier/${dossierId}`)
            .then((result) => {
                loadDossierDetail();
            })
            .catch(() => {
                alert('Error in the Code');
            });
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

                    <button className="btn"  data-toggle="modal" data-target="#AddDossier">+ Create new</button>
                    
                    <form style={{paddingBottom : "50px"}} className="form-inline my-2 my-lg-0">
                        
                        <input onChange={(e) => setSearch(e.target.value)} style={{marginLeft : "850px"}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={searchRecords} className="btn btn-outline-success my-2 my-sm-0" type="submit" data-bs-dismiss="modal">Search</button>
                    </form>

                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Nom Societe</th>
                            <th scope="col">Categorie</th>
                            <th scope="col">Type</th>
                            <th scope="col">Matricule</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
{/*                             <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Oumaima abidi</td>
                                <td>Varmeg</td>
                                <td>Commerce</td>
                                <td>97894763</td>
                                <td>oumaabidi40@gmail.com</td>
                                <td>
                                    <button type="button" class="btn  btn-primary"><i class="icon-cursor-move"></i></button>
                                    <button style={{marginLeft : "5px"}} type="button" class="btn  btn-danger"><i class=" icon-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                                <td>Oumaima abidi</td>
                                <td>Varmeg</td>
                                <td>Commerce</td>
                                <td>97894763</td>
                                <td>oumaabidi40@gmail.com</td>
                                <td>
                                    <button type="button" class="btn  btn-primary"><i class="icon-cursor-move"></i></button>
                                    <button style={{marginLeft : "5px"}} type="button" class="btn  btn-danger"><i class=" icon-trash"></i></button>
                                </td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                                <td>Oumaima abidi</td>
                                <td>Varmeg</td>
                                <td>Commerce</td>
                                <td>97894763</td>
                                <td>oumaabidi40@gmail.com</td>
                                <td>
                                    <button type="button" class="btn  btn-primary"><i class="icon-cursor-move"></i></button>
                                    <button style={{marginLeft : "5px"}} type="button" class="btn  btn-danger"><i class=" icon-trash"></i></button>
                                </td>
                            </tr>

                            

                        </tbody> */}


                    {record.map((name) =>
                        <tbody>
                            <tr class="bg-blue">
                                <td class="pt-3">{name.nomsociete}</td>
                                <td class="pt-3">{name.categorie}</td>
                                <td class="pt-3">{name.type}</td>
                                <td class="pt-3">{name.matricule}</td>
                                <td>
                                
                                <Link style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="edit" className=" mr-2" to={`/dashAdmin/Edit_Dossier/editID/${name.idd}`}>
                                    <i class=" icon-cursor-move text-success"></i> 
                                </Link>
                                
                                <a style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="delete"
                                    onClick={() =>
                                        
                                        Swal.fire({
                                            title: 'Vous été Sur ?',
                                            text: "Sur Pour supprimer ce dossier : " + name.nomsociete,
                                             icon: 'warning',
                                             showCancelButton: true,
                                                 confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                 confirmButtonText: 'Oui, Supprimer!'
                                            }).then((result) => {
                                                if (result.isConfirmed) 
                                                {
                                                   deleteRecord(name.idd)
                                                 Swal.fire(
                                                        'Supprimer!',
                                                           'Dossier a été Supprimer.',
                                                              'success'
                                                          )
                                                        }
                                                })
                                    }
                                ><i class="icon-trash text-danger"></i></a>
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

         <div className="modal fade" id="AddDossier" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div  className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ajouter Dossier</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                <div className="modal-body">
                    <form onSubmit={submitDossier}>
                    <div className="form-group">
                        <label htmlFor="recipient-name" className="col-form-label">Nom:</label>
                                    <select name="nomsociete" class="form-control"  value={nomsociete} onChange={e => onInputChange(e)} required>
                                        <option value="">---------- Société ---------- </option>
                                        {ListeSociete.map((res) => (

                                            <option value={res.idclt}>{res.nomsociete}</option>
                                        )
                                        )}
                                    </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom" className="col-form-label">Categorie:</label>
                                    <select name="categorie" class="form-control"  value={categorie} onChange={e => onInputChange(e)} required>
                                        <option value="">---------- Choisir categorie ---------- </option>
                                        <option value="offshore">offshore</option>
                                        <option value="nearshore">nearshore</option>
                                        <option value="onshore">onshore</option>

                                    </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="col-form-label">Type:</label>
                                    <select name="type" class="form-control"  value={type} onChange={e => onInputChange(e)} required>
                                        <option value="">---------- Choisir un type ---------- </option>
                                        <option value="en régi"> en régi</option>
                                        <option value="avec des intervention régulières">avec des intervention régulières</option>
                                    </select> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="matricule" className="col-form-label">Matricule:</label>
                        <input id='matricule' type="text" class="form-control" name="matricule" value={matricule} onChange={e => onInputChange(e)}  minlength='3'pattern='[a-zA-Z0-9]*'required/>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label="Close">Quiter</button>
                    <button type="submit" className="btn btn-primary">Valider</button>
                </div>
                </div>
            </div>
        </div>

        {/* END CREATE ADMIN ACCOUNT POPUP */}
    </>
  )
}
