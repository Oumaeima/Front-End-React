import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

export default function EmployeeManagment() {

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);

    const [user, setUser] = useState({
        nom: "",
        prenom: "",
        poste: "",
        photo:"",
        tel: "",
        email: "",
        password: ""
    });

    //  Object Destructuring 
    const { nom, prenom, poste,photo, tel, email, password } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    // On Page load display all records 
    const loadUserDetail = async () => {
        // eslint-disable-next-line no-unused-vars
        var response = fetch('http://localhost:5000/api/AllUser')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadUserDetail();
    }, []);

    // Insert Employee Records 
    const submitUserRecord = async (e) => {
        e.preventDefault();
        e.target.reset();
        try {
        await axios.post("http://localhost:5000/authentification/createUser", user);
        Swal.fire(
            'Good job!',
            'User inserted!',
            'success'
          )

        loadUserDetail();
        }
            catch (err) {
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
        axios.get(`http://localhost:5000/api/searchUser/${search}`)
            .then(response => {
                setRecord(response.data);
            });
    };

    // Delete Employee Record
    const deleteRecord = (userId) => {
        axios.delete(`http://localhost:5000/api/delete/${userId}`)
            .then((result) => {
                loadUserDetail();
            })
            .catch(() => {
                alert('Error in the Code');
            });
    };


  return (
    <>
    
        <div class="row grid-margin">
                <div class="col-12">
                    <div class="card">
                        <div class="card-body">
                            <button className="btn"  data-toggle="modal" data-target="#AddEmployee">+ Create new</button>
                            
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
                                    <th scope="col">Post</th>
                                    <th scope="col">Tel</th>
                                    <th scope="col">Email</th>
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
                                    <td class="pt-3">{name.idu}</td>
                                        <td class="pt-3">{name.nom}</td>
                                        <td class="pt-3">{name.prenom}</td>
                                        <td class="pt-3">{name.poste}</td>
                                        <td class="pt-3">{name.tel}</td>
                                        <td class="pt-3">{name.email}</td>
                                        <td>
                                
                                <Link style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="edit" className=" mr-2" to={`/dashSuperAdmin/Edit_Dossier/editID/${name.idd}`}>
                                    <i class=" icon-cursor-move text-success"></i> 
                                </Link>
                                
                                <a style={{marginLeft : "8px"}} data-toggle="tooltip" data-placement="bottom" title="delete"
                                    onClick={() =>
                                                
                                        Swal.fire({
                                            title: 'Vous été Sur ?',
                                            text: "Sur Pour supprimer l'utilisateur : " + name.nom,
                                            icon: 'warning',
                                            showCancelButton: true,
                                                confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                confirmButtonText: 'Oui, Supprimer!'
                                            }).then((result) => {
                                                if (result.isConfirmed) 
                                                {
                                                deleteRecord(name.idu)
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


        {/* CREATE EMPLOYEE ACCOUNT POPUP */}   

            <div className="modal fade" id="AddEmployee" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div  className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ajouter Employee</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                            </button>
                        </div>
                    <div className="modal-body">
                        <form onSubmit={submitUserRecord}>
                        <div className="form-group">
                            <label htmlFor="recipient-name" className="col-form-label">Nom:</label>
                            <input type="text" className="form-control" id="recipient-name" name="nom" value={nom} onChange={e => onInputChange(e)}  minlength='3'pattern='[a-zA-Z]*' required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="prenom" className="col-form-label">Prenom:</label>
                            <input type="text" className="form-control" id="prenom" name="prenom" value={prenom} onChange={e => onInputChange(e)}  minlength='3'pattern='[a-zA-Z]*'required/>
                        </div>
                        <div className="form-group">
                            <label  className="col-form-label">Post:</label>
                                <select name="poste" class="form-control" value={poste} onChange={e => onInputChange(e)}>
                                    <option value="">---------- Choisir Poste ---------- </option>
                                    <option value="Technicien">Technicien</option>
                                    <option value="Superviseur">Superviseur</option>
                                    <option value="Commerciale">Commerciale</option>
                                </select>
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Photo:</label>
                            <input type="file" class="form-control" name="photo" value={photo} onChange={e => onInputChange(e)} accept="image/*" multiple />                        </div>
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

        {/* END CREATE EMPLOYEE ACCOUNT POPUP */}
    
    </>
  )
}
