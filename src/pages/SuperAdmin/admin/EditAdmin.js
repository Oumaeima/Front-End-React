import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


export default function EditAdmin() {

    let history = useNavigate();
    const { id } = useParams();

    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);
    const [admin, setAdmin] = useState({
        nom:"",
        prenom:"",
        email: "",
        password: "" 
    });

    //  Object Destructuring 
    const {nom,prenom,email, password } = admin;

    const onInputChange = e => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };
   
    // On Page load display all records 
    const loadAdminDetail = async () => {
        fetch(`http://localhost:5000/admin/AllAdmin/${id}`,{
              method: "GET",
            })
             .then((response) => response.json())
               .then((result) => {
                  console.log(result);
                  setAdmin({
                      id: id,
                      update: true,
                      nom: result[0].nom,
                      prenom: result[0].prenom,
                      email: result[0].email,
                  });
              })
              .catch((error) => console.log("error", error));
    }
    useEffect(() => {
        loadAdminDetail();
    }, []);
   
     
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`http://localhost:5000/admin/${id}`, admin);
      Swal.fire(
        'Good job!',
        'User Updated!',
        'success'
      )
      history("/dashSuperAdmin/admin");
    };
   

  return (
    <>
    <div class="col-12">
          <div class="card shadow p-5">
            <div class="card-body">
              <h4 class="card-title">Modifier Admin</h4>
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
