import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2';

export default function EditDossierS() {
    let history = useNavigate(); //The useHistory hook gives you access to the history instance that you may use to navigate.
    const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 

    const [dossier, setDossier] = useState({
        nomsociete: "",
        matricule: "",
        categorie: "",
        type: "",
    })


    const { nomsociete, matricule, categorie, type } = dossier;

    const onInputChange = e => {
        setDossier({ ...dossier, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadDossier();
        console.log("id : "+id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const updateDossier = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/dossier/${id}`, dossier);
        Swal.fire(
            'Good job!',
            'Dossier Updated!',
            'success'
          )
        history("/dashAdmin/gerer_dossier");
    };

    const loadDossier = () => {
        fetch(`http://localhost:5000/dossier/AllDossier/${id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setDossier({
                    id: id,
                    update: true,
                    nomsociete: result[0].nomsociete,
                    categorie: result[0].categorie,
                    type: result[0].type,
                    matricule:result[0].matricule

                });
            })
            .catch((error) => console.log("error", error));
    };



  return (
    <>
    <div class="col-12">
          <div class="card shadow p-5">
            <div class="card-body">
              <h4 class="card-title">Modifier Dossier</h4>
              
              <form onSubmit={updateDossier}>
                    <div className="form-group mb-3">
                        <label>Nom Societe :</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                           
                            name="nomsociete"
                            value={nomsociete}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label> Categorie :</label>
                        <select name="categorie" class="form-control"  value={categorie} onChange={e => onInputChange(e)} >
                                        <option value="">---------- Choisir categorie ---------- </option>
                                        <option value="offshore">offshore</option>
                                        <option value="nearshore">nearshore</option>
                                        <option value="onshore">onshore</option>

                                    </select>
                    </div>
                    <div className="form-group mb-3">
                        <label>Matricule :</label>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="categorie "
                            name="matricule"
                            value={matricule}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <label>Type Dossier :</label>
                        <select name="type" class="form-control"  value={type} onChange={e => onInputChange(e)}>
                                        <option value="">---------- Choisir un type ---------- </option>
                                        <option value="en régi"> en régi</option>
                                        <option value="avec des intervention régulières">avec des intervention régulières</option>

                                    </select> 
                    </div>



                    <button type="submit" className="btn btn-secondary btn-block">Update Dossier</button>
                </form>
              
            </div>
          </div>
        </div>
</>
  )
}
