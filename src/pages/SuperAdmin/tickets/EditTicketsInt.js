import React from 'react'
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { BsCheckLg} from "react-icons/bs";
import { useParams, useNavigate } from "react-router-dom";


export default function EditTicketsInt() {
    let history = useNavigate();
    const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 


    const [ticket, setTicket] = useState({
        sla: "",
        datedeb: "",
        taches: "",
        urgence: "",
       
    })

    const[tech,setListTech]=useState([]);
    const { sla, datedeb,  taches, urgence } = ticket;

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
                history("/dashSuperAdmin/gerer_ticketint");
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
        history("/dashSuperAdmin/gerer_ticketint");
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
                    datedeb: result.response[0].datedeb,
                    urgence: result.response[0].urgence,
                    taches: result.response[0].taches

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
                  <h5 className="text-success">Ticket ID : {ticket.id} </h5>
                    <form onSubmit={updateTicket}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="SLA"
                            name="sla"
                            value={sla}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="date debut"
                            name="datedeb"
                            value={datedeb}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        
                        <select value={urgence} name="urgence" class="form-control" onChange={e => onInputChange(e)}>
                            <option value="">---------- Urgence ---------- </option>
                            <option value="Faible">Faible</option>
                            <option value="Moyenne">Moyenne</option>
                            <option value="Haute">Haute</option>
                            <option value="Tres Haute">Trés Haute</option>
                        </select> 
                    </div>
                    <div className="form-group mb-3">
                        <input
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
