import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


export default function EditEmployeeAdmin() {

    let history = useNavigate();
    const { id } = useParams();

    const [user ,setUser] = useState({
        nom:"",
        prenom:"",
        poste:"",
       
        tel:"",
        email:"",
        password:""
    })
   
   
    const { nom,prenom,poste,tel,email,password } = user;
   
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
      history("/dashAdmin/gerer_employee");
    };
   
    const loadUser =  () => {
      fetch(`http://localhost:5000/api/${id}`,{
              method: "GET",
            })
             .then((response) => response.json())
               .then((result) => {
                  console.log(result);
          setUser({
                      id: id,
                      update: true,
                      nom: result.response[0].nom,
                      prenom: result.response[0].prenom,
                      tel:result.response[0].tel,
                      poste: result.response[0].poste,
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
              <h5 className="text-success">Employer ID : {user.id}</h5>
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
            placeholder="Entrer poste"
            name="poste"
            value={poste}
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
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control form-control-lg"
            placeholder="******"
            name="password"
          
            onChange={e => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-secondary btn-block">Modifier Employer</button>
     </form>
              
            </div>
          </div>
        </div>
</>
  )
}
