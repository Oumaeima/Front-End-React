import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import ReactPaginate from "react-paginate";

export default function ClientManagment() {

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);

    const [client, setClient] = useState({
        nom: "",
        prenom: "",
        nomsociete: "",
        activitesociete:"",
        tel: "",
        email: "",
        password: ""
    });

      //  Object Destructuring 
      const { nom, prenom, nomsociete,activitesociete, tel, email,  password } = client;
      const onInputChange = e => {
          setClient({ ...client, [e.target.name]: e.target.value });
      };

       // On Page load display all records 
       const loadClientDetail = async () => {
        // eslint-disable-next-line no-unused-vars
        var response = fetch('http://localhost:5000/client/AllClient')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadClientDetail();
    }, []);

    // Search Records here 
    const searchRecords = () => {
        alert(search)
        axios.get(`http://localhost:5000/client/searchRecord/${search}`)
            .then(response => {
                setRecord(response.data);
            });
    };

    // Delete Client Record
    const deleteRecord = (Id) => {
        axios.delete(`http://localhost:5000/client/${Id}`)
            .then((result) => {
                loadClientDetail();
            })
            .catch(() => {
                alert('Error in the Code');
            });
    };

        // Insert Client Records 
    const submitClientRecord = async (e) => {
            e.preventDefault();
            e.target.reset();
            try{
            await axios.post("http://localhost:5000/authentification/createClient", client);
            Swal.fire(
                'Good job!',
                'Client inserted!',
                'success'
              )
    
            loadClientDetail();
            }catch(err){
                Swal.fire({
                    title: "Error",
                    text: err.response.data.msg,
                    icon: "error",
                    button: "OK",
    
                });
    
            }
        };

        /**--------------------------- search record -------------------------- */
        const [query, setQuery] = useState("")

        const [posts, setPost] = useState(null);
        useEffect(() => {
            fetch('http://localhost:5000/client/AllClient')
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

  return (
    <>
        
        <div class="row grid-margin">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <button className="btn"  data-toggle="modal" data-target="#AddClient">+ Create new</button>
                        
                        <form style={{paddingBottom : "50px"}} className="form-inline my-2 my-lg-0">
                            <input onChange={event => setQuery(event.target.value)} style={{marginLeft : "950px"}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">SocieteN</th>
                                <th scope="col">Activite</th>
                                <th scope="col">Tel</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>

            {posts &&
                posts.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.nom.toLowerCase().includes(query.toLowerCase()) || post.prenom.toLowerCase().includes(query.toLowerCase()) ) {
                        return post;
                    }
                }).map((post, index) => (
                    <tbody>
                                <tr class="bg-blue">
                                <td class="pt-3">{post.idclt}</td>
                                    <td class="pt-3">{post.nom} {post.prenom}</td>
                                    <td class="pt-3">{post.nomsociete}</td>
                                    <td class="pt-3">{post.activitesociete}</td>
                                    <td class="pt-3">{post.tel}</td>
                                    <td class="pt-3">{post.email}</td>
                                    <td>
                                
                                <Link style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="edit" className=" mr-2" to={`/dashAdmin/Edit_Client/editID/${post.idclt}`}>
                                    <i class=" icon-cursor-move text-success"></i> 
                                </Link>
                                
                                <a style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="delete"
                                    onClick={() =>
                                            
                                        Swal.fire({
                                            title: 'Vous été Sur ?',
                                            text: "Sur Pour supprimer le Client : " + post.nom,
                                             icon: 'warning',
                                             showCancelButton: true,
                                                 confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                 confirmButtonText: 'Oui, Supprimer!'
                                            }).then((result) => {
                                                if (result.isConfirmed) 
                                                {
                                                   deleteRecord(post.idclt)
                                                 Swal.fire(
                                                        'Supprimer!',
                                                           'Votre Client a été Supprimer.',
                                                              'success'
                                                          )
                                                        }
                                                })
                                    }
                                ><i class="icon-trash text-danger"></i></a>
                               </td>
                                </tr>    
                            </tbody>

                ))
            }

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

            {/* CREATE CLIENT ACCOUNT POPUP */}   

            <div className="modal fade" id="AddClient" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div  className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ajouter Client</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    <div className="modal-body">
                        <form onSubmit={submitClientRecord}>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Nom:</label>
                            <input type="text" className="form-control" id="recipient-name" name="nom" value={nom} onChange={e => onInputChange(e)}  minlength='3'pattern='[a-zA-Z]*' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenom" className="col-form-label">Prenom:</label>
                            <input type="text" className="form-control" id="prenom" name="prenom" value={prenom} onChange={e => onInputChange(e)}  minlength='3'pattern='[a-zA-Z]*'required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="nom-societe" className="col-form-label">Nom Societe:</label>
                            <input type="text" className="form-control" id="nom-societe" name="nomsociete"  onChange={e => onInputChange(e)} minlength='4' pattern='[a-zA-Z]*'required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="activite-social" className="col-form-label">Activite societe:</label>
                            <input type="text" className="form-control" id="activite-social" name="activitesociete"  onChange={e => onInputChange(e)} minlength='4' pattern='[a-zA-Z]*' required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone" className="col-form-label">Telephone:</label>
                            <input type="number" className="form-control" id="telephone" name="tel" value={tel}  onChange={e => onInputChange(e)} minlength='8' required  pattern='[0-9]*'/>
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

            {/* END CREATE CLIENT ACCOUNT POPUP */}

    </>
  )
}
