import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function ViewClient() {

    const {id} = useParams()

    

    const [record, setRecord] = useState([]);
    const [client , setClient] = useState({
        nom: "",
        prenom: "",
        nomsociete: "",
        activitesociete:"",
        tel: "",
        email: ""
    })

    const {nom, prenom, nomsociete, activitesociete, tel, email} = client

    const onInputChange = e =>{
        setClient({...client, [e.target.name]: e.target.value})
    }
    const [mail, setMail] = useState({
        userMail: "",
        userMessage: "",
        object: "",
    })

    const { userMail=client.email, userMessage, object} = mail

    const onInputChangeMail = e =>{
        setMail({...mail, [e.target.name]: e.target.value})
    }



    const loadClientDetail =  () => {
        fetch(`http://localhost:5000/client/AllClient/${id}`,{
            method: "GET",
          })
           .then((response) => response.json())
             .then((result) => {
                console.log(result);
        setClient({
                    id: id,
                    update: true,
                    nom: result.response[0].nom,
                    prenom: result.response[0].prenom,
                    nomsociete: result.response[0].nomsociete,
                    activitesociete: result.response[0].activitesociete,
                    tel : result.response[0].tel,
                    email: result.response[0].email
                });
            })
            .catch((error) => console.log("error", error));
            
  };

   
    useEffect(() => {
        loadClientDetail();
    }, []);

    const sendmail = async (e) => {
        e.preventDefault();
        try{
        await axios.post("http://localhost:5000/mailing/sendmail", mail);
        Swal.fire(
            'Good job!',
            'mail sent!',
            'success'
          )
        }catch(err){
            Swal.fire({
                title: "Error",
                text: err.response.data.msg,
                icon: "error",
                button: "OK",

            });

        }
    };

  return (
    <>
        <div className="col-12">
        <div className="card shadow p-5">
            <div className="card-body">
            <h4 className="card-title">Details</h4>
            
            <div className="row">
                <div className="col-md-10 mx-auto">
                <ul className="nav nav-pills nav-pills-custom" id="pills-tab-custom" role="tablist">
                    <li className="nav-item">
                    <a className="nav-link active" id="pills-home-tab-custom" data-toggle="pill" href="#pills-health" role="tab" aria-controls="pills-home" aria-selected="true">
                        Client
                    </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" id="pills-profile-tab-custom" data-toggle="pill" href="#pills-career" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Mail
                    </a>
                    </li>
                    
                </ul>
                <div className="tab-content tab-content-custom-pill" id="pills-tabContent-custom">
                    <div className="tab-pane fade show active" id="pills-health" role="tabpanel" aria-labelledby="pills-home-tab-custom">
                   
                    <form className="forms-sample col-lg-12">
                            <div className="form-group">
                                <label style={{fontSize : "15px"}}>Nom</label>
                                <input value={nom} onChange={e => onInputChange(e)}  name="nom" disabled={true} className="form-control" id="exampleInputEmail1"/>
                            </div>
                            
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Prenom :</label>
                                <input value={prenom} onChange={e => onInputChange(e)} type="text"  class="form-control" name="prenom"  readOnly={true} />
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Nom Societe</label>  
                                <input value={nomsociete} onChange={e => onInputChange(e)} type="text"  class="form-control"  name="nomsociete" readOnly={true}/>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Activite societe</label>  
                                <input value={activitesociete} onChange={e => onInputChange(e)} type="text"  class="form-control"  name="activitesociete" readOnly={true}/>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Telephone</label>  
                                <input value={tel} onChange={e => onInputChange(e)} type="text"  class="form-control"  name="tel" readOnly={true}/>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >Email</label>
                                <input value={email} onChange={e => onInputChange(e)} type="textarea" class="form-control"  name="email" readOnly={true} />              
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane fade" id="pills-career" role="tabpanel" aria-labelledby="pills-profile-tab-custom">
                    <div className="media">
                    <form onSubmit={sendmail} className="forms-sample col-lg-12">
                            <div class="form-group">
                                <label style={{fontSize : "15px"}} >À</label>
                                <input defaultValue={email} onMouseMove={e => onInputChangeMail(e)} class="form-control"  name="userMail" />              
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Objet</label>  
                                <input onChange={e => onInputChangeMail(e)} type="text"  class="form-control"  name="object" required/>
                            </div>
                            <div class="form-group">
                                <label style={{fontSize : "15px"}}>Message</label>  
                                <textarea onChange={e => onInputChangeMail(e)} type="text"  class="form-control"  name="userMessage" required/>
                            </div>
                            <button type="submit" class="btn btn-inverse-success btn-fw col-12">Envoyer</button>
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
