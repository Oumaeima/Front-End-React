import React from 'react'
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditTicket() {
    let history = useNavigate();
    const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 


    const [ticket, setTicket] = useState({
        sla: "",
        owner: "",
        datedeb: "",
        dateClos: "",
        taches: "",
        status: "",
        matricule: ""
       
    })

    const[tech,setListTech]=useState([]);
    const { sla ,owner, datedeb, dateClos, taches, status} = ticket;

    const onInputChange = e => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadTicket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        const getListTech = async () => {
            const res = await fetch(`http://localhost:5000/ticket/getListTechAffectes/${id}`);
            const getdata = await res.json();
            setListTech(getdata);
        }
        getListTech();
    }, []);
    const deleteRecord = (idti,idu) => {
        axios.delete(`http://localhost:5000/ticket/ticketPO/${idti}/${idu}`)
            .then((result) => {
                history("/dashAdmin/gerer_ticketint");
            })
            .catch(() => {
                alert('Error in the Code');
            });
    };

    const updateTicket = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/ticket/updateTicket/${id}`,ticket);
        Swal.fire(
            'Good job!',
            'ticket Updated!',
            'success'
          )
        history("/dashClient/intervention");
    };

    const loadTicket = () => {
        fetch(`http://localhost:5000/ticket/AllTicketInt/${id}`, {
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
                    taches: result.response[0].taches,
                    status: result.response[0].status,
                    

                });
            })
            .catch((error) => console.log("error", error));
    };
  return (
    <>
        <div class="col-12">
              <div class="card shadow p-5">
                <div class="card-body">
                  <h4 class="card-title">Modifier ticket</h4>
                  
                    <form onSubmit={updateTicket}>
                    <div className="form-group mb-3">
                    <label htmlFor="sla" className="col-form-label">SLA</label>
                        <input
                            id='sla'
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="SLA"
                            name="sla"
                            value={sla}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="owner" className="col-form-label">Owner</label>
                        <input
                            id='owner'
                            type="text"
                            className="form-control form-control-lg"
                            name="owner"
                            value={owner}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="datedb" className="col-form-label">Date Début</label>
                        <input
                            id='datedb'
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="date debut"
                            name="datedeb"
                            value={datedeb}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="dateClos" className="col-form-label">Date Clos</label>
                        <input
                            id='dateClos'
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="date debut"
                            name="dateClos"
                            value={dateClos}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="status" className="col-form-label">Status</label>
                        <input
                            id='status'
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="date debut"
                            name="status"
                            value={status}
                            onChange={e => onInputChange(e)}
                            />
                        
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="tache" className="col-form-label">Tache</label>
                        <input
                            id='tache'
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="taches"
                            name="taches"
                            value={taches}
                            onChange={e => onInputChange(e)}
                        />
                    </div> 
                   
                    <button type="submit" className="btn btn-secondary btn-block">Modifier Ticket</button>
                    </form>
                  
                </div>
              </div>
            </div>
    </>
  )
}
