import React, { useState ,useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {  useNavigate, useParams } from "react-router-dom";

export default function ViewTicketIntAdmin() {
    let history = useNavigate();
    const { id } = useParams();
    const[ListeEmail,setListEmail] = useState([]);
    const [Tache,setTache]=useState({
        tache:""
    })
    
    const [ticket, setTicket] = useState({

        sla: "",
        owner: "",
        datedeb: "",
        dateClos: "",
        taches: "",
        status: "",
        matricule: ""
    });
    //  Object Destructuring 
    const { sla ,owner, datedeb, dateClos, taches, status } = ticket;
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
                    owner: result.response[0].owner,
                    datedeb: result.response[0].datedeb,
                    dateClos: result.response[0].dateClos,
                    taches : result.response[0].taches,
                    status: result.response[0].status,
                   
                });
            })
            .catch((error) => console.log("error", error));
            
  };

  const affectTechnicien = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/ticket/affecteTech/${id}`, ticket);
    Swal.fire(
        'Good job!',
        'ticket Updated!',
        'success'
      )
  };
  useEffect(() => {
    const getEmail = async () => {
        const res = await fetch('http://localhost:5000/ticket/AllEmailTech');
        const getdata = await res.json();
        setListEmail(getdata);
    }
    getEmail();
  }, []);

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
                        Affecter Technicien
                    </a>                          
                    </li>
                    <li className="nav-item">
                    <a style={{fontSize : "15px"}} className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                        <i className="icon-direction text-warning" style={{paddingRight : "10px"}} />
                        Affecter Superviseur
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
                                <label style={{fontSize : "15px"}} htmlFor="exampleInputEmail1">SLA</label>
                                <input  name="sla" value={sla} onChange={e => onInputChange(e)} placeholder="Enter date" disabled={true} className="form-control" id="exampleInputEmail1"/>
                            </div>
                            
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Owner :</label>
                                <input type="text"  class="form-control" name="owner" value={owner} onChange={e => onInputChange(e)} readOnly={true} />
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Date Debut</label>  
                                <input type="text"  class="form-control"  name="email" value={datedeb} onChange={e => onInputChange(e)} readOnly={true}/>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Date Cloture</label>  
                                <input type="text"  class="form-control"  name="email" value={dateClos} onChange={e => onInputChange(e)} readOnly={true}/>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Status</label>  
                                <input type="text"  class="form-control"  name="status" value={status} onChange={e => onInputChange(e)} readOnly={true}/>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >Tache demander</label>
                                <textarea type="textarea" class="form-control"  name="taches" value={taches} onChange={x => onInputChange(x)} readOnly={true} />              
                            </div>
                        </form>
                    </div>
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                    <div className="media">
                    <form onSubmit={affectTechnicien}>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >Technicien</label>
                                <select name="owner" class="form-control" value={owner} onChange={e => onInputChange(e)}>
                                    <option value="">---------- Choisir un Email ---------- </option>
                                    {ListeEmail.map ((res)=>(
                                      <option value={res.idti}>{res.email}</option>
                                    ))}
                                </select> 
                            </div>
                            <button type="submit" class="btn btn-success mr-2">Valider</button>
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
