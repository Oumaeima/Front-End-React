import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";



const COLORS = ['#0088FE', '#7DCBF6', '#002F9E', '#3A09FC'];
export default function POStat() {

    const id = JSON.parse(localStorage.getItem('id'));

    /**---------------------------------------- EN COURS ------------------------------------ */

  const [encours,setEncours] = useState({
    poCours : ""
  })
  const { poCours } = encours;

  const loadTicketEnCours = () => {
    fetch(`http://localhost:5000/ticket/countTicketEncours/${id}`, {
        method: "GET",
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setEncours({
                update: true,
                poCours: result[0].poCours,
            });
        })
        .catch((error) => console.log("error", error));
};

/**---------------------------------------- CLOS ------------------------------------ */

    const [clos,setClos] = useState({
        poC : ""
    })
    const { poC } = clos;

    const loadTicketPOClos = () => {
      fetch(`http://localhost:5000/ticket/countTicketStatus/${id}`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setClos({
                  update: true,
                  poC: result[0].poC,
              });
          })
          .catch((error) => console.log("error", error));
    };

/**---------------------------------------- ALL TICKET INT ------------------------------------ */

    const [all,setAll] = useState({
        po : ""
    })
    const { po } = all;

    const loadAllPOTicket = () => {
      fetch(`http://localhost:5000/ticket/countTicketClient/${id}`, {
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
/**---------------------------------------- NOUVEAU ------------------------------------ */
    const [nouveau,setNouveau] = useState({
        poN : ""
    })
    const { poN } = nouveau;

    const loadTicketNouveau = () => {
      fetch(`http://localhost:5000/ticket/countTicketN/${id}`, {
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
 

      useEffect(() => {
        console.log("dataset: ",data);
        loadTicketEnCours();
        loadTicketPOClos()
        loadAllPOTicket()
        loadTicketNouveau()
      }, []);

      const data = [
        { name: "total", value: all.po },
        { name: "clos", value: clos.poC },
        { name: "en cours", value: encours.poCours},
        { name: "nouveau", value: nouveau.poN}
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
          
    
    </>
  )
}
