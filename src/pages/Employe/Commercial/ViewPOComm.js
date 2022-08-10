import React, { useState ,useEffect, useRef} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {  useNavigate, useParams } from "react-router-dom";
import style from './style.css'

export default function ViewPOComm() {
 
     let history = useNavigate();
     const { id } = useParams();
     const idC = JSON.parse(localStorage.getItem('id'));
     const[signature,setSignature] = useState([]);
     const[ListeEmail,setListEmail] = useState([]);
     const [Tache,setTache]=useState({
         tache:""
     })
     
     const [ticket, setTicket] = useState({
 
        nomCommande: "",
        description : "",
        owner : "",
        date : "",
        status : "",
        etatpiece: "",
        trackingNumber: "",
        commercial: "",
        offre: "",
     });
     //  Object Destructuring 
     const { nomCommande ,description, owner, date, status, etatpiece, trackingNumber, commercial} = ticket;
     const {offre}=ticket;
     const onInputChange = e => {
         setTicket({ ...ticket, [e.target.name]: e.target.value });
     };
   
 
       useEffect(() =>{
         loadUser();
       },[]);
 
       const loadUser =  () => {
         fetch(`http://localhost:5000/ticket/AllTicketPO/${id}`,{
             method: "GET",
           })
            .then((response) => response.json())
              .then((result) => {
                 console.log(result);
         setTicket({
                     id: id,
                     update: true,
                     nomCommande: result.response[0].nomCommande,
                     description: result.response[0].description,
                     owner: result.response[0].owner,
                     date: result.response[0].date,
                     etatpiece : result.response[0].etatpiece,
                     status: result.response[0].status,
                     trackingNumber: result.response[0].trackingNumber,
                     commercial: result.response[0].commercial,
                     offre: result.response[0].offre,
                 });
             })
             .catch((error) => console.log("error", error));
             
   };


const updateState1 = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/ticket/updateEtatTicket/${id}`,ticket);
    Swal.fire(
        'Good job!',
        'ticket Updated!',
        'success'
      )
      loadUser()
}

const updateState2 = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/ticket/updateState2TicketPO/${id}`,ticket);
    Swal.fire(
        'Good job!',
        'ticket Updated!',
        'success'
      )
      loadUser()
}

const updateState3 = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/ticket/updateState3TicketPO/${id}`,ticket);
    Swal.fire(
        'Good job!',
        'ticket Updated!',
        'success'
      )
      loadUser()
}

const updateState4 = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/ticket/updateState4TicketPO/${id}`,ticket);
    Swal.fire(
        'Good job!',
        'ticket Updated!',
        'success'
      )
      loadUser()
}

   return (
     <>
         <div className="col-md-12 grid-margin stretch-card d-none d-md-flex">
         <div className="card shadow p-5">
             <div className="card-body">
             <h4 className="card-title">Information Ticket Part Order</h4>
             
             <div className="row">
 
                 <div className="col-12">
                 <div className="tab-content tab-content-vertical" id="v-pills-tabContent">
                     <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                     <div className="media">
                     <form className="forms-sample col-lg-12">
                             <div className="form-group">
                                 <label style={{fontSize : "15px"}} htmlFor="exampleInputEmail1">Nom Commande</label>
                                 <input  name="nomCommande" value={nomCommande} onChange={e => onInputChange(e)} disabled={true} className="form-control" id="exampleInputEmail1"/>
                             </div>
                             <div class="form-group">
                                 <label style={{fontSize : "15px"}}>Description</label>  
                                 <input type="text" class="form-control"  name="description" value={description} onChange={e => onInputChange(e)} readOnly={true}/>
                             </div>
                             <div class="form-group">
                                 <label style={{fontSize : "15px"}}>Owner :</label>
                                 <input type="text"  class="form-control" name="owner" value={owner} onChange={e => onInputChange(e)} readOnly={true} />
                             </div>
                             
                             
                             <div class="form-group">
                                 <label style={{fontSize : "15px"}}>Status</label>  
                                 <input type="text"  class="form-control"  name="status" value={status} onChange={e => onInputChange(e)} readOnly={true}/>
                             </div>
                             
                             
                             <div class="form-group">
                                 <label style={{fontSize : "15px"}} >offre</label>
                                 <input type="text" class="form-control"  name="offre" value={offre} onChange={x => onInputChange(x)} readOnly={true} />              
                             </div>
                             

                            <div className="container">
                            <article className="card">
                                <header className="card-header"> My Orders / Tracking </header>
                                <div className="card-body">
                                
                                <article className="card">
                                    <div className="card-body row">
                                    <div  className="col"> <strong>Date de commande:</strong> <br /> {date} </div>
                                    <div className="col"> <strong>Commercial:</strong> <br /> {commercial} </div>
                                    <div className="col"> <strong>Etat Piéce:</strong> <br /> {etatpiece} </div>
                                    <div className="col"> <strong>Tracking #:</strong> <br /> {trackingNumber} </div>
                                    </div>
                                </article>
                                <div className="track">
                                    <div onClick={updateState1} className="step"> <span className="icon"> <i className="icon-check" /> </span> <span className="text">Commande confirmée</span> </div>
                                    <div onClick={updateState2} className="step"> <span className="icon"> <i className="icon-control-end" /> </span> <span className="text">Chez l'expéditeur</span> </div>
                                    <div onClick={updateState3} className="step"> <span className="icon"> <i className="icon-map" /> </span> <span className="text"> En route </span> </div>
                                    <div onClick={updateState4} className="step"> <span className="icon"> <i className="icon-user-unfollow" /> </span> <span className="text">Livrée</span> </div>
                                </div>
                                
                            
                                </div>
                            </article>
                            </div>

                             <button data-toggle="pill" href="#v-pills-messages" class="btn btn-success col-12">Fermer ticket</button>
                         </form>
                     </div>
                     </div>
                
                     <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div className="media">
                    <div className="forms-sample col-lg-12">
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >Signature Numerique</label>
                                
                            </div>
                            <button class="btn btn-success mr-2">Valider</button>
                        </div>
                       
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

