import React, { useState ,useEffect, useRef} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import {  useNavigate, useParams } from "react-router-dom";

export default function ViewTicketClient() {

   const inputRef = useRef([])
   const [sign,setSign]=useState({
    signClient:""
})
const {signClient}=sign;
const onInputChangeT = x => {
    setSign({ ...sign, [x.target.name]: x.target.value });
};

    let history = useNavigate();
    const { id } = useParams();
    const idC = JSON.parse(localStorage.getItem('id'));
    const[signature,setSignature] = useState([]);
    const[ListeEmail,setListEmail] = useState([]);
    const [Tache,setTache]=useState({
        tache:""
    })
    
    const [ticket, setTicket] = useState({

        type: "",
        sla: "",
        owner: "",
        datedeb: "",
        dateClos: "",
        taches: "",
        status: "",
        matricule: ""
    });
    //  Object Destructuring 
    const { type, sla ,owner, datedeb, dateClos, taches, status } = ticket;
    const {tache}=Tache;
    const onInputChange = e => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
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
                    type: result.response[0].type,
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
    getSignature()
    
    getEmail();
  }, []);


const updateEtatTicket = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/ticket/updateStat/${id}`,ticket);
    Swal.fire(
        'Good job!',
        'ticket Updated!',
        'success'
      )
    history("/dashClient/intervention");
};

const getSignature= async () => {
    const res = await fetch(`http://localhost:5000/client/getSignature/${idC}`)
    const getdata = await res.json();
        setSignature(getdata[0].signature)
       
        //console.log("signature : "+signature);
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
                    <form className="forms-sample col-lg-12">
                            <div className="form-group">
                                <label style={{fontSize : "15px"}} htmlFor="type">Type</label>
                                <input  name="type" value={type} onChange={e => onInputChange(e)} disabled={true} className="form-control" id="type"/>
                            </div>
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
                            <button data-toggle="pill" href="#v-pills-messages" class="btn btn-success col-12">Fermer ticket</button>
                        </form>
                    </div>
                    </div>
                  
                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                    <div className="media">
                    <div className="forms-sample col-lg-12">
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >Signature Numerique</label>
                                <input ref={inputRef}
                                type="textarea" class="form-control"  
                                id="signature"
                                name="signature"
                                placeholder="Taper votre signature numerique"
                                onChange={e => onInputChangeT(e)}
                                />   
                                   
                            </div>
                            <button disabled={inputRef.current.value === signature ? false : true} onClick={updateEtatTicket} class="btn btn-success mr-2">Valider</button>
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