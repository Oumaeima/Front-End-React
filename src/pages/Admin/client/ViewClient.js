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
                    nom: result[0].nom,
                    prenom: result[0].prenom,
                    nomsociete: result[0].nomsociete,
                    activitesociete: result[0].activitesociete,
                    tel : result[0].tel,
                    email: result[0].email
                });
            })
            .catch((error) => console.log("error", error));
            
  };

   
    useEffect(() => {
        loadClientDetail();
    }, []);




  return (
    <>
        <div className="col-12">
        <div className="card shadow p-5">
            <div className="card-body">
            <h4 className="card-title">Details</h4>
            
            <div className="row">
                <div className="col-md-10 mx-auto">
               
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
                    
                    
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

    </>
  )
}
