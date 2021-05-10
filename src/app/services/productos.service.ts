import { Productos } from './../../../API/src/entity/Productos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }

  getall():Observable<Productos[]>{
    return this.http.get<Productos[]>(`${environment.API_URL}/productos/getall`)
  }

  newproduct(productos:Productos):Observable<Productos>{
    return this.http.post<Productos>(`${environment.API_URL}/productos/newproduct`, productos)
  }

  postImagen(photo: File, id:number): Observable<any> {
    const fd = new FormData();
    fd.append('image', photo);
    return this.http.patch(`${environment.API_URL}/productos/postimagen/${id}`, fd);
  }

  deleteOne(id):Observable<Productos>{
    return this.http.delete<Productos>(`${environment.API_URL}/productos/deleteproduct/${id}`)
  }

  getOne(id):Observable<Productos>{
    return this.http.get<Productos>(`${environment.API_URL}/productos/getonebyid/${id}`)
  }

  editProduct(productos:Productos, id:number):Observable<Productos>{
    return this.http.patch<Productos>(`${environment.API_URL}/productos/editproduct/${id}`, productos)
  }
}
