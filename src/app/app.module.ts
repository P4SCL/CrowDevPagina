import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './vistas/nosotros/nosotros.component';
import { ContactenosComponent } from './vistas/contactenos/contactenos.component';
import { ServiciosComponent } from './vistas/servicios/servicios.component';
import { HeaderComponent } from './compartidos/header/header.component';
import { FooterComponent } from './compartidos/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NosotrosComponent,
    ContactenosComponent,
    ServiciosComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
