import React from 'react'
import Navbar from '../Navbar'


export default function Profile() {
  return (
    <>
   
    <Navbar></Navbar>

      <div>

        <link rel="stylesheet" href="../../../../vendors/flag-icon-css/css/flag-icon.min.css" />
        <link rel="stylesheet" href="../../../../vendors/mdi/css/materialdesignicons.min.css" />
        <link rel="stylesheet" href="../../../../vendors/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="../../../../vendors/simple-line-icons/css/simple-line-icons.css" />
        <link rel="stylesheet" href="../../../../vendors/feather/feather.css" />
        <link rel="stylesheet" href="../../../../vendors/css/vendor.bundle.base.css" />
        <link rel="stylesheet" href="../../../../vendors/dropify/dropify.min.css" />
        <link rel="stylesheet" href="../../../../css/vertical-layout-dark/style.css" />
 
      </div>


  
        <div className="content-wrapper">
          <div className="row user-profile">
            <div className="col-lg-4 side-left d-flex align-items-stretch">
              <div className="row">
                <div className="col-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body avatar">
                      <h4 className="card-title">Info</h4>
                      <img src="../../../../images/faces/face6.jpg" alt="" />
                      <p className="name">John Doe</p>
                      <p className="designation">-  UI/UX  -</p>
                
                    </div>
                  </div>
                </div>
                <div className="col-12 stretch-card">
                  <div className="card">
                    <div className="card-body overview">
                      
                      <div className="wrapper about-user">
                        <h4 className="card-title mt-4 mb-3">About</h4>
                        <h6>Téléphone: </h6>
                        <h6>Email: </h6>
                        <h6>Adresse: </h6>
                      </div>
                      <div className="info-links">
                        <a className="website" href="http://bootstrapdash.com/">
                          <i className="mdi mdi-earth text-gray" />
                          <span>http://bootstrapdash.com/</span>
                        </a>
                        <a className="social-link" href="#">
                          <i className="mdi mdi-facebook text-gray" />
                          <span>https://www.facebook.com/johndoe</span>
                        </a>
                        <a className="social-link" href="#">
                          <i className="mdi mdi-linkedin text-gray" />
                          <span>https://www.linkedin.com/johndoe</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 side-right stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="wrapper d-block d-sm-flex align-items-center justify-content-between">
                    <h4 className="card-title mb-0">Details</h4>
                    <ul className="nav nav-tabs tab-solid tab-solid-primary mb-0" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a className="nav-link active" id="info-tab" data-toggle="tab" href="#info" role="tab" aria-controls="info" aria-expanded="true">Info</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="avatar-tab" data-toggle="tab" href="#avatar" role="tab" aria-controls="avatar">Avatar</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" id="security-tab" data-toggle="tab" href="#security" role="tab" aria-controls="security">Security</a>
                      </li>
                    </ul>
                  </div>
                  <div className="wrapper">
                    <hr />
                    <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="info" role="tabpanel" aria-labelledby="info">
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Change user name" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="designation">Designation</label>
                            <input type="text" className="form-control" id="designation" placeholder="Change designation" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input type="text" className="form-control" id="mobile" placeholder="Change mobile number" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Change email address" />
                          </div>
                          <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <textarea name="address" id="address" rows={6} className="form-control" placeholder="Change address" defaultValue={""} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="website">Website URL</label>
                            <input type="text" className="form-control" id="website" placeholder="Change website url" />
                          </div>
                          <div className="form-group mt-5">
                            <button type="submit" className="btn btn-success mr-2">Update</button>
                            <button className="btn btn-outline-danger">Cancel</button>
                          </div>
                        </form>
                      </div>{/* tab content ends */}
                      <div className="tab-pane fade" id="avatar" role="tabpanel" aria-labelledby="avatar-tab">
                        <div className="wrapper mb-5 mt-4">
                          <span className="badge badge-warning text-white">Note : </span>
                          <p className="d-inline ml-3 text-muted">Image size is limited to not greater than 1MB .</p>
                        </div>
                        <form action="#">
                          <input type="file" className="dropify" data-max-file-size="1mb" data-default-file="../../../../images/faces/face6.jpg" />
                          <div className="form-group mt-5">
                            <button type="submit" className="btn btn-success mr-2">Update</button>
                            <button className="btn btn-outline-danger">Cancel</button>
                          </div>
                        </form>
                      </div>
                      <div className="tab-pane fade" id="security" role="tabpanel" aria-labelledby="security-tab">
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="change-password">Change password</label>
                            <input type="password" className="form-control" id="change-password" placeholder="Enter you current password" />
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" id="new-password" placeholder="Enter you new password" />
                          </div>
                          <div className="form-group mt-5">
                            <button type="submit" className="btn btn-success mr-2">Update</button>
                            <button className="btn btn-outline-danger">Cancel</button>
                          </div>
                        </form>
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
