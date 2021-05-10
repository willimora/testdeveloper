import { Productos } from './../../../models/Productos';
import { ProductosService } from './../../../services/productos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent implements OnInit {
  producto: Productos
  constructor(private productosService: ProductosService, private Router: ActivatedRoute) { }
  id = this.Router.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.productosService.getOne(this.id).subscribe(res => {
      this.producto = res
    })
  }

}
