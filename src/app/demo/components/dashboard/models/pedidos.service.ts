import { Injectable } from '@angular/core';
import { Pedidos } from './pedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor() { }

  pedir(): Pedidos[] {
    let pedidos:Pedidos[] ;
    return pedidos;
  }
}
