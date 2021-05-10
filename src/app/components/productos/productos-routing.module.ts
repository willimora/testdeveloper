import { IndividualComponent } from './individual/individual.component';
import { ProductosComponent } from './productos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', component:ProductosComponent},
  {path:':id', component:IndividualComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
