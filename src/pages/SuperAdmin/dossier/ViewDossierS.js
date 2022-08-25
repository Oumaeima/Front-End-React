import React from 'react'
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";

export default function ViewDossierS() {

    const { id } = useParams();

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);
    const[ListeEmail,setListEmail] = useState([]);
    
   const[ListeMat,setListMat] = useState([]);
   

   const [ticket, setTicket] = useState({

    type: "",
    sla: "",
    owner: "",
    datedeb: "",
    dateClos: "",
    taches: "",
    statusINT: "",
    matricule: ""
    
});

const { type, sla , datedeb, dateClos, taches, statusINT } = ticket;
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
    
    useEffect(() => {
        const getEmail = async () => {
            const res = await fetch('http://localhost:5000/ticket/AllEmailTech');
            const getdata = await res.json();
            setListEmail(getdata);
        }
        getEmail();
      }, []);

    // On Page load display all records 
    const loadTicketDetail = async () => {
        // eslint-disable-next-line no-unused-vars
        var response = fetch(`http://localhost:5000/ticket/Ticket_doss/${id}`)
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


    const affectTechnicien = (Id) => {
        axios.put(`http://localhost:5000/ticket/affecteTech/${Id}`)
        .then((result) => {
            loadTicketDetail();
        })
        .catch(() => {
            alert('Error in the Code');
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


    /**--------------------------- ticket part order record -------------------------- */

    const [ticketPO, setTicketPO] = useState({

        nomCommande: "",
        description : "",
        owner : "",
        date : "",
        status : "",
        etatpiece: "",
        trackingNumber: "",
    });
  
    const { nomCommande , description, owner, date, status, etatpiece, trackingNumber } = ticket;
    
    const onInputChangePO = e => {
        setTicketPO({ ...ticket, [e.target.name]: e.target.value });
    };

        // On Page load display all records 
        const loadTicketPODetail = async () => {
            // eslint-disable-next-line no-unused-vars
            var response = fetch(`http://localhost:5000/ticket/ticketD/${id}`)
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    setRecord(myJson);
                });
                
        }
        useEffect(()=>{
            loadTicketPODetail()
        }, [])

        /**--------------------------- search part order record -------------------------- */
     const [queryPO, setQueryPO] = useState("")

     const [postsPO, setPostPO] = useState(null);
     useEffect(() => {
         fetch(`http://localhost:5000/ticket/ticketD/${id}`)
             .then(response => {
                 console.log(response.ok)
                 if (!response.ok) {
                     throw Error('Can not connect to the server!.');
                 }
                 return response.json();
             }).then(dataPO => {
                 console.log(dataPO); 
                 setPostPO(dataPO)
             }).catch(e => {
                 console.log(e.message);
             });
     }, []);
/**---------------------------------- PAGINATION part order -------------------------------------------- */

     const PER_PAGEPO = 5
     const [currentPagePO, setCurrentPagePO] = useState(0)
     const [dataPO, setDataPO] = useState([])

     useEffect(()=>{
         fetch(`http://localhost:5000/ticket/ticketD/${id}`)
         .then((res) => res.json())
         .then((dataPO) => {
             setDataPO(dataPO.response)
         })
     }, [])

     const hundelPageClickPO= ({selected : selectedPagePO}) => {
         console.log("selectedPage", selectedPagePO)
         setCurrentPagePO(selectedPagePO)
     };

     const offsetPO = currentPagePO * PER_PAGEPO
     const pageCountPO = Math.ceil(dataPO.length / PER_PAGEPO)


    /**--------------------------- search intervention record -------------------------- */
     const [query, setQuery] = useState("")

     const [posts, setPost] = useState(null);
     useEffect(() => {
         fetch(`http://localhost:5000/ticket/Ticket_doss/${id}`)
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
/**---------------------------------- PAGINATION intervention -------------------------------------------- */

     const PER_PAGE = 5
     const [currentPage, setCurrentPage] = useState(0)
     const [data, setData] = useState([])

     useEffect(()=>{
         fetch(`http://localhost:5000/ticket/Ticket_doss/${id}`)
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

{/* INFO TICKET INTERVENTION */}  

    <div className="col-lg-12 side-right stretch-card">
        <div className="card shadow p-5">
            <div className="card-body">
            <div className="wrapper d-block d-sm-flex align-items-center justify-content-between">
                <h4 className="card-title mb-0">Ticket Intervention</h4>
                
                <form className="form-inline my-2 my-lg-0">
                            <input onChange={event => setQuery(event.target.value)}  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
            </div>
            <div className="wrapper">
                <hr />
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info">
               
                <div class="table-responsive">
                    <table style={{marginTop : "15px"}} class="table table-hover">
                            <thead className='thead-light'>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">SLA</th>
                                <th className="col-6 col-sm-2">Owner</th>
                                <th class="col-6 col-sm-2">Date-début</th>
                                <th class="col-6 col-sm-2">Date-cloture</th>
                                <th className="col-6 col-sm-2">Tache</th>
                                <th className="col-6 col-sm-2">Status</th>
                                <th className="col-6 col-sm-2">Action</th>
                                </tr>
                            </thead>
                        
                            {data &&
                    data.filter(post => {
                        if (query === '') {
                            return post;
                        } else if (post.taches.toLowerCase().includes(query.toLowerCase()) ) {
                            return post;
                        }
                    }).map((post, index) => (
                        <tbody>
                                    <tr class="bg-blue">
                                    <td class="pt-3">{post.idti}</td>
                                    <td class="pt-3">{post.sla}</td>
                                    <td class="pt-3">{post.owner}</td>
                                    <td class="pt-3">{post.datedeb}</td>
                                    <td class="pt-3">{post.dateClos}</td>
                                    <td class="pt-3">{post.taches}</td>
                                    <td class="pt-3">{post.status}</td>

                                <td>
        
                                    <Link data-toggle="tooltip" data-placement="bottom"title="read" className=" mr-2" to={`/dashSuperAdmin/view_ticketint/${post.idti}`}>
                                    <i class="icon-user-female text-primary"></i> 
                                    </Link>
                                    <Link data-toggle="tooltip" data-placement="bottom" title="edit" className=" mr-2" to={`/dashSuperAdmin/Edit_ticket/${post.idti}`}>
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
                                    ><i class="icon-trash text-danger"></i></a>
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


{/* INFO TICKET PART ORDER */}  

    <div className="col-lg-12 side-right stretch-card">
        <div className="card shadow p-5">
            <div className="card-body">
            <div className="wrapper d-block d-sm-flex align-items-center justify-content-between">
                <h4 className="card-title mb-0">Ticket Part Order</h4>
                
                <form className="form-inline my-2 my-lg-0">
                            <input onChange={event => setQuery(event.target.value)}  className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
            </div>
            <div className="wrapper">
                <hr />
                <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info">
            
                <div class="table-responsive">
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
                    
                        {dataPO &&
                dataPO.filter(postPO => {
                    if (query === '') {
                        return postPO;
                    } else if (postPO.nomCommande.toLowerCase().includes(query.toLowerCase()) ) {
                        return postPO;
                    }
                }).map((postPO, index) => (
                    <tbody>
                                <tr class="bg-blue">
                                <td class="pt-3">{postPO.idti}</td>
                                <td class="pt-3">{postPO.nomCommande}</td>
                                <td class="pt-3">{postPO.description}</td>
                                <td class="pt-3">{postPO.owner}</td>
                                <td class="pt-3">{postPO.trackingNumber}</td>
                                <td class="pt-3">{postPO.status}</td>
                                <td>
                                    <Link data-toggle="tooltip" data-placement="bottom"title="read" className=" mr-2" to={`/dashSuperAdmin/view_ticketPO/${postPO.idti}`}>
                                        <i class="icon-user-female text-primary"></i> 
                                    </Link>
                                    
                                    <a  data-toggle="tooltip" data-placement="bottom" title="delete"
                                        onClick={() =>
                                            
                                            Swal.fire({
                                                title: 'Vous été Sur ?',
                                                text: "Sur Pour supprimer ticket : " + postPO.idti,
                                                icon: 'warning',
                                                showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Oui, Supprimer!'
                                                }).then((result) => {
                                                    if (result.isConfirmed) 
                                                    {
                                                    deleteRecord(postPO.idti)
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

                ) ).slice(offsetPO, offsetPO+PER_PAGEPO)
            }


                    </table>
                </div>
                    <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCountPO}
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

{/* END INFO TICKET PART ORDER */}          


    </>
  )
}
