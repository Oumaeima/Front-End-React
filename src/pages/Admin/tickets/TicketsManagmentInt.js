import React from 'react'
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function TicketsManagmentInt() {

    let history = useNavigate(); //The useHistory hook gives you access to the history instance that you may use to navigate.
    const { idT } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
    
    const[ListeEmail,setListEmail] = useState([]);
    const [user ,setUser] = useState({
        
        email:""
    })
   
   
    const {email } = user;
   
    const onInputChangeAff = e => {
      setUser({ ...user,[e.target.idti]: e.target.value });
    };
   
   
  useEffect(() => {
    const getEmail = async () => {
        const res = await fetch('http://localhost:5000/ticket/AllEmailTech');
        const getdata = await res.json();
        setListEmail(getdata);
    }
    getEmail();
  }, []);
     
    const onSubmit = async e => {
      e.preventDefault();
      await axios.post(`http://localhost:5000/ticket/affecterTicketTechnciens/${idT}`,user);
    };


/*-------------------------------------------------------------------------------------------*/ 

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);
    
   const[ListeMat,setListMat] = useState([]);
   

    const [ticket, setTicket] = useState({

        sla: "",
        datedeb: "",
        taches: "",
        urgence: "",
        matricule: ""
        
    });

    const { sla, datedeb, taches, urgence,matricule } = ticket;
    const onInputChange = e => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getMatricule = async () => {
            const res = await fetch('http://localhost:5000/dossier/findAllMatricules');
            const getdata = await res.json();
            setListMat(getdata);
        }
        getMatricule();
    }, []);
    


    // On Page load display all records 
    const loadTicketDetail = async () => {
        // eslint-disable-next-line no-unused-vars
        var response = fetch('http://localhost:5000/ticket/AllTicket')
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
    }
    useEffect(() => {
        loadTicketDetail();
    }, []);

    // Insert Employee Records 
    const submitTicket = async (e) => {
        e.preventDefault();
        e.target.reset();
        try{
        await axios.post("http://localhost:5000/ticket/createNewTicket", ticket);
        Swal.fire(
            'Good job!',
            'User inserted!',
            'success'
          )

          loadTicketDetail();
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

 
  const submitTechnicien=async()=>{
     
      
      await axios.post(`http://localhost:5000/ticket/affecterTicketTechnciens`)
      .then((result) => {
        loadTicketDetail();
    })
    .catch(() => {
        alert('Error in the Code');
    });
      
  }
    // Search Records here 
    const searchRecords = () => {
        alert(search)
        axios.get(`http://localhost:5000/ticket/searchRecord/${search}`)
            .then(response => {
                setRecord(response.data);
            });
    };
    // Delete Employee Record
    const deleteRecord = (ticketId) => {
        
            axios.delete(`http://localhost:5000/ticket/ticketINT/${ticketId}`)
            .then((result) => {
                loadTicketDetail();
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
                    <button className="btn"  data-toggle="modal" data-target="#AddDTicket">+ Create new</button>
                    
                    <form style={{paddingBottom : "50px"}} className="form-inline my-2 my-lg-0">
                        
                        <input onChange={(e) => setSearch(e.target.value)}  style={{marginLeft : "850px"}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button onClick={searchRecords} className="btn btn-outline-success my-2 my-sm-0" type="submit" data-bs-dismiss="modal">Search</button>
                    </form>

                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">SLA</th>
                            <th scope="col">Date-début</th>
                            <th scope="col">Tache</th>
                            <th scope="col">Etat</th>
                            <th scope="col">Technicien</th>
                            <th scope="col">Superviseur</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                    
                    {record.map((name) =>
                        <tbody>
                            <tr class="bg-blue">
                                <td class="pt-3">{name.sla}</td>
                                <td class="pt-3">{name.datedeb}</td>
                                <td class="pt-3">{name.taches}</td>
                                <td class="pt-3">{name.urgence}</td>

                                <td class="pt-3">
                                    
                                        <i class="icon-check text-success" data-toggle="modal" data-target="#AffectTech"></i>        
                                    
                                </td>

                                <td class="pt-3" >
                                    <Link className=" mr-2" to={`/Affecter_Sup/editID/${name.idti}`}>
                                        <i class="icon-check text-success"></i>
                                    </Link>
                                </td>

                               <td>
    
                                <Link data-toggle="tooltip" data-placement="bottom"title="read" className=" mr-2" to={`/dashAdmin/view_ticketint/ticketID/${name.idti}`}>
                                <i class="icon-user-female text-primary"></i> 
                                </Link>
                                <Link data-toggle="tooltip" data-placement="bottom" title="edit" className=" mr-2" to={`/dashAdmin/Edit_ticket/editID/${name.idti}`}>
                                    <i class=" icon-cursor-move text-success"></i> 
                                </Link>
                                
                                <a  data-toggle="tooltip" data-placement="bottom" title="delete"
                                    onClick={() =>
                                        
                                        Swal.fire({
                                            title: 'Vous été Sur ?',
                                            text: "Sur Pour supprimer ticket : " + name.idti,
                                             icon: 'warning',
                                             showCancelButton: true,
                                                 confirmButtonColor: '#3085d6',
                                                cancelButtonColor: '#d33',
                                                 confirmButtonText: 'Oui, Supprimer!'
                                            }).then((result) => {
                                                if (result.isConfirmed) 
                                                {
                                                   deleteRecord(name.idti)
                                                 Swal.fire(
                                                        'Supprimer!',
                                                           'ticket a été Supprimer.',
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

        {/* CREATE TICKET POPUP */}   

         <div className="modal fade" id="AddDTicket" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div  className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ajouter Ticket d'Intervention</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                <div className="modal-body">
                    <form onSubmit={submitTicket}>
                    <div className="form-group">
                        <label htmlFor="sla" className="col-form-label">SLA:</label>
                        <input id='sla' name='sla' onChange={e => onInputChange(e)} type="date" class="form-control" placeholder="dd/mm/yyyy"/>           
                    </div>
                    <div className="form-group">
                        <label htmlFor="datefin" className="col-form-label">Date Fin:</label>
                        <input id='datefin' name="datefin" onChange={e => onInputChange(e)} type="date" class="form-control" placeholder="dd/mm/yyyy"/>           
                    </div>
                    <div className="form-group">
                        <label htmlFor="prenom" className="col-form-label">Etat ticket:</label>
                        <select name="urgence" class="form-control" onChange={e => onInputChange(e)}  required>
                            <option value="">---------- Urgence ---------- </option>
                            <option value="Faible">Faible</option>
                            <option value="Moyenne">Moyenne</option>
                            <option value="Haute">Haute</option>
                            <option value="Tres Haute">Trés Haute</option>
                        </select> 
                    </div>

                    <div className="form-group">
                        <label  htmlFor="matricule" className="col-form-label">Matricule:</label>
                                    <select name="matricule" onChange={e => onInputChange(e)} class="form-control" required>
                                        <option value="">---------- Matricule ---------- </option>
                                         {ListeMat.map((res) => (

                                            <option value={res.idd}>{res.matricule}</option>
                                        )
                                        )}
                                    </select> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="taches">Tache demander</label>
                        <textarea name="taches" id='taches' onChange={e => onInputChange(e)} className="form-control"  rows={2} defaultValue={""} />
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label="Close">Quiter</button>
                    <button type="submit" className="btn btn-primary">Crée</button>
                </div>
                    </form>
                </div>
                
                </div>
            </div>
        </div>

        {/* END CREATE TICKET POPUP */}


        {/* AFFECTER TECHNICIEN POPUP */}   

        <div className="modal fade" id="AffectTech" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div  className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Affecter Technicien</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                <div className="modal-body">
                    <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="id" className="col-form-label">Ticket ID</label>
                        <input  
                         name=''
                         onChange={e => onInputChangeAff(e)} 
                         value={user}
                         type="text" class="form-control"/>         
                    </div>
                    
                    
                    <div className="form-group">
                        <label  htmlFor="matricule" className="col-form-label">Matricule:</label>
                        <select name="email" class="form-control" value={email} onChange={e => onInputChange(e)}>
                                    <option value="">---------- Choisir un Email ---------- </option>
                                    {ListeEmail.map ((res)=>(
                                      <option value={res.idti}>{res.email}</option>
                                    ))}
                                    

                                </select>
                    </div>
                   
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" aria-label="Close">Quiter</button>
                    <button type="submit" className="btn btn-primary">Crée</button>
                </div>
                    </form>
                </div>
                
                </div>
            </div>
        </div>

        {/* END AFFECTER TECHNICIEN POPUP */}
    </>
  )
}
