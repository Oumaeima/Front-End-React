import React from 'react'
import Swal from 'sweetalert2';
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function EditOffre() {
    let history = useNavigate();
    const { id } = useParams();  //The useParams() hook helps us to access the URL parameters from a current route. 

    const [uploaded_pdf, setOffre] = useState({
        offre : ""
    })
    const {offre} = uploaded_pdf
   
    
   
    useEffect(() => {

    }, []);


            // Insert offre 
            const updateOffre = async (e) => {
                e.preventDefault();
                e.target.reset();
                
                const formdata = new FormData()
                formdata.append('uploaded_pdf', uploaded_pdf)
                await axios.put(`http://localhost:5000/offre/updateOffre/${id}`, formdata);
                
                Swal.fire(
                    'Good job!',
                    'offre updated!',
                    'success'
                )
                
                history("/dashCommercial/partOrder");
                    
            };


  return (
    <>
  
        <div class="col-12">
              <div class="card shadow p-5">
                <div class="card-body">
                  <h4 class="card-title">Modifier Offre</h4>
                    <form onSubmit={updateOffre}>    
                        <div class="form-group">
                        <label style={{fontSize : "15px"}} >Offre </label>
                            <input name="uploaded_pdf" onChange={e => setOffre(e.target.files[0])}  type="file" class="form-control"></input>
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block">Modifier Offre</button>
                    </form>
                </div>
              </div>
            </div>
    </>
  )
}
