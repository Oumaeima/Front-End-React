import React from 'react'

export default function statistics() {
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
                  <h4 className="card-title">Pie chart</h4>
                  <canvas id="pieChart"></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-6 grid-margin grid-margin-lg-0 stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Scatter chart</h4>
                  <canvas id="scatterChart"></canvas>
                </div>
              </div>
            </div>
        </div>

        <div style={{marginTop : 20}} className="row">
            <div className="col-12 grid-margin">
              <div className="card card-statistics">
                <div className="row">
                  <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className="mdi mdi-account-multiple-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">New Users</p>
                            <div className="fluid-container">
                              <h3 className="card-title mb-0">65,650</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className="mdi mdi-checkbox-marked-circle-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">New Feedbacks</p>
                            <div className="fluid-container">
                              <h3 className="card-title mb-0">32,604</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className="mdi mdi-trophy-outline text-primary mr-0 mr-sm-4 icon-lg"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">Employees</p>
                            <div className="fluid-container">
                              <h3 className="card-title mb-0">17,583</h3>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="card-col col-xl-3 col-lg-3 col-md-3 col-6">
                    <div className="card-body">
                        <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row">
                          <i className="mdi mdi-target text-primary mr-0 mr-sm-4 icon-lg"></i>
                          <div className="wrapper text-center text-sm-left">
                            <p className="card-text mb-0">Total Sales</p>
                            <div className="fluid-container">
                              <h3 className="card-title mb-0">61,119</h3>
                            </div>
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
