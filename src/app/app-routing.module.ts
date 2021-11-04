import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { LoginComponent } from './admin/login/login.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SomosComponent } from './pages/somos/somos.component';
import { PortafolioAdminComponent } from './admin/pages/portafolio-admin/portafolio-admin.component';
import { ClientesAdminComponent } from './admin/pages/clientes-admin/clientes-admin.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "inicio", component: InicioComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "portafolio", component: PortafolioComponent },
  { path: "quienes-somos", component: SomosComponent },
  { path: "admin", component: LoginComponent },
  { path:"dashboard", component: DashboardComponent },
  { path:"dashboard/portafolio", component: PortafolioAdminComponent },
  { path:"dashboard/clientes", component: ClientesAdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
