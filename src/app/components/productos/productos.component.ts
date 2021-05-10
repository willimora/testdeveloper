import { ModalNuevoComponent } from './modal-nuevo/modal-nuevo.component';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Productos } from 'src/app/models/Productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: Productos[] = []
  constructor(private productosService: ProductosService, private dialog: MatDialog) { }
  filterProd = '';
  ngOnInit(): void {
    this.productosService.getall().subscribe(
      res => {
        this.productos = res
      })
  }

  deleteOne(id: number, nombre: string) {
    Swal.fire({
      title: 'Desea eliminar el producto ' + nombre + '?',
      showCancelButton: true,
      icon: 'info',
      confirmButtonText: `Confirmar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.productosService.deleteOne(id).subscribe(res => {
          Swal.fire('El producto fue eliminado!', '', 'success')
          setTimeout(() => {
            Swal.close()
            this.ngOnInit()
          }, 3000);
        })
      }
    })

  }

  nuevoProducto() {
    const dialogRef = this.dialog.open(ModalNuevoComponent, {
      hasBackdrop: true,
      data: { title: 'Agregar nuevo producto' },
    })
    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        Swal.close()
        this.ngOnInit()
      },
        3000);
    })
  }

  editarProducto(id: number) {
    const dialogRef = this.dialog.open(ModalNuevoComponent, {
      hasBackdrop: true,
      data: { title: 'Editar producto', id },
    })

    dialogRef.afterClosed().subscribe(() => {
      setTimeout(() => {
        Swal.close()
        this.ngOnInit()
      },
        3000);
    })
  }

}
