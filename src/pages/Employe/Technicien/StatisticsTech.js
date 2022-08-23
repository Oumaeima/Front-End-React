import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import avatar from '../../../assets/user.png'
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const COLORS = ['#0088FE', '#7DCBF6', '#002F9E', '#3A09FC'];
export default function StatisticsTech() {

    const id = JSON.parse(localStorage.getItem('id'));
    
    /**---------------------------------------- EN COURS ------------------------------------ */

  const [encours,setEncours] = useState({
    intC : ""
  })
  const { intC } = encours;

  const loadTicketEnCours = () => {
    fetch(`http://localhost:5000/ticket/countEnCoursByTech/${id}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setEncours({
                update: true,
                intC: result[0].intC,
            });
        })
        .catch((error) => console.log("error", error));
};


/**---------------------------------------- ALL TICKET INT ------------------------------------ */

    const [all,setAll] = useState({
        intT : ""
    })
    const { intT } = all;

    const loadAllIntTicket = () => {
      fetch(`http://localhost:5000/ticket/countTicketByTech/${id}`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setAll({
                  update: true,
                  intT: result[0].intT,
              });
          })
          .catch((error) => console.log("error", error));
    };
/**---------------------------------------- RESOLU ------------------------------------ */
    const [resolu,setResolu] = useState({
        intR : ""
    })
    const { intR } = resolu;

    const loadTicketResolu = () => {
      fetch(`http://localhost:5000/ticket/countResoluByTech/${id}`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setResolu({
                  update: true,
                  intR: result[0].intR,
              });              
          })
          .catch((error) => console.log("error", error));
    };

/**---------------------------------------- TYPE1 ------------------------------------ */
const [type1,setType1] = useState({
    intType1 : ""
})
const { intType1 } = type1;

const loadTicketType1 = () => {
  fetch(`http://localhost:5000/ticket/countIntType1ByTech/${id}`, {
      method: "GET",
  })
      .then((response) => response.json())
      .then((result) => {
          console.log(result);
          setType1({
              update: true,
              intType1: result[0].intType1,
          });              
      })
      .catch((error) => console.log("error", error));
};

/**---------------------------------------- TYPE2 ------------------------------------ */
    const [type2,setType2] = useState({
        intType2 : ""
    })
    const { intType2 } = type2;

    const loadTicketType2 = () => {
    fetch(`http://localhost:5000/ticket/countIntType2ByTech/${id}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setType2({
                update: true,
                intType2: result[0].intType2,
            });              
        })
        .catch((error) => console.log("error", error));
    };

    const data = [
        { name: "Opération site régulière", value: type1.intType1 },
        { name: "Opération et gestion", value: type2.intType2 },
    ];
/**------------------------------------- load user detail ------------------------------- */
    const [user, setUser] = useState({
        nom: "",
        prenom: "",
        tel: "",
        email: "",
        password: ""
      })
    
      const { nom, prenom,email, tel, password } = user;
 
    const loadUser = () => {
        fetch(`http://localhost:5000/api/getUserByID/${id}`, {
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
                    tel: result[0].tel,
                    email: result[0].email,
                    password: result[0].password,
  
                });
            })
            .catch((error) => console.log("error", error));
    };

      useEffect(() => {
        loadTicketEnCours();
        loadAllIntTicket()
        loadTicketResolu()
        loadTicketType1()
        loadTicketType2()
        loadUser()
      }, []);

    

     
  return (
    <>
        <div>
        <link rel="stylesheet" href="../../../../vendors/flag-icon-css/css/flag-icon.min.css" />
        <link rel="stylesheet" href="../../../../vendors/mdi/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="../../../../vendors/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../../../../vendors/simple-line-icons/css/simple-line-icons.css" />
        <link rel="stylesheet" href="../../../../vendors/feather/feather.css" />
        <link rel="stylesheet" href="../../../../vendors/css/vendor.bundle.base.css" />
        </div>

        <div className="content-wrapper">

            <div style={{marginTop : 20}} className='row col-12'>
                <div className="col-4 grid-margin">
                    <div style={{backgroundColor: "#DBE0F8"}} className="card card-statistics">
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                    <i className=" icon-pin text-primary mr-0 mr-sm-4 icon-md"></i>
                                    <div className="wrapper text-center text-sm-left">
                                        <p className="card-text mb-0">Ticket INT Total</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title mb-0"> {intT} </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-4 grid-margin">
                    <div style={{backgroundColor: "#C3CDFC"}} className="card card-statistics">
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="icon-clock text-primary mr-0 mr-sm-4 icon-md"></i>
                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">Ticket INT En Cours</p>
                                    <div className="fluid-container">
                                        <h3 className="card-title mb-0"> {intC} </h3>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4 grid-margin">
                    <div style={{backgroundColor: "#B8C3FB"}} className="card card-statistics">
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="icon-check text-primary mr-0 mr-sm-4 icon-md"></i>
                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">Ticket INT Résolu</p>
                                    <div className="fluid-container">
                                        <h3 className="card-title mb-0"> {intR} </h3>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
            
            <div className="row">
                    <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                        <div class="card text-center">
                            <div class="card-body">
                            <img src={avatar} class="img-lg rounded-circle mb-2" alt="profile"/>
                            <h4> {nom} {prenom} </h4>
                            <p class="text-muted">-- Technicien --</p>
                            <p class="mt-4 card-text">
                                WELCOME
                            </p>
                            <a href='/dashTech/profile'>
                                <button class="btn btn-primary btn-sm mt-3 mb-4">Voir Profile</button>
                            </a>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                      <div className="card">
                        <div className="card-body">
                        <PieChart style={{marginTop: -50}} width={1000} height={300}>
                            <Legend align='left'/>
                            <Pie
                              data={data}
                              cx={240}
                              cy={160}
                              innerRadius={60}
                              outerRadius={90}
                              fill="#8884d8"
                              paddingAngle={5}
                              dataKey="value"
                              label
                            >
                              {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>

                        </div>
                      </div>
                    </div>
            </div>

        </div>
    
    </>
  )
}
