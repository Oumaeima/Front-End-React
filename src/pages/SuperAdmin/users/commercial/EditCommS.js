import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export default function EditCommS() {
    let history = useNavigate();
    const { id } = useParams();

    const[ListeDossier,setListDossier] = useState([]);
    const [user ,setUser] = useState({
        nom:"",
        prenom:"",
        tel:"",
        email:"",
        nomsociete:""
    })
   
   
    const { nom,prenom,tel,email,nomsociete} = user;
   
    const onInputChange = e => {
      setUser({ ...user,[e.target.name]: e.target.value });
    };
   
    useEffect(() => {
      loadUser();
    }, []);
   
     
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:5000/api/updateCommercial/${id}`, user);
      Swal.fire(
        'Good job!',
        'User Updated!',
        'success'
      )
      history("/dashAdmin/gerer_commercial");
    };
   
    const loadUser =  () => {
      fetch(`http://localhost:5000/api/getUserByID/${id}`,{
              method: "GET",
            })
             .then((response) => response.json())
               .then((result) => {
                  console.log(result);
          setUser({
                      id: id,
                      update: true,
                      nom: result[0].nom,
                      prenom: result[0].prenom,
                      nomsociete: result[0].nomsociete,
                      tel:result[0].tel,
                      email: result[0].email,
                  });
              })
              .catch((error) => console.log("error", error));
    };

    useEffect(() => {
        const getDossier = async () => {
            const res = await fetch('http://localhost:5000/dossier/getDossier');
            const getdata = await res.json();
            setListDossier(getdata);
        }
        getDossier();
      }, []);

  return (
    <>
    <div class="col-12">
          <div class="card shadow p-5">
            <div class="card-body">
              <h4 class="card-title">Modifier ticket</h4>
              <form onSubmit={e => onSubmit(e)}>
        
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="nom"
            name="nom"
            value={nom}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Entrer prenom"
            name="prenom"
            value={prenom}
            onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group mb-3">
            <select id="nomsociete" name="nomsociete" class="form-control" value={nomsociete} onChange={e => onInputChange(e)}>
                <option value={nomsociete}> {nomsociete} </option>
                    {ListeDossier.map ((res)=>(
                        <option value={res.idd}>{res.nomsociete}</option>
                    ))}
            </select>
        </div>
        
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Enter tel"
            name="tel"
            value={tel}
            onChange={e => onInputChange(e)}
          />
        </div>

        <div className="form-group mb-3">
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Enter email"
            name="emil"
            value={email}
            onChange={e => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-secondary btn-block">Modifier</button>
     </form>
              
            </div>
          </div>
        </div>
</>
  )
}
