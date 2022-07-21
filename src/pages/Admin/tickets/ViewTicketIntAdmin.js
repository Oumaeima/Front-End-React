import React, { useState ,useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {  useParams } from "react-router-dom";

export default function ViewTicketIntAdmin() {

    const { id } = useParams();
    const [Tache,setTache]=useState({
        tache:""
    })
    
    const [ticket, setTicket] = useState({

        sla: "",
        datedeb: "",
        datefin: "",
        taches: "",
        urgence: ""
    });
    //  Object Destructuring 
    const { sla, datedeb, datefin, taches, urgence } = ticket;
    const {tache}=Tache;
    const onInputChange = e => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };
    const onInputChangeT = x => {
        setTache({ ...Tache, [x.target.name]: x.target.value });
    };

      useEffect(() =>{
      
        loadUser();
      },[]);

      const loadUser =  () => {
        fetch(`http://localhost:5000/ticket/AllTicketInt/${id}`,{
            method: "GET",
          })
           .then((response) => response.json())
             .then((result) => {
                console.log(result);
        setTicket({
                    id: id,
                    update: true,
                    sla: result.response[0].sla,
                    datedeb: result.response[0].datedeb,
                    taches : result.response[0].taches,
                    urgence: result.response[0].urgence,
                   
                });
            })
            .catch((error) => console.log("error", error));
            
  };
  useEffect(() =>{  
    loadTache();
  },[]);
  const loadTache =  () => {
    fetch(`http://localhost:5000/ticket/TicketTaches/${id}`,{
        method: "GET",
      })
       .then((response) => response.json())
         .then((result) => {
            console.log(result);
    setTache({
                id: id,
                update: true,
                tache : result.response[0].tache,
            
               
            });
        })
        .catch((error) => console.log("error", error));
};
const updateEtatTicket= async (e) => {
        
   
    
    await axios.put(`http://localhost:5000/ticket/updateToClos/${id}`);
    Swal.fire(
        'Good job!',
        'ticket validée!',
        'success'
      )

};

  return (
    <>
        <div className="col-md-12 grid-margin stretch-card d-none d-md-flex">
        <div className="card shadow p-5">
            <div className="card-body">
            <h4 className="card-title">Information Ticket Intervention</h4>
            
            <div className="row">
                <div className="col-4">
                <ul className="nav nav-pills nav-pills-vertical nav-pills-info" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <li className="nav-item">
                    <a style={{fontSize : "15px"}} className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                        <i style={{paddingRight : "10px"}} className="icon-tag" />
                        Information Ticket
                    </a>                          
                    </li>
                    <li className="nav-item">
                    <a style={{fontSize : "15px"}} className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                        <i className="icon-layers text-success" style={{paddingRight : "10px"}} />
                        Les Taches  Realisées 
                    </a>                          
                    </li>
                    <li className="nav-item">
                    <a style={{fontSize : "15px"}} className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        <i className="icon-direction text-warning" style={{paddingRight : "10px"}} />
                        Signature Numerique
                    </a>                          
                    </li>
                </ul>
                </div>
                <div className="col-8">
                <div className="tab-content tab-content-vertical" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                    <div className="media">
                    <form className="forms-sample col-lg-12">
                            <div className="form-group">
                                <label style={{fontSize : "15px"}} htmlFor="exampleInputEmail1">Email address</label>
                                <input  name="sla" value={sla} onChange={e => onInputChange(e)} placeholder="Enter date" disabled={true} className="form-control" id="exampleInputEmail1"/>
                            </div>
                            
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Date Debut :</label>
                                <input type="text"  class="form-control" name="datedeb" value={datedeb} onChange={e => onInputChange(e)} placeholder="Enter date" required="" readOnly={true} />
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Urgence </label>  
                                <input type="text"  class="form-control"  name="email" value={urgence} onChange={e => onInputChange(e)} placeholder="Enter date" required=""  readOnly={true}/>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >Tache demander</label>
                                <textarea type="textarea" class="form-control"  name="taches" value={taches} onChange={x => onInputChange(x)} placeholder="Saisir les Taches" required="" readOnly={true} />              
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div className="media">
                    <form className="forms-sample col-lg-12">
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >Tache Saisie</label>
                                <textarea 
                                type="textarea" class="form-control"  
                                name="tache" 
                                value={tache} 
                                onChange={e => onInputChangeT(e)}  
                                placeholder="Saisir les Taches" 
                                readOnly={true} />   
                                 <input style={{marginTop : "20px"}} type="checkbox" className="checkbox disable-team team_values" value="1" disabled={true}/> 
                                 <label style={{marginTop : "20px", fontSize : "15px"}} for="" >Tache fini</label>         
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div className="media">
                    <form onsubmit={updateEtatTicket} className="forms-sample col-lg-12">
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >Signature Numerique</label>
                                <textarea 
                                type="textarea" class="form-control"  
                                name="tache"   
                                placeholder="Signature Numerique"/>   
                                    
                            </div>
                            <button type="submit" class="btn btn-success mr-2">Valider</button>
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
