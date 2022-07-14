import React from 'react'
import Footer from './Footer'
import Statistics from './Statistics'
import Profile from './Profile'



export default function Sidebar() {
  return (
 <>
<div>
  <link rel="stylesheet" href="../../vendors/flag-icon-css/css/flag-icon.min.css" />
  <link rel="stylesheet" href="../../vendors/mdi/css/materialdesignicons.min.css" />
  <link rel="stylesheet" href="../../vendors/font-awesome/css/font-awesome.min.css" />
  <link rel="stylesheet" href="../../vendors/simple-line-icons/css/simple-line-icons.css" />
  <link rel="stylesheet" href="../../vendors/feather/feather.css" />
  <link rel="stylesheet" href="../../vendors/css/vendor.bundle.base.css" />
  <link rel="stylesheet" href="../../vendors/font-awesome/css/font-awesome.min.css" />
  <link rel="stylesheet" href="../../vendors/jquery-bar-rating/fontawesome-stars.css" />
  <link rel="stylesheet" href="../../css/vertical-layout-dark/style.css" />

</div>

 <div class="container-fluid page-body-wrapper">


        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
                <li className="nav-item nav-profile">
                    <div className="nav-link">
                    <div className="profile-image">
                       <a href='/profile'> <img src="../../images/faces/face10.jpg" alt=""/></a>
                        <span className="online-status online"></span>
                    </div>
                    <div className="profile-name">
                        <p className="name">
                        Marina Michel
                        </p>
                        <p className="designation">
                        Super Admin
                        </p>
                    </div>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="index.html">
                    <i className="icon-menu menu-icon"></i>
                    <span className="menu-title">Dashboard</span>

                    </a>
                </li>
               {/*  <li className="nav-item">
                    <a className="nav-link" href="pages/widgets/widgets.html">
                    <i className="icon-handbag menu-icon"></i>
                    <span className="menu-title">Widgets</span>
                    </a>
                </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#page-layouts" aria-expanded="false" aria-controls="page-layouts">
                    <i className="icon-check menu-icon"></i>
                    <span className="menu-title">Page Layouts</span>
                    </a>
                    <div className="collapse" id="page-layouts">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/layout/rtl-layout.html">RTL</a></li>
                    </ul>
                    </div>
                </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                    <i className="icon-target menu-icon"></i>
                    <span className="menu-title">Basic UI Elements</span>
                    </a>
                    <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/accordions.html">Accordions</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/badges.html">Badges</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/breadcrumbs.html">Breadcrumbs</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/modals.html">Modals</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/progress.html">Progress bar</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/pagination.html">Pagination</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/tabs.html">Tabs</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/tooltips.html">Tooltips</a></li>
                    </ul>
                    </div>
                </li> */}
         {/*        <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#ui-advanced" aria-expanded="false" aria-controls="ui-advanced">
                    <i className="icon-cup menu-icon"></i>
                    <span className="menu-title">Advanced Elements</span>
                    </a>
                    <div className="collapse" id="ui-advanced">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/dragula.html">Dragula</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/clipboard.html">Clipboard</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/context-menu.html">Context menu</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/slider.html">Sliders</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/carousel.html">Carousel</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/colcade.html">Colcade</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/ui-features/loaders.html">Loaders</a></li>
                    </ul>
                    </div>
                </li> */}
  {/*               <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
                    <i className="icon-flag menu-icon"></i>
                    <span className="menu-title">Form elements</span>
                    </a>
                    <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"><a className="nav-link" href="pages/forms/basic_elements.html">Basic Elements</a></li>
                        <li className="nav-item"><a className="nav-link" href="pages/forms/advanced_elements.html">Advanced Elements</a></li>
                        <li className="nav-item"><a className="nav-link" href="pages/forms/validation.html">Validation</a></li>
                        <li className="nav-item"><a className="nav-link" href="pages/forms/wizard.html">Wizard</a></li>
                    </ul>
                    </div>
                </li> */}
             {/*    <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#editors" aria-expanded="false" aria-controls="editors">
                    <i className="icon-anchor menu-icon"></i>
                    <span className="menu-title">Editors</span>
                    </a>
                    <div className="collapse" id="editors">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"><a className="nav-link" href="pages/forms/text_editor.html">Text editors</a></li>
                        <li className="nav-item"><a className="nav-link" href="pages/forms/code_editor.html">Code editors</a></li>
                    </ul>
                    </div>
                </li> */}
         {/*        <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
                    <i className="icon-chart menu-icon"></i>
                    <span className="menu-title">Charts</span>
                    </a>
                    <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/charts/chartjs.html">ChartJs</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/charts/morris.html">Morris</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/charts/flot-chart.html">Flot</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/charts/google-charts.html">Google charts</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/charts/sparkline.html">Sparkline js</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/charts/c3.html">C3 charts</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/charts/chartist.html">Chartists</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/charts/justGage.html">JustGage</a></li>
                    </ul>
                    </div>
                </li> */}
                 <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#tables" aria-expanded="false" aria-controls="tables">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Administration</span>
                    </a>
                    <div className="collapse" id="tables">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/tables/basic-table.html">Gestion Client</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/tables/data-table.html">Gestion Admin</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/tables/js-grid.html">Gestion Employer</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/tables/js-grid.html">Gestion Dossier</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/tables/sortable-table.html">Gestion Ticket Intervention</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/tables/js-grid.html">Gestion Ticket Offsite</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/tables/js-grid.html">Gestion Ticket Par Order</a></li>
                    </ul>
                    </div>
                </li>
                {/*<li className="nav-item">
                    <a className="nav-link" href="pages/ui-features/popups.html">
                    <i className="icon-diamond menu-icon"></i>
                    <span className="menu-title">Popups</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/ui-features/notifications.html">
                    <i className="icon-bell menu-icon"></i>
                    <span className="menu-title">Notifications</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
                    <i className="icon-globe menu-icon"></i>
                    <span className="menu-title">Icons</span>
                    </a>
                    <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/icons/flag-icons.html">Flag icons</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/icons/font-awesome.html">Font Awesome</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/icons/simple-line-icon.html">Simple line icons</a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/icons/themify.html">Themify icons</a></li>
                    </ul>
                    </div>
            </li> */}
                <li className="nav-item">
                    <a className="nav-link"  href="index.html" >
                    <i className="icon-location-pin menu-icon"></i>
                    <span className="menu-title">Maps</span>
                    </a>
                   
                </li>
              {/*  <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                    <i className="icon-user menu-icon"></i>
                    <span className="menu-title">User Pages</span>
                    </a>
                    <div className="collapse" id="auth">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
                    </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#error" aria-expanded="false" aria-controls="error">
                    <i className="icon-support menu-icon"></i>
                    <span className="menu-title">Error pages</span>
                    </a>
                    <div className="collapse" id="error">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                    </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#general-pages" aria-expanded="false" aria-controls="general-pages">
                    <i className="icon-user menu-icon"></i>
                    <span className="menu-title">General Pages</span>
                    </a>
                    <div className="collapse" id="general-pages">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/landing-page.html"> Landing Page </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/profile.html"> Profile </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/faq.html"> FAQ </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/faq-2.html"> FAQ 2 </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/news-grid.html"> News grid </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/timeline.html"> Timeline </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/search-results.html"> Search Results </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/portfolio.html"> Portfolio </a></li>
                    </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="collapse" href="#e-commerce" aria-expanded="false" aria-controls="e-commerce">
                    <i className="icon-briefcase menu-icon"></i>
                    <span className="menu-title">E-commerce</span>
                    </a>
                    <div className="collapse" id="e-commerce">
                    <ul className="nav flex-column sub-menu">
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/invoice.html"> Invoice </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/pricing-table.html"> Pricing Table </a></li>
                        <li className="nav-item"> <a className="nav-link" href="pages/samples/orders.html"> Orders </a></li>
                    </ul>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/apps/email.html">
                    <i className="icon-envelope menu-icon"></i>
                    <span className="menu-title">E-mail</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/apps/calendar.html">
                    <i className="icon-calendar menu-icon"></i>
                    <span className="menu-title">Calendar</span>
                    </a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" href="pages/apps/todo.html">
                    <i className="icon-clock menu-icon"></i>
                    <span className="menu-title">Todo List</span>
                    </a>
                </li>
            


            </ul>
        </nav>

            {/* partial */}

           
    <div className="main-panel">
        <div className="content-wrapper">

             

        </div>
       
       <Footer></Footer>
    </div>

    </div>
 </>



  )
}
