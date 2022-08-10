import React from 'react'
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditPO() {
    let history = useNavigate();
    const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 


    const [ticket, setTicket] = useState({
        nomCommande: "",
        description : "",
        owner : "",
        date : "",
        status : "",
        etatpiece: "",
        trackingNumber: "",
        commercial: "",
        offre: "",
    })

    
    const { nomCommande ,description, owner, date, status, etatpiece, trackingNumber, commercial} = ticket;

    const onInputChange = e => {
        setTicket({ ...ticket, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadTicket();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const updateTicket = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/ticket/updateTicketPO/${id}`,ticket);
        Swal.fire(
            'Good job!',
            'ticket Updated!',
            'success'
          )
        history("/dashClient/partOrder");
    };

    const loadTicket = () => {
        fetch(`http://localhost:5000/ticket/AllTicketPO/${id}`, {
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
                    offre: result.response[0].offre,
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
                    <label htmlFor="nomCommande" className="col-form-label">Nom Commande</label>
                        <input
                            id='nomCommande'
                            type="text"
                            className="form-control form-control-lg"
                            name="nomCommande"
                            value={nomCommande}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="description" className="col-form-label">Description</label>
                        <input
                            id='description'
                            type="text"
                            className="form-control form-control-lg"
                            name="description"
                            value={description}
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
