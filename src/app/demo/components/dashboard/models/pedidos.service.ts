import { Injectable } from '@angular/core';
import { Pedidos } from './pedido.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private http: HttpClient) { }

  pedir(): Pedidos[] {
    let pedidos:Pedidos[] ;
    return pedidos;
  }


  getCustomers(params?: any) {
    return this.http.get<any>('https://www.primefaces.org/data/customers', { params: params }).toPromise();}   
}
