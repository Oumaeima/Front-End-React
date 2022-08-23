import React, { useEffect, useState } from 'react'
import { PieChart, Pie, Legend, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";


export default function NbUsers() {

    const [client, setClient] = useState({
        clients: ""
    })
    const {clients} = client

    const loadNbClient = () =>{
        fetch(`http://localhost:5000/client/nbClient`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setClient({
                  update: true,
                  clients: result[0].clients,
              });              
          })
          .catch((error) => console.log("error", error));

    }

    // number of technicien
    const [technicien, setTechnicien] = useState({
      tech: ""
    })
    const {tech} = technicien

    const loadNbTechnisien = () =>{
        fetch(`http://localhost:5000/api/getNbTech`, {
          method: "GET",
      })
          .then((response) => response.json())
          .then((result) => {
              console.log(result);
              setTechnicien({
                  update: true,
                  tech: result[0].tech,
              });              
          })
          .catch((error) => console.log("error", error));

    }

       // number of dossier
      const [dossier, setDossier] = useState({
        dossiers: ""
      })
      const {dossiers} = dossier
  
      const loadNbDossier = () =>{
          fetch(`http://localhost:5000/dossier/countNbDossier`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result);
                setDossier({
                    update: true,
                    dossiers: result[0].dossiers,
                });              
            })
            .catch((error) => console.log("error", error));
  
      }

    // number of commercial
    const [commercial, setCommercial] = useState({
      comm: ""
    })
    const {comm} = commercial
        
    const loadNbCommercial = () =>{
      fetch(`http://localhost:5000/api/getNbCommercial`, {
          method: "GET",
      })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            setCommercial({
              update: true,
              comm: result[0].comm,
            });              
        })
          .catch((error) => console.log("error", error));
        
            }

  useEffect(()=>{
    loadNbClient()
    loadNbCommercial()
    loadNbDossier()
    loadNbTechnisien()
  },[])

  useEffect(() => {
    loadNbClient()
    loadNbCommercial()
    loadNbDossier()
    loadNbTechnisien()
  }, []);

    const colors = ['#0088FE', '#7DCBF6', '#002F9E', '#3A09FC'];

    const data2 = [
      {
        name: "Clients",
        total: client.clients,
      },
      {
        name: "Dossier",
        total: dossier.dossiers,
      },
      {
        name: "Technicien",
        total: technicien.tech,
      },
      {
        name: "Commercial",
        total: commercial.comm,
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
                            <BarChart
                            width={500}
                            height={300}
                            data={data2}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 5
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip/>
                            <Bar
                              dataKey="total"
                              fill="#8884d8"
                              shape={<TriangleBar />}
                              label={{ position: "top" }}
                            >
                              {data2.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                              ))}
                            </Bar>
                         
                        </BarChart>
    </>
  )
}
