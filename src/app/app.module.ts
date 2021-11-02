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
import { DashboardComponent } from './admin/dashboard/dashboard.component';

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
    DashboardComponent
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
