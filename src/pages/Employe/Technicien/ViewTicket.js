import React, { useState ,useEffect} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {  useNavigate, useParams } from "react-router-dom";

export default function ViewTicket() {
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

  const updateEtatTicket = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/ticket/updateStateResolu/${id}`,ticket);
        Swal.fire(
            'Good job!',
            'ticket Updated!',
            'success'
        )
        history("/dashTech/intervention");
    };

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
                    <form onSubmit={updateEtatTicket} className="forms-sample col-lg-12">
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
                            <button type="submit" class="btn btn-success col-12">Terminer Tache</button>
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
