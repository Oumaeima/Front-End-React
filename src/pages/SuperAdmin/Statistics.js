import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import NbUsersS from './NbUsersS';



const COLORS = ['#0088FE', '#7DCBF6', '#002F9E', '#3A09FC'];
export default function Statistics() {

  // tous les ticket part order 
    const [tous,setTous] = useState({
      nbTotal : ""
    })
    const { nbTotal } = tous;

    const loadTicketPO = () => {
      fetch(`http://localhost:5000/ticket/nbTicketsPartOrder`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setTous ({
                  update: true,
                  nbTotal: result[0].nbTotal,
              });
          })
          .catch((error) => console.log("error", error));
  };
// ticket part order nouveau
    const [nouveau,setNouveau] = useState({
      nbN : ""
    })
    const { nbN } = nouveau;

    const loadTicketPON = () => {
      fetch(`http://localhost:5000/ticket/nbTicketsPONouveau`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setNouveau ({
                  update: true,
                  nbN: result[0].nbN,
              });
          })
          .catch((error) => console.log("error", error));
    };

    // ticket part order en cours
    const [encours,setEncours] = useState({
      nbC : ""
    })
    const { nbC } = encours;

    const loadTicketPOC = () => {
      fetch(`http://localhost:5000/ticket/nbTicketsPOEnCours`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setEncours ({
                  update: true,
                  nbC: result[0].nbC,
              });
          })
          .catch((error) => console.log("error", error));
    };

        // ticket part order Livrée
        const [livree,setLivree] = useState({
          nbL : ""
        })
        const { nbL } = livree;
    
        const loadTicketPOL = () => {
          fetch(`http://localhost:5000/ticket/nbTicketsPOLivree`, {
              method: "GET",
          })
              .then((response) => response.json())
              .then((result) => {
                  console.log(result);
                  setLivree ({
                      update: true,
                      nbL: result[0].nbL,
                  });
              })
              .catch((error) => console.log("error", error));
        };

        const data = [
          { name: "totale", value: tous.nbTotal },
          { name: "nouveau", value: nouveau.nbN },
          { name: "en cours", value: encours.nbC },
          { name: "livrée", value: livree.nbL }
        ];
/**---------------------------------- INTERVENTION ---------------------------------------- */
  const [enCours,setEnCours] = useState({
    nb : ""
  })
  const { nb } = enCours;

  const loadTicketEnCours = () => {
    fetch(`http://localhost:5000/ticket/TicketEnCour`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setEnCours({
                update: true,
                nb: result[0].nb,
            });
        })
        .catch((error) => console.log("error", error));
};

    const [clos,setClos] = useState({
      nbclos : ""
    })
    const { nbclos } = clos;

    const loadTicketClos = () => {
      fetch(`http://localhost:5000/ticket/nbTicketsInterventionClos`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setClos({
                  update: true,
                  nbclos: result[0].nbclos,
              });
          })
          .catch((error) => console.log("error", error));
    };

    const [all,setAll] = useState({
      nball : ""
    })
    const { nball } = all;

    const loadAllIntTicket = () => {
      fetch(`http://localhost:5000/ticket/CountTicketsIntervenion`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setAll({
                  update: true,
                  nball: result[0].nball,
              });
          })
          .catch((error) => console.log("error", error));
    };

    const [resolu,setResolu] = useState({
      nbr : ""
    })
    const { nbr } = resolu;

    const loadIntResolu = () => {
      fetch(`http://localhost:5000/ticket/CountTicketsIntReslou`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setResolu({
                  update: true,
                  nbr: result[0].nbr,
              });              
          })
          .catch((error) => console.log("error", error));
    };

    /**---------------------------------- END INTERVENTION ---------------------------------------- */
    

      useEffect(() => {
        console.log("dataset: ",data);
        loadTicketEnCours();
        loadTicketClos()
        loadAllIntTicket()
        loadIntResolu()
        loadTicketPO()
        loadTicketPON()
        loadTicketPOC()
        loadTicketPOL()
      }, []);

      const colors = ['#0088FE', '#7DCBF6', '#002F9E', '#3A09FC'];

      const data2 = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000
        },
      ];

    const getPath = (x, y, width, height) => {
      return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
        y + height / 3
      } 
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
        x + width
      }, ${y + height}
      Z`;
    };

    const TriangleBar = (props) => {
      const { fill, x, y, width, height } = props;
    
      return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

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
                  <div className="row">
                    <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <h4 className="card-title">Ticket Part Order</h4>
                          
                          <PieChart style={{marginTop: -50}} width={1000} height={300}>
                            <Legend align='left'/>
                            <Pie
                              data={data}
                              cx={240}
                              cy={160}
                              innerRadius={60}
                              outerRadius={80}
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
                    <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
                      <div className="card">
                        <div className="card-body">
                                <NbUsersS/>
                        </div>
                      </div>
                    </div>
                  </div>
      
       <div style={{marginTop : 20}} className='row col-12'>

            <div className="col-3 grid-margin">
              <div className="card card-statistics">
                <div className="row">
                  
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className=" icon-pin text-primary mr-0 mr-sm-4 icon-md"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">Ticket Int Totale</p>
                            <div className="fluid-container">
                              <h3 className="card-title mb-0"> {nball} </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                  
                
                </div>
              </div>
            </div>
          

          
            <div className="col-3 grid-margin">
              <div className="card card-statistics">
                <div className="row">
                
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className="icon-clock text-primary mr-0 mr-sm-4 icon-md"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">Ticket Int en cours</p>
                            <div className="fluid-container">
                              <h3 name="nb" className="card-title mb-0"> {nb} </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                 
                
                </div>
              </div>
            </div>


            <div className="col-3 grid-margin">
              <div className="card card-statistics">
                <div className="row">
                
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className="icon-check text-primary mr-0 mr-sm-4 icon-md"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">Ticket Int Résolu</p>
                            <div className="fluid-container">
                              <h3 className="card-title mb-0"> {nbr} </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                 
                
                </div>
              </div>
            </div>



            <div className="col-3 grid-margin">
              <div className="card card-statistics">
                <div className="row">
                
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className=" icon-speedometer text-primary mr-0 mr-sm-4 icon-md"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">Ticket Int Clos</p>
                            <div className="fluid-container">
                              <h3 className="card-title mb-0"> {nbclos} </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                
                
                </div>
              </div>
            </div>


            <div style={{marginLeft : 420}} className="col-3 grid-margin">
              <div className="card card-statistics">
                <div className="row">
                
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className=" icon-social-youtube text-primary mr-0 mr-sm-4 icon-md"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">Ticket Int nouveau</p>
                            <div className="fluid-container">
                              <h3 className="card-title mb-0"> {(nball - nb) - (nbr + nbclos)} </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                 
                
                </div>
              </div>
            </div>


            <div>
              
            
              
            </div>

         

       </div>

</div>
    
    </>
  )
}
