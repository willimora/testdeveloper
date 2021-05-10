import { Productos } from './../../../models/Productos';
import { ProductosService } from './../../../services/productos.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { finalize } from 'rxjs/operators';
interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: 'app-modal-nuevo',
  templateUrl: './modal-nuevo.component.html',
  styleUrls: ['./modal-nuevo.component.scss']
})
export class ModalNuevoComponent implements OnInit {
  errorMessage;
  photoSelected: string | ArrayBuffer;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private fb: FormBuilder, private productosService: ProductosService) { }
  file: File;
  ProductosForm = this.fb.group({
    nombre: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    precio: ['', [Validators.required]]
  })

  ngOnInit(): void {
    if (this.data.title == 'Editar producto') {
      this.productosService.getOne(this.data.id).subscribe(res => {
        this.ProductosForm.patchValue({
          nombre: res.nombre,
          descripcion: res.descripcion,
          precio: res.precio
        })
      })
    }
  }


  isValidField(field: string): boolean {
    this.getErrorMessage(field);
    return (
      (this.ProductosForm.get(field).touched || this.ProductosForm.get(field).dirty) &&
      !this.ProductosForm.get(field).valid
    );
  }

  private getErrorMessage(field: string): void {
    const { errors } = this.ProductosForm.get(field);
    if (errors) {
      const messages = {
        required: 'Este campo no puede estar vacío.',
      };

      const errorKey = Object.keys(errors).find(Boolean);
      this.errorMessage = messages[errorKey];
    }
  }

  checkField(field: string): boolean {
    return this.isValidField(field);
  }

  Guardar() {
    if (this.ProductosForm.valid) {

      if (this.data.title == 'Editar producto') {
        this.productosService.editProduct(this.ProductosForm.value, this.data.id).subscribe(res => {
          if (this.file != null) {
            this.productosService.postImagen(this.file, res.id).pipe(finalize(() => {
              Swal.fire('Editado exitosamente!', '', 'success')
            })
            ).subscribe(res => { })
          }else{
            Swal.fire('Editado exitosamente!', '', 'success')
          }
        })
      } else {
        if (this.file != null) {
          this.productosService.newproduct(this.ProductosForm.value).subscribe(res => {
            this.productosService.postImagen(this.file, res.id).pipe(finalize(() => {
              Swal.fire('Guardado exitosamente!', '', 'success')
            })
            ).subscribe(res => { })
          })
        }
      }
    } else {
      Swal.fire('Debe completar todos los campos', '', 'info')
    }
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.photoSelected = reader.result;
      reader.readAsDataURL(this.file);
    }
  }

}
