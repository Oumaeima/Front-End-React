import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import avatar from '../../../assets/user.png'
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";

const COLORS = ['#0088FE', '#7DCBF6', '#002F9E', '#3A09FC'];
export default function StatisticsComm() {

    const id = JSON.parse(localStorage.getItem('id'));
    
    /**---------------------------------------- EN COURS ------------------------------------ */

  const [encours,setEncours] = useState({
    poC : ""
  })
  const { poC } = encours;

  const loadTicketEnCours = () => {
    fetch(`http://localhost:5000/ticket/countEnCoursTicketByComm/${id}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setEncours({
                update: true,
                poC: result[0].poC,
            });
        })
        .catch((error) => console.log("error", error));
};


/**---------------------------------------- ALL TICKET PO ------------------------------------ */

    const [all,setAll] = useState({
        po : ""
    })
    const { po } = all;

    const loadAllPOTicket = () => {
      fetch(`http://localhost:5000/ticket/countTicketComm/${id}`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setAll({
                  update: true,
                  po: result[0].po,
              });
          })
          .catch((error) => console.log("error", error));
    };
/**---------------------------------------- LIVREE ------------------------------------ */
    const [livree,setLivree] = useState({
            poL : ""
    })
    const { poL } = livree;

    const loadTicketLivree = () => {
        fetch(`http://localhost:5000/ticket/countTicketLivreeByComm/${id}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setLivree({
                    update: true,
                    poL: result[0].poL,
                });              
            })
            .catch((error) => console.log("error", error));
    };

    /**---------------------------------------- NOUVEAU ------------------------------------ */
    const [nouveau,setNouveau] = useState({
        poN : ""
    })
    const { poN } = nouveau;

    const loadTicketNouveau = () => {
    fetch(`http://localhost:5000/ticket/countTicketNouveauByComm/${id}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setNouveau({
                update: true,
                poN: result[0].poN,
            });              
        })
        .catch((error) => console.log("error", error));
    };

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
        loadAllPOTicket()
        loadTicketLivree()
        loadTicketNouveau()
        loadUser()
      }, []);

      const data = [
        { name: "Total", value: all.po },
        { name: "Nouveau", value: nouveau.poN },
        { name: "en cours", value: encours.poC },
        { name: "Livrée", value: livree.poL },
    ];

     
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
                <div className="col-3 grid-margin">
                    <div style={{backgroundColor: "#DBE0F8"}} className="card card-statistics">
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                    <i className=" icon-pin text-primary mr-0 mr-sm-4 icon-md"></i>
                                    <div className="wrapper text-center text-sm-left">
                                        <p className="card-text mb-0">Ticket PO Total</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title mb-0"> {po} </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3 grid-margin">
                    <div style={{backgroundColor: "#CDD3F1"}} className="card card-statistics">
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                    <i className="icon-disc text-primary mr-0 mr-sm-4 icon-md"></i>
                                    <div className="wrapper text-center text-sm-left">
                                        <p className="card-text mb-0">Ticket PO Nouveau</p>
                                        <div className="fluid-container">
                                            <h3 className="card-title mb-0"> {poN} </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3 grid-margin">
                    <div style={{backgroundColor: "#C3CDFC"}} className="card card-statistics">
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="icon-clock text-primary mr-0 mr-sm-4 icon-md"></i>
                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">Ticket PO En Cours</p>
                                    <div className="fluid-container">
                                        <h3 className="card-title mb-0"> {poC} </h3>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3 grid-margin">
                    <div style={{backgroundColor: "#B8C3FB"}} className="card card-statistics">
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="icon-check text-primary mr-0 mr-sm-4 icon-md"></i>
                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">Ticket PO Livrée</p>
                                    <div className="fluid-container">
                                        <h3 className="card-title mb-0"> {poL} </h3>
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
                            <p class="text-muted">-- Commercial --</p>
                            <p class="mt-4 card-text">
                                WELCOME
                            </p>
                            <a href='/dashCommercial/profile'>
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
