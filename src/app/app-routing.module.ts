import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'productos', pathMatch: 'full'},
  {path:'productos' , loadChildren: () => import('./components/productos/productos.module').then(m=>m.ProductosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
