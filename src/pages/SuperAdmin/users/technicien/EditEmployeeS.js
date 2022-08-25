import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


export default function EditEmployeeS() {

    let history = useNavigate();
    const { id } = useParams();

    const [user ,setUser] = useState({
        nom:"",
        prenom:"",
        tel:"",
        email:"",
    })
   
   
    const { nom,prenom,tel,email} = user;
   
    const onInputChange = e => {
      setUser({ ...user,[e.target.name]: e.target.value });
    };
   
    useEffect(() => {
      loadUser();
    }, []);
   
     
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:5000/api/${id}`, user);
      Swal.fire(
        'Good job!',
        'User Updated!',
        'success'
      )
      history("/dashSuperAdmin/techniciens");
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
                      tel:result[0].tel,
                      email: result[0].email,
                  });
              })
              .catch((error) => console.log("error", error));
    };

  return (
    <>
    <div class="col-12">
          <div class="card shadow p-5">
            <div class="card-body">
              <h4 class="card-title">Modifier Technicien</h4>
             
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
