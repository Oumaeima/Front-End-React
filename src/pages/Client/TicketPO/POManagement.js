import React from 'react'
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";

export default function POManagement() {
    const id = JSON.parse(localStorage.getItem('id'));
    let navigate = useNavigate()
    const [record, setRecord] = useState([]);
    const [ticket, setTicket] = useState({

        nomCommande: "",
        description : "",
        owner : "",
        date : "",
        status : "",
        etatpiece: "",
        trackingNumber: "",
    });
  
    const { nomCommande , description, owner, date, status, etatpiece, trackingNumber } = ticket;
    
    const onInputChange = e => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };
    


    // On Page load display all records 
    const loadTicketDetail = async () => {
        // eslint-disable-next-line no-unused-vars
        var response = fetch(`http://localhost:5000/ticket/getTicket/${id}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                setRecord(myJson);
            });
            
    }
   
        // Insert ticket 
        const submitTicket = async (e) => {
            e.preventDefault();
            e.target.reset();
            try{
            await axios.post(`http://localhost:5000/ticket/createpartOrder/${id}`, ticket);
            Swal.fire(
                'Good job!',
                'ticket inserted!',
                'success'
              )
              loadTicketDetail()
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

 
    // Delete Employee Record
    const deleteRecord = (ticketId) => {
        
            axios.delete(`http://localhost:5000/ticket/ticketPO/${ticketId}`)
            .then((result) => {
                loadTicketDetail();
            })
            .catch(() => {
                alert('Error in the Code');
            });
    };
    

     /**--------------------------- search record -------------------------- */
     const [query, setQuery] = useState("")

     const [posts, setPost] = useState(null);
     useEffect(() => {
         fetch(`http://localhost:5000/ticket/getTicket/${id}`)
             .then(response => {
                 console.log(response.ok)
                 if (!response.ok) {
                     throw Error('Can not connect to the server!.');
                 }
                 return response.json();
             }).then(data => {
                 console.log(data); 
                 setPost(data.response)
             }).catch(e => {
                 console.log(e.message);
             });
     }, []);
/**---------------------------------- PAGINATION -------------------------------------------- */

     const PER_PAGE = 5
     const [currentPage, setCurrentPage] = useState(0)
     const [data, setData] = useState([])

     useEffect(()=>{
         fetch(`http://localhost:5000/ticket/getTicket/${id}`)
         .then((res) => res.json())
         .then((data) => {
             setData(data.response)
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

{/* INFO TICKET INTERVENTION */}  

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
               
                <button type="button" class="btn btn-inverse-info btn-fw" data-toggle="modal" data-target="#AddTicket"><i class="icon-plus text-success"></i></button>
                
                <div className='table-responsive'>
                <table style={{marginTop : "15px"}} class="table table-hover">
                        <thead className='thead-light'>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nom Commande</th>
                            <th scope="col">Description</th>
                            <th scope="col">Owner</th>
                            <th scope="col">Traking-NB</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                    
                        {data &&
                data.filter(post => {
                    if (query === '') {
                        return post;
                    } else if (post.nomCommande.toLowerCase().includes(query.toLowerCase()) || post.trackingNumber.toLowerCase().includes(query.toLowerCase())) {
                        return post;
                    }
                }).map((post, index) => (
                    <tbody>
                                <tr className="bg-blue">
                                <td className="pt-3">{post.idti}</td>
                                <td className="pt-3">{post.nomCommande}</td>
                                <td className="pt-3">{post.description}</td>
                                <td className="pt-3">{post.owner}</td>
                                <td className="pt-3">{post.trackingNumber}</td>
                                <td className="pt-3">{post.status}</td>
                                <td className='col-2'>
                                    <Link data-toggle="tooltip" data-placement="bottom"title="read" className=" mr-2" to={`/dashClient/view-po/${post.idti}`}>
                                        <i class="icon-user-female text-primary"></i> 
                                    </Link>
                                    <Link data-toggle="tooltip" data-placement="bottom" title="edit" className=" mr-2" to={`/dashClient/edit-po/${post.idti}`}>
                                        <i class=" icon-cursor-move text-success"></i> 
                                    </Link>
                                    
                                    <a  data-toggle="tooltip" data-placement="bottom" title="delete"
                                        onClick={() =>
                                            
                                            Swal.fire({
                                                title: 'Vous été Sur ?',
                                                text: "Sur Pour supprimer ticket : " + post.idti,
                                                icon: 'warning',
                                                showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Oui, Supprimer!'
                                                }).then((result) => {
                                                    if (result.isConfirmed) 
                                                    {
                                                    deleteRecord(post.idti)
                                                    Swal.fire(
                                                            'Supprimer!',
                                                            'ticket a été Supprimer.',
                                                                'success'
                                                            )
                                                            }
                                                            
                                                    })
                                        }
                                    >
                                        <i class="icon-trash text-danger"></i>
                                    </a>
                                </td>
                                
                            </tr>        
                            </tbody>

                ) ).slice(offset, offset+PER_PAGE)
            }


                    </table>
                </div>

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

{/* END INFO TICKET INTERVENTION */}  


{/* POPUP ADD TICKET PART ORDER */}


<div className="modal fade" id="AddTicket" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div  className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Ajouter Ticket Part Order</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                <div className="modal-body">
                    <form onSubmit={submitTicket}>
                        <div className="form-group">
                            <label htmlFor="taches">Nom Commande</label>
                            <input type="text" name="nomCommande" id='taches' onChange={e => onInputChange(e)} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="sla" className="col-form-label">Description:</label>
                            <input id='sla' name='description' onChange={e => onInputChange(e)} type="text" class="form-control"/>           
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


{/* END POPUP ADD TICKET INTERVENTION */}

   
    </>
  )
}
