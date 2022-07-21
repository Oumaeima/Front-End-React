import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";


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

            /**--------------------------- search record -------------------------- */
            const [query, setQuery] = useState("")

            const [posts, setPost] = useState(null);
            useEffect(() => {
                fetch('http://localhost:5000/dossier/getDossierList')
                    .then(response => {
                        console.log(response.ok)
                        if (!response.ok) {
                            throw Error('Can not connect to the server!.');
                        }
                        return response.json();
                    }).then(data => {
                        console.log(data); 
                        setPost(data)
                    }).catch(e => {
                        console.log(e.message);
                    });
            }, []);
    /**---------------------------------- PAGINATION -------------------------------------------- */
    
            const PER_PAGE = 5
            const [currentPage, setCurrentPage] = useState(0)
            const [data, setData] = useState([])
    
            useEffect(()=>{
                fetch('http://localhost:5000/dossier/getDossierList')
                .then((res) => res.json())
                .then((data) => {
                    setData(data)
                })
            }, [])
    
            const hundelPageClick= ({selected : selectedPage}) => {
                console.log("selectedPage", selectedPage)
                setCurrentPage(selectedPage)
            };
    
            const offset = currentPage * PER_PAGE
            const pageCount = Math.ceil(data.length / PER_PAGE)
    
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

    <div className="col-lg-12 side-right stretch-card">
        <div className="card shadow p-5">
            <div className="card-body">
            <div className="wrapper d-block d-sm-flex align-items-center justify-content-between">
                <h4 className="card-title mb-0">Details</h4>
                
                <form className="form-inline my-2 my-lg-0">
                            <input onChange={event => setQuery(event.target.value)}  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
            </div>
            <div className="wrapper">
                <hr />
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info">
               
                <button data-toggle="modal" data-target="#AddDossier" type="button" class="btn btn-inverse-info btn-fw"><i class="icon-plus text-success"></i></button>
                <table style={{marginTop : "15px"}} class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom Societe</th>
                            <th scope="col">Categorie</th>
                            <th scope="col">Type</th>
                            <th scope="col">Matricule</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        
            { data &&
                data.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.nomsociete.toLowerCase().includes(query.toLowerCase()) ) {
                        return post;
                    }
                }).slice(offset, offset+PER_PAGE).map((post, index) => (
                    <tbody>
                                <tr class="bg-blue">
                                <td class="pt-3">{post.idd}</td>
                                <td class="pt-3">{post.nomsociete}</td>
                                <td class="pt-3">{post.categorie}</td>
                                <td class="pt-3">{post.type}</td>
                                <td class="pt-3">{post.matricule}</td>
                                <td>
                                
                                <Link style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="read" className=" mr-2" to={`/dashAdmin/view_dossier/${post.idd}`}>
                                    <i class="icon-user-female text-primary"></i> 
                                </Link>
                                <Link style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="edit" className=" mr-2" to={`/dashAdmin/Edit_Dossier/editID/${post.idd}`}>
                                    <i class=" icon-cursor-move text-success"></i> 
                                </Link>
                                
                                <a style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="delete"
                                    onClick={() =>
                                        
                                        Swal.fire({
                                            title: 'Vous été Sur ?',
                                            text: "Sur Pour supprimer ce dossier : " + post.nomsociete,
                                             icon: 'warning',
                                             showCancelButton: true,
                                                 confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                 confirmButtonText: 'Oui, Supprimer!'
                                            }).then((result) => {
                                                if (result.isConfirmed) 
                                                {
                                                   deleteRecord(post.idd)
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

                ) )
            }

                    </table>

                    <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={hundelPageClick}
                                containerClassName={"pagination"}
                                previousLinkClassName={"pagination__link"}
                                
                                disabledClassName = {"pagination__link--disabled"}
                                activeClassName={"pagination__link--active"}
                                
                        ></ReactPaginate>

                </div>{/* tab content ends */}
               
                
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
