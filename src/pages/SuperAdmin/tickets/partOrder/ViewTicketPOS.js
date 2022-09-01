import React, { useState ,useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import  './style.css'
import { saveAs } from 'file-saver'

export default function ViewTicketPOS() {

    const Ref1 = useRef([])
    const Ref2 = useRef([])
    const Ref3 = useRef([])
    const Ref4 = useRef([])

     const { id } = useParams();
     
     const [ticket, setTicket] = useState({
 
        nomCommande: "",
        description : "",
        owner : "",
        date : "",
        status : "",
        etatpiece: "",
        trackingNumber: "",
        commercial: "",
     });
     //  Object Destructuring 
     const { nomCommande ,description, owner, date, status, etatpiece, trackingNumber, commercial} = ticket;
    
     const onInputChange = e => {
         setTicket({ ...ticket, [e.target.name]: e.target.value });
     };
   
 
       useEffect(() =>{
        loadOffre()
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
                 });
             })
             .catch((error) => console.log("error", error));
             
   };
 
   const [uploaded_pdf, setOffre] = useState({
    offre : ""
})
const {offre} = uploaded_pdf

//const fileURL = URL.createObjectURL(offre);

const loadOffre = async () => {
    fetch(`http://localhost:5000/offre/getOffre/${id}`,{
        method: "GET",
        
    })
        .then((response) => response.json() )
        .then((result) => {
            console.log(result);
            setOffre({
                        id: id,
                        update: true,
                        offre: result[0].offre,
                    });
                })
                .catch((error) => console.log("error", error));
                
      };

      async function printTickets() {
        const { data } = await getTicketsPdf()
        const blob = new Blob([data[0].offre], { type: 'application/pdf' })
        console.log("blob : ", data[0].offre)
        saveAs(blob, "offre.pdf") 
  } 

    async function getTicketsPdf() {
        fetch(`http://localhost:5000/offre/downloadOffre/${id}`, {
            method: 'GET',
            responseType: "application/pdf"
        })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = URL.createObjectURL(new Blob([blob], { type: 'application/pdf' }));
            saveAs(url, "offre.pdf") 
        });
  } 

   return (
     <>
         <div className="col-md-12 grid-margin stretch-card d-none d-md-flex">
         <div className="card shadow p-5">
             <div className="card-body">
             <h4 className="card-title">Information Ticket Intervention</h4>
             
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
                            
                            <div className="container">
                            <article className="card">
                                <header className="card-header"> Tracking </header>
                                <div className="card-body">
                                
                                    <article className="card">
                                        <div className="card-body row">
                                        <div className="col"> <strong>Date de commande:</strong> <br /> {date} </div>
                                        <div className="col"> <strong>Offre:</strong> <br /><a href="#" onClick={printTickets}>{offre}</a> </div>
                                        <div className="col"> <strong>Commercial:</strong> <br /> {commercial} </div>
                                        <div className="col"> <strong>Etat Piéce:</strong> <br /> {etatpiece} </div>
                                        <div className="col"> <strong>Tracking #:</strong> <br /> {trackingNumber} </div>
                                        </div>
                                    </article>
                                    <div className="track">
                                        <div ref={Ref1} className={etatpiece === "Commande confirmée"? "step active" : "step"}> <span className="icon"> <i className="icon-check" /> </span> <span className="text">Commande confirmée</span> </div>
                                        <div ref={Ref2} className={etatpiece === "Chez l'expéditeur"? "step active" : "step"}> <span className="icon"> <i className="icon-control-end" /> </span> <span className="text">Chez l'expéditeur</span> </div>
                                        <div ref={Ref3} className={etatpiece === "En route"? "step active" : "step"}> <span className="icon"> <i className="icon-map" /> </span> <span className="text"> En route </span> </div>
                                        <div ref={Ref4} className={etatpiece === "Livrée"? "step active" : "step"}> <span className="icon"> <i className="icon-user-unfollow" /> </span> <span className="text">Livrée</span> </div>
                                    </div>
                            
                                </div>
                            </article>
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
