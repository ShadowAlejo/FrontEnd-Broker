// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Contact from '../pages/Contact.vue'
import Login from '../pages/Login.vue' 
import Register from '../pages/Register.vue' 
import Respaldo from '../pages/Respaldo.vue'
import Fianzas from '../pages/Fianzas.vue'
import PlanJubilacion from '../pages/PlanJubilacion.vue'
import SeguroSalud from '../pages/SeguroSalud.vue'
import SeguroVehiculos from '../pages/SeguroVehiculos.vue'
import SeguroHogar from '../pages/SeguroHogar.vue'
import ReportarSiniestro from '../pages/ReportarSiniestro.vue'
import SolicitarAsistencia from '../pages/SolicitarAsistencia.vue'
import MiPoliza from '../pages/MiPoliza.vue'
import AdminPage from '../pages/AdminPage.vue'
import AddClient from '../components/common/AddClient.vue'
import ClientList from '../components/common/ClientList.vue'
import HandleRequests from '../components/common/HandleRequests.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/respaldo', name: 'Respaldo', component: Respaldo},
  { path: '/fianzas', name: 'Fianzas', component: Fianzas },
  { path: '/planjubilacion', name: 'PlanJubilacion', component: PlanJubilacion },
  { path: '/segurosalud', name: 'SeguroSalud', component: SeguroSalud },
  { path: '/seguroVehiculos', name: 'SeguroVehiculos', component: SeguroVehiculos },
  { path: '/segurohogar', name: 'SeguroHogar', component: SeguroHogar },
  { path: '/reportarSiniestro', name: 'reportarSiniestro', component: ReportarSiniestro},
  { path: '/solicitarasistencia', name: 'SolicitarAsistencia', component: SolicitarAsistencia},
  { path: '/mipoliza', name: 'MiPoliza', component: MiPoliza},
  { path: '/adminpage', name: 'AdminPage', component: AdminPage, 
    children: [
      { path: 'add-client', name: 'AddClient', component: AddClient },
      { path: 'client-list', name: 'ClientList', component: ClientList },
      { path: 'handle-requests', name: 'HandleRequests', component: HandleRequests },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
