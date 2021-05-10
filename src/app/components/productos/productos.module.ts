
import { IndividualComponent } from './individual/individual.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ModalNuevoComponent } from './modal-nuevo/modal-nuevo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductosPipe } from '../productos.pipe';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [ProductosComponent, ModalNuevoComponent, IndividualComponent, ProductosPipe],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
  ]
})
export class ProductosModule { }
