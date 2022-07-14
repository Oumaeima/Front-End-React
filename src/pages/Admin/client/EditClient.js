import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export default function EditClient() {

    let history = useNavigate();
    const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 
 
    const [client, setClient] = useState({
        nom: "",
        prenom: "",
        activitesociete: "",
        tel: "",
        email: "",
        password: ""
    })


    const { nom, prenom, activitesociete, tel, email, password } = client;

    const onInputChange = e => {
        setClient({ ...client, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadClient();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const updateClient = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/client/${id}`, client);
        Swal.fire(
            'Good job!',
            'Client Updated!',
            'success'
          )
        history("/dashAdmin/gerer_client");
    };

    const loadClient = () => {
        fetch(`http://localhost:5000/client/AllClient/${id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setClient({
                    id: id,
                    update: true,
                    nom: result.response[0].nom,
                    prenom: result.response[0]. prenom,
                    activitesociete: result.response[0].activitesociete,
                    tel: result.response[0].tel,
                    email: result.response[0].email,
                    password: result.response[0].password,

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
                  <h5 className="text-success">Client ID : {client.id}</h5>
                    <form onSubmit={updateClient}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Nom"
                            name="nom"
                            value={nom}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Prenom"
                            name=" prenom"
                            value={ prenom}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="activitesociete"
                            name="activitesociete"
                            value={activitesociete}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Telephone"
                            name="tel"
                            value={tel}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    
                    <div className="form-group mb-3">
                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="******"
                            name="password"
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <button type="submit" className="btn btn-secondary btn-block">Modifier client</button>

                    </form>
                  
                </div>
              </div>
            </div>
    </>
  )
}