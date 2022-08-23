import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import POStat from './POStat';


export default function StatisticsClient() {

    const id = JSON.parse(localStorage.getItem('id'));
    
    /**---------------------------------------- EN COURS ------------------------------------ */

  const [encours,setEncours] = useState({
    intC : ""
  })
  const { intC } = encours;

  const loadTicketEnCours = () => {
    fetch(`http://localhost:5000/ticket/countIntEnCours/${id}`, {
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

/**---------------------------------------- CLOS ------------------------------------ */

    const [clos,setClos] = useState({
        intClos : ""
    })
    const { intClos } = clos;

    const loadTicketIntClos = () => {
      fetch(`http://localhost:5000/ticket/countIntClos/${id}`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setClos({
                  update: true,
                  intClos: result[0].intClos,
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
      fetch(`http://localhost:5000/ticket/countInt/${id}`, {
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
      fetch(`http://localhost:5000/ticket/countIntResolu/${id}`, {
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
 

      useEffect(() => {
        console.log("dataset: ",data);
        loadTicketEnCours();
        loadTicketIntClos()
        loadAllIntTicket()
        loadTicketResolu()
      }, []);

      const data = [
        { name: "total INT", value: all.intT },
        { name: "total PO", value: clos.intClos },
        { name: "INT clos", value: encours.intC},
        { name: "PO clos", value: resolu.intR }
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

                <div className="col-3 grid-margin">
                    <div style={{backgroundColor: "#CCD4FA"}} className="card card-statistics">
                        <div className="row">
                            <div className="card-body">
                                <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                                <i className="icon-speedometer text-primary mr-0 mr-sm-4 icon-md"></i>
                                <div className="wrapper text-center text-sm-left">
                                    <p className="card-text mb-0">Ticket INT Clos</p>
                                    <div className="fluid-container">
                                        <h3 name="nb" className="card-title mb-0"> {intClos} </h3>
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

                <div className="col-3 grid-margin">
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
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Ticket Part Order</h4>
                            <POStat/>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                      <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Accés Rapide</h4>
                            <div style={{marginTop : 50}} className="fluid-container">
                                <div className="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                                    <div className="col-md-1">
                                        <i className=' icon-control-end'/>
                                    </div>
                                    <div className="ticket-details col-md-9">
                                        <div className="d-flex">
                                            <p className="text-dark font-weight-bold mr-2 mb-0 no-wrap">Voir profile</p>
                                        </div>
                                    </div>
                                    <div className="ticket-actions col-md-2">
                                        <div style={{marginLeft : -20}} className="btn-group dropdown">
                                            <Link to="/dashClient/profile">
                                                <button type="button" className="btn btn-primary btn-sm" onClick='/dashClient/profile'>
                                                    Voir
                                                    </button>
                                            </Link>   
                                        </div>
                                    </div>
                                </div>
                                <div className="row ticket-card mt-3 pb-2 border-bottom pb-3 mb-3">
                                    <div className="col-md-1">
                                        <i className='icon-cloud-download'/>
                                    </div>
                                    <div className="ticket-details col-md-9">
                                        <div className="d-flex">
                                            <p className="text-dark font-weight-bold mr-2 mb-0 no-wrap">Voir Ticket d'intervention</p>
                                        </div>
                                    </div>
                                    <div className="ticket-actions col-md-2">
                                        <div style={{marginLeft : -20}} className="btn-group dropdown">
                                            <Link to="/dashClient/intervention">
                                                <button type="button" className="btn btn-primary btn-sm" onClick='/dashClient/profile'>
                                                    Voir
                                                    </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="row ticket-card mt-3">
                                    <div className="col-md-1">
                                        <i className='icon-map'/>
                                    </div>
                                    <div className="ticket-details col-md-9">
                                        <div className="d-flex">
                                            <p className="text-dark font-weight-bold mr-2 mb-0 no-wrap">Voir Ticket part order</p>
                                        </div>
                                    </div>
                                    <div className="ticket-actions col-md-2">
                                        <div style={{marginLeft : -20}} className="btn-group dropdown">
                                            <Link to="/dashClient/partOrder">
                                                <button type="button" className="btn btn-primary btn-sm" onClick='/dashClient/profile'>
                                                    Voir
                                                    </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                      </div>
                    </div>
            </div>

        </div>
    
    </>
  )
}
