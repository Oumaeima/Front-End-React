import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CreeTicket() {

    //const prenom = JSON.parse(localStorage.getItem('prenom'));
    //const nom = JSON.parse(localStorage.getItem('nom'));
    const id = JSON.parse(localStorage.getItem('id'));
    //console.log("id "+id)
    let navigate = useNavigate()
   
    const [email, setEmail] = useState(null);
    const[ListeMat,setListMat] = useState([]);
    const [ticket, setTicket] = useState({

        sla: "",
        owner: email,
        datedeb: "",
        dateClos: "",
        taches: "",
        status: "",
        matricule: ""
        
    });
    
    const { sla ,owner, datedeb, dateClos, taches, status,matricule } = ticket;
    const onInputChange = e => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const getEmail = async () => {
            const res = await fetch(`http://localhost:5000/client/getClient/${id}`);
            const getdata = await res.json();
            setEmail(getdata[0].email);  
            
        }
        getEmail();
    });

    useEffect(() => {
        const getMatricule = async () => {
            const res = await fetch('http://localhost:5000/dossier/findAllMatricules');
            const getdata = await res.json();
            setListMat(getdata);
        }
        getMatricule();
    }, []);

    
    
        // Insert Employee Records 
    const submitTicket = async (e) => {
            e.preventDefault();
            e.target.reset();
            try{
            await axios.post("http://localhost:5000/ticket/createNewTicket", ticket);
            
            Swal.fire(
                'Good job!',
                'User inserted!',
                'success'
              )
              navigate("/dashClient/intervention")
              
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


  return (
    <>
    
        <div className="col-md-12 d-flex align-items-stretch grid-margin">
            <div className="row flex-grow">
                <div className="col-12 grid-margin">
                <div className="card shadow p-5">
                    <div className="card-body">
                    <h4 className="card-title">Ajout Ticket Intervention</h4>
                    
                    <form onSubmit={submitTicket} className="forms-sample">
                        <div className="form-group">
                            <label htmlFor="sla" className="col-form-label">SLA:</label>
                            <input id='sla' name='sla' onChange={e => onInputChange(e)} type="text" class="form-control"/>           
                        </div>
                        <div className="form-group">
                            <label htmlFor="owner" className ="col-form-label">Owner:</label>
                            <input onChange={e => onInputChange(e)} id='owner' name='owner'  type="text" class="form-control"/>           
                        </div>
                        <div className="form-group">
                            <label htmlFor="datedeb" className="col-form-label">Date Debut:</label>
                            <input  id='datedeb' name="datedeb" onChange={e => onInputChange(e)} type="date" class="form-control" placeholder="dd/mm/yyyy"/>           
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateClos" className="col-form-label">Date Cloture:</label>
                            <input  id='dateClos' name="dateClos" onChange={e => onInputChange(e)} type="date" class="form-control" placeholder="dd/mm/yyyy"/>           
                        </div>
                        <div className="form-group">
                            <label  htmlFor="matricule" className="col-form-label">Matricule:</label>
                            <select name="matricule" onChange={e => onInputChange(e)} class="form-control" required>
                                <option value="">---------- Matricule ---------- </option>
                                    {ListeMat.map((res) => (

                                        <option value={res.idd}>{res.matricule}</option>
                                        )
                                        )}
                            </select> 
                        </div>
                        <div className="form-group">
                            <label htmlFor="taches">Tache demander</label>
                            <textarea name="taches" id='taches' onChange={e => onInputChange(e)} className="form-control"  rows={2} />
                        </div>
                        <button type="submit" className="btn btn-success mr-2">Submit</button>
                        <button type="reset" className="btn btn-light">Reset</button>
                    </form>
                    </div>
                </div>
                </div>
                
            </div>
        </div>

    
    </>
  )
}
