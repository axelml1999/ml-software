import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SomosComponent } from './pages/somos/somos.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { IndexComponent } from './index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './layout/main/main.component';
import { NgxGlideModule } from 'ngx-glide';
import { OwlModule } from 'ngx-owl-carousel';
import { SwiperModule } from 'swiper/angular';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/pages/dashboard/dashboard.component';
import { NavbarAdminComponent } from './admin/layout/navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './admin/layout/sidebar-admin/sidebar-admin.component';
import { PortafolioAdminComponent } from './admin/pages/portafolio-admin/portafolio-admin.component';
import { ClientesAdminComponent } from './admin/pages/clientes-admin/clientes-admin.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwlModule,
    NgxGlideModule,
    SwiperModule
  ],
  declarations: [
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    SomosComponent,
    PortafolioComponent,
    ContactoComponent,
    IndexComponent,
    MainComponent,
    LoginComponent,
    DashboardComponent,
    NavbarAdminComponent,
    SidebarAdminComponent,
    PortafolioAdminComponent,
    ClientesAdminComponent
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
