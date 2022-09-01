
import React from 'react'
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Connexion from './pages/Connexion'
import DashSuperAdmin from './pages/SuperAdmin/DashSuperAdmin'
import Profile from './pages/SuperAdmin/Profile'
import Statistics from './pages/SuperAdmin/Statistics'
import DashClient from './pages/Client/DashClient';
import DashAdmin from './pages/Admin/DashAdmin';
import StatisticsAdmin from './pages/Admin/Statistics'
import ClientManagmentA from './pages/Admin/client/ClientManagment'
import EmployeeManagmentA from './pages/Admin/user/Technicien/EmployeeManagment'
import DossierManagmentA from './pages/Admin/dossier/DossierManagment'
import TicketsManagmentIntA from './pages/Admin/tickets/TicketsManagmentInt'
import ProfileA from './pages/Admin/ProfileA'
import LoginSuperAdmin from './pages/SuperAdmin/LoginSuperAdmin'
import LoginAdmin from './pages/Admin/LoginAdmin';
import LoginClient from './pages/Client/LoginClient';
import EditClient from './pages/Admin/client/EditClient';
import EditDossierAdmin from './pages/Admin/dossier/EditDossierAdmin';
import EditTicketIntAdmin from './pages/Admin/tickets/EditTicketIntAdmin';
import EditEmployeeAdmin from './pages/Admin/user/Technicien/EditEmployeeAdmin';
import ViewTicketIntAdmin from './pages/Admin/tickets/ViewTicketIntAdmin';
import ViewDossier from './pages/Admin/dossier/ViewDossier';
import IntManagement from './pages/Client/TicketInt/IntManagement';
import DashTech from './pages/Employe/Technicien/DashTech';
import Login from './pages/Login';
import TicketManagement from './pages/Employe/Technicien/TicketManagement';
import ViewTicket from './pages/Employe/Technicien/ViewTicket';
import EditTicket from './pages/Client/TicketInt/EditTicket';
import ViewTicketClient from './pages/Client/TicketInt/ViewTicketClient';
import ViewClient from './pages/Admin/client/ViewClient';
import POManagement from './pages/Client/TicketPO/POManagement';
import CommercialManagment from './pages/Admin/user/Commercial/CommercialManagment';
import EditCommercial from './pages/Admin/user/Commercial/EditCommercial';
import ViewPO from './pages/Client/TicketPO/ViewPO';
import EditPO from './pages/Client/TicketPO/EditPO';
import DashCom from './pages/Employe/Commercial/DashCom';
import POManagementCom from './pages/Employe/Commercial/POManagementCom';
import ViewPOComm from './pages/Employe/Commercial/ViewPOComm';
import ViewTicketPOAdmin from './pages/Admin/tickets/ViewTicketPOAdmin';
import StatisticsClient from './pages/Client/StatisticsClient';
import ProfileClient from './pages/Client/ProfileClient';
import StatisticsTech from './pages/Employe/Technicien/StatisticsTech';
import ProfileTech from './pages/Employe/Technicien/ProfileTech';
import StatisticsComm from './pages/Employe/Commercial/StatisticsComm';
import ProfileComm from './pages/Employe/Commercial/ProfileComm';
import ClientManagmentS from './pages/SuperAdmin/client/ClientManagmentS';
import EditClientS from './pages/SuperAdmin/client/EditClientS';
import ViewClientS from './pages/SuperAdmin/client/ViewClientS';
import DossierManagementS from './pages/SuperAdmin/dossier/DossierManagementS';
import ViewDossierS from './pages/SuperAdmin/dossier/ViewDossierS';
import EditDossierS from './pages/SuperAdmin/dossier/EditDossierS';
import TicketManagementS from './pages/SuperAdmin/tickets/intervention/TicketManagementS';
import ViewTicketS from './pages/SuperAdmin/tickets/intervention/ViewTicketS';
import EditTicketS from './pages/SuperAdmin/tickets/intervention/EditTicketS';
import ViewTicketPOS from './pages/SuperAdmin/tickets/partOrder/ViewTicketPOS';
import CommManagementS from './pages/SuperAdmin/users/commercial/CommManagementS';
import EditCommS from './pages/SuperAdmin/users/commercial/EditCommS';
import EmployeeManagementS from './pages/SuperAdmin/users/technicien/EmployeeManagementS';
import EditEmployeeS from './pages/SuperAdmin/users/technicien/EditEmployeeS';
import AdminManagment from './pages/SuperAdmin/admin/AdminManagment';
import EditAdmin from './pages/SuperAdmin/admin/EditAdmin';
import PrivateRoute from './PrivateRoute';
import ErrorPage from './pages/ErrorPage';
import EditOffre from './pages/Employe/Commercial/EditOffre';



function App() {
  return ( 
   
    <Routes>
       <Route path='/'  index element={<Home/>}/>
       <Route path='/Connexion' exact element={<Connexion/>} />
       <Route path='/LoginSuperAdmin' exact element={<LoginSuperAdmin/>}/>
       <Route path='/LoginAdmin' exact element={<LoginAdmin/>}/>
       <Route path='/LoginClient' exact element={<LoginClient/>}/>
       <Route path='/Login' exact element={<Login/>}/>
       <Route path='/*' exact element={<ErrorPage/>}/>


       ## dashboard SuperAdmin
       <Route path='/dashSuperAdmin' exact element={<DashSuperAdmin/>}>
          <Route index element={<Statistics/>}/>
          <Route path='/dashSuperAdmin/profile'  element={<Profile/>}/>
          <Route path='/dashSuperAdmin/admin'  element={<AdminManagment/>}/>
          <Route path='/dashSuperAdmin/Edit_admin/:id'  element={<EditAdmin/>}/>
          <Route path='/dashSuperAdmin/clients'  element={<ClientManagmentS/>}/>
          <Route path='/dashSuperAdmin/Edit_Client/:id' exact element={<EditClientS/>}/>
          <Route path='/dashSuperAdmin/view_client/:id' element={<ViewClientS/>}/>
          <Route path='/dashSuperAdmin/dossiers' exact element={<DossierManagementS/>}/>
          <Route path='/dashSuperAdmin/view_dossier/:id' exact element={<ViewDossierS/>}/>
          <Route path="/dashSuperAdmin/Edit_Dossier/:id" element={<EditDossierS/>} />
          <Route path='/dashSuperAdmin/gerer_ticketint' exact  element={<TicketManagementS/>}/>
          <Route path='/dashSuperAdmin/view_ticketint/:id' element={<ViewTicketS/>}/>
          <Route path="/dashSuperAdmin/Edit_ticket/:id"  element={<EditTicketS/>}/>
          <Route path='/dashSuperAdmin/view_ticketPO/:id' element={<ViewTicketPOS/>}/>
          <Route path='/dashSuperAdmin/commercials' exact element={<CommManagementS/>}/>
          <Route path="/dashSuperAdmin/Edit_commercial/:id"  element={<EditCommS/>}/>
          <Route path='/dashSuperAdmin/techniciens' exact element={<EmployeeManagementS/>}/>
          <Route path="/dashSuperAdmin/Edit_tech/:id"  element={<EditEmployeeS/>}/>
       </Route>


       ## dashboard admin
       
          <Route path='/dashAdmin' exact element={<DashAdmin/>}>
              <Route index element={<StatisticsAdmin/>}/>
              <Route path='/dashAdmin/profileA' exact element={<ProfileA/>}/>
              <Route path='/dashAdmin/gerer_client' exact element={<ClientManagmentA/>}/>
              <Route path='/dashAdmin/gerer_technicien' exact element={<EmployeeManagmentA/>}/>
              <Route path='/dashAdmin/gerer_commercial' exact element={<CommercialManagment/>}/>
              <Route path='/dashAdmin/gerer_dossier' exact element={<DossierManagmentA/>}/>
              <Route path='/dashAdmin/gerer_ticketint' exact  element={<TicketsManagmentIntA/>}/>
              <Route path='/dashAdmin/Edit_Client/editID/:id' exact element={<EditClient/>}/>
              <Route path='/dashAdmin/view_dossier/:id' exact element={<ViewDossier/>}/>
              <Route path="/dashAdmin/Edit_Dossier/editID/:id" element={<EditDossierAdmin/>} />
              <Route path="/dashAdmin/Edit_ticket/editID/:id"  element={<EditTicketIntAdmin/>}/>
              <Route path="/dashAdmin/Edit_User/editID/:id"  element={<EditEmployeeAdmin/>}/>
              <Route path="/dashAdmin/Edit_commercial/:id"  element={<EditCommercial/>}/>
              <Route path='/dashAdmin/view_ticketint/ticketID/:id' element={<ViewTicketIntAdmin/>}/>
              <Route path='/dashAdmin/view_client/:id' element={<ViewClient/>}/>
              <Route path='/dashAdmin/view_ticketPO/:id' element={<ViewTicketPOAdmin/>}/>
          </Route>
      
       


       ## dashboard client
        
          <Route path='/dashClient' exact element={<DashClient/>}>
            <Route index element={<StatisticsClient/>}/>
            <Route path='/dashClient/profile' exact element={<ProfileClient/>} />
            <Route path='/dashClient/intervention' exact element={<IntManagement/>} />
            <Route path='/dashClient/partOrder' exact element={<POManagement/>} />
            <Route path='/dashClient/view/:id' exact element={<ViewTicketClient/>} />
            <Route path='/dashClient/view-po/:id' exact element={<ViewPO/>} />
            <Route path='/dashClient/edit/:id' exact element={<EditTicket/>} />
            <Route path='/dashClient/edit-po/:id' exact element={<EditPO/>} />
          </Route>
       

       ## dashboard Technicien
       <Route path='/dashTech' exact element={<DashTech/>}>
        <Route index element={<StatisticsTech/>}/>
        <Route path='/dashTech/profile' exact element={<ProfileTech/>} />
        <Route path="/dashTech/intervention" exact element={<TicketManagement/>} />
        <Route path='/dashTech/view/:id' exact element={<ViewTicket/>} />
       </Route>


       ## dashboard Commercial
       <Route path='/dashCommercial' exact element={<DashCom/>}>
        <Route index element={<StatisticsComm/>}/>
        <Route path='/dashCommercial/profile' exact element={<ProfileComm/>} />
        <Route path="/dashCommercial/partOrder" exact element={<POManagementCom/>} />
        <Route path='/dashCommercial/view-po/:id' exact element={<ViewPOComm/>} />
        <Route path='/dashCommercial/edit-offre/:id' exact element={<EditOffre/>} />
       </Route>

       
    </Routes>
   
  );
}

export default App;
