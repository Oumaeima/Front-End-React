
import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Connexion from './pages/Connexion'
import DashSuperAdmin from './pages/SuperAdmin/DashSuperAdmin'
import Profile from './pages/SuperAdmin/Profile'
import Statistics from './pages/SuperAdmin/Statistics'
import ClientManagment from './pages/SuperAdmin/client/ClientManagment';
import AdminManagment from './pages/SuperAdmin/admin/AdminManagment';
import EmployeeManagment from './pages/SuperAdmin/user/EmployeeManagment';
import DossierManagment from './pages/SuperAdmin/dossier/DossierManagment';
import TicketsManagmentInt from './pages/SuperAdmin/tickets/TicketsManagmentInt';
import DashClient from './pages/Client/DashClient';
import DashAdmin from './pages/Admin/DashAdmin';
import StatisticsAdmin from './pages/Admin/Statistics'
import ClientManagmentA from './pages/Admin/client/ClientManagment'
import EmployeeManagmentA from './pages/Admin/user/EmployeeManagment'
import DossierManagmentA from './pages/Admin/dossier/DossierManagment'
import TicketsManagmentIntA from './pages/Admin/tickets/TicketsManagmentInt'
import ProfileA from './pages/Admin/ProfileA'
import ListIntTickets from './pages/Client/ListIntTickets';
import LoginSuperAdmin from './pages/SuperAdmin/LoginSuperAdmin'
import LoginAdmin from './pages/Admin/LoginAdmin';
import LoginClient from './pages/Client/LoginClient';
import EditTicketsInt from './pages/SuperAdmin/tickets/EditTicketsInt';
import EditDossier from './pages/SuperAdmin/dossier/EditDossier';
import EditClient from './pages/Admin/client/EditClient';
import EditDossierAdmin from './pages/Admin/dossier/EditDossierAdmin';
import EditTicketIntAdmin from './pages/Admin/tickets/EditTicketIntAdmin';
import EditEmployeeAdmin from './pages/Admin/user/EditEmployeeAdmin';
import ViewTicketIntAdmin from './pages/Admin/tickets/ViewTicketIntAdmin';
import ViewTicketInt from './pages/SuperAdmin/tickets/ViewTicketInt';
import ViewDossier from './pages/Admin/dossier/ViewDossier';
import IntManagement from './pages/Client/TicketInt/IntManagement';
import CreeTicket from './pages/Client/TicketInt/CreeTicket';


function App() {
  return ( 
   
    <Routes>
       <Route path='/'  index element={<Home/>}/>
       <Route path='/Connexion' exact element={<Connexion/>} />
       <Route path='/LoginSuperAdmin' exact element={<LoginSuperAdmin/>}/>
       <Route path='/LoginAdmin' exact element={<LoginAdmin/>}/>
       <Route path='/LoginClient' exact element={<LoginClient/>}/>


       ## dashboard SuperAdmin
       <Route path='/dashSuperAdmin' exact element={<DashSuperAdmin/>}>
          <Route index element={<Statistics/>}/>
          <Route path='/dashSuperAdmin/profile'  element={<Profile/>}/>
          <Route path='/dashSuperAdmin/gerer_client'  element={<ClientManagment/>}/>
          <Route path='/dashSuperAdmin/gerer_admin'  element={<AdminManagment/>}/>
          <Route path='/dashSuperAdmin/gerer_employee'  element={<EmployeeManagment/>}/>
          <Route path='/dashSuperAdmin/gerer_dossier'  element={<DossierManagment/>}/>
          <Route path='/dashSuperAdmin/gerer_ticketint'  element={<TicketsManagmentInt/>}/>
          <Route path="/dashSuperAdmin/Edit_ticket/editID/:id"  element={<EditTicketsInt/>}/>
          <Route path="/dashSuperAdmin/Edit_Dossier/editID/:id" element={<EditDossier/>} />
          <Route path='/dashSuperAdmin/view_ticketint/ticketID/:id' exact  element={<ViewTicketInt/>}/>
       </Route>


       ## dashboard client
       <Route path='/dashClient' exact element={<DashClient/>}>
         <Route path='/dashClient/intervention' exact element={<IntManagement/>} />
         <Route path='/dashClient/cree_int' exact element={<CreeTicket/>} />
       </Route>

       ## dashboard admin
       <Route path='/dashAdmin' exact element={<DashAdmin/>}>
          <Route index element={<StatisticsAdmin/>}/>
          <Route path='/dashAdmin/profileA' exact element={<ProfileA/>}/>
          <Route path='/dashAdmin/gerer_client' exact element={<ClientManagmentA/>}/>
          <Route path='/dashAdmin/gerer_employee' exact element={<EmployeeManagmentA/>}/>
          <Route path='/dashAdmin/gerer_dossier' exact element={<DossierManagmentA/>}/>
          <Route path='/dashAdmin/gerer_ticketint' exact  element={<TicketsManagmentIntA/>}/>
          <Route path='/dashAdmin/Edit_Client/editID/:id' exact element={<EditClient/>}/>
          <Route path='/dashAdmin/view_dossier/:id' exact element={<ViewDossier/>}/>
          <Route path="/dashAdmin/Edit_Dossier/editID/:id" element={<EditDossierAdmin/>} />
          <Route path="/dashAdmin/Edit_ticket/editID/:id"  element={<EditTicketIntAdmin/>}/>
          <Route path="/dashAdmin/Edit_User/editID/:id"  element={<EditEmployeeAdmin/>}/>
          <Route path='/dashAdmin/view_ticketint/ticketID/:id' exact  element={<ViewTicketIntAdmin/>}/>
       </Route>

       
    </Routes>
   
  );
}

export default App;
