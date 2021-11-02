import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { IndexComponent } from './index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SomosComponent } from './pages/somos/somos.component';

const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: "inicio", component: InicioComponent },
  { path: "contacto", component: ContactoComponent },
  { path: "portafolio", component: PortafolioComponent },
  { path: "quienes-somos", component: SomosComponent },
  { path: "admin", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
