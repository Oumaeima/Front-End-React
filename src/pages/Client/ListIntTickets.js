import React from 'react'

export default function ListTickets() {
  return (
    <>
        
    <div class="row grid-margin">
        <div class="col-12">
            <div class="card">
                <div class="card-body">   
                <button className="btn">+ Create new</button>                 
                    <form style={{paddingBottom : "50px"}} className="form-inline my-2 my-lg-0">
                        <input style={{marginLeft : "850px"}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" data-bs-dismiss="modal">Search</button>
                    </form>

                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">SLA</th>
                            <th scope="col">Date-Début</th>
                            <th scope="col">Etat</th>
                            <th scope="col">Tache</th>
                           
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                         <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Oumaima abidi</td>
                                <td>Varmeg</td>
                                <td>Commerce</td>
                                <td>
                                <button data-toggle="tooltip" data-placement="bottom" title="View" type="button" class="btn  btn-primary btn-rounded"><i class=" icon-user-female"></i></button>
                                <button data-toggle="tooltip" data-placement="bottom" title="Edit" style={{marginLeft : "5px"}} type="button" class="btn social-btn btn-info btn-rounded"><i class="icon-cursor-move"></i></button>
                                <button data-toggle="tooltip" data-placement="bottom" title="Delete"style={{marginLeft : "5px"}} type="button" class="btn social-btn btn-danger btn-rounded"><i class=" icon-trash"></i></button>
                                    
                                </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                                <td>Oumaima abidi</td>
                                <td>Varmeg</td>
                                <td>Commerce</td>
                               
                                
                                <td>
                                <button type="button" class="btn  btn-primary btn-rounded"><i class=" icon-user-female"></i></button>
                                <button style={{marginLeft : "5px"}} type="button" class="btn social-btn btn-info btn-rounded"><i class="icon-cursor-move"></i></button>
                                <button style={{marginLeft : "5px"}} type="button" class="btn social-btn btn-danger btn-rounded"><i class=" icon-trash"></i></button>
                                    
                                </td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                                <td>Oumaima abidi</td>
                                <td>Varmeg</td>
                                <td>Commerce</td>
                             
                               
                                <td>
                                <button type="button" class="btn  btn-primary btn-rounded"><i class=" icon-user-female"></i></button>
                                <button style={{marginLeft : "5px"}} type="button" class="btn social-btn btn-info btn-rounded"><i class="icon-cursor-move"></i></button>
                                <button style={{marginLeft : "5px"}} type="button" class="btn social-btn btn-danger btn-rounded"><i class=" icon-trash"></i></button>
                                    
                                </td>
                            </tr>

                            

                        </tbody>


{/*                         {record.map((name) =>
                        <tbody>
                            <tr class="bg-blue">
                            <td class="pt-3">{name.idclt}</td>
                                <td class="pt-3">{name.nom}{name.prenom}</td>
                                <td class="pt-3">{name.nomsociete}</td>
                                <td class="pt-3">{name.activitesociete}</td>
                                <td class="pt-3">{name.tel}</td>
                                <td class="pt-3">{name.email}</td>
                                <td>
                                    <button type="button" class="btn  btn-primary"><i class="icon-cursor-move"></i></button>
                                    <button style={{marginLeft : "5px"}} type="button" class="btn  btn-danger"
                                         onClick={() =>
                                        
                                            Swal.fire({
                                                title: 'Vous été Sur ?',
                                                text: "Sur Pour supprimer le Client : " + name.nom,
                                                 icon: 'warning',
                                                 showCancelButton: true,
                                                     confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                     confirmButtonText: 'Oui, Supprimer!'
                                                }).then((result) => {
                                                    if (result.isConfirmed) 
                                                    {
                                                       deleteRecord(name.idclt)
                                                     Swal.fire(
                                                            'Supprimer!',
                                                               'Votre Client a été Supprimer.',
                                                                  'success'
                                                              )
                                                            }
                                                    })
                                        }
                                    ><i class=" icon-trash"></i></button>
                                </td>
                            </tr>    
                        </tbody>
                    )} */}

                    </table>

                    <div className="col-md-4 col-sm-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <nav>
                                <ul className="pagination rounded-flat pagination-success">
                                    <li className="page-item"><a className="page-link" href="#"><i className="mdi mdi-chevron-left" /></a></li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                                    <li className="page-item"><a className="page-link" href="#"><i className="mdi mdi-chevron-right" /></a></li>
                                </ul>
                                </nav>
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
