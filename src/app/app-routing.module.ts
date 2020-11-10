import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Vistas
import { ContactenosComponent } from './vistas/contactenos/contactenos.component';
import { NosotrosComponent } from './vistas/nosotros/nosotros.component';
import { ServiciosComponent } from './vistas/servicios/servicios.component';

const routes: Routes = [
  {path:'contactenos', component:ContactenosComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'**',pathMatch:'full',redirectTo:'nosotros'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],


exports: [RouterModule]
})
export class AppRoutingModule { }
