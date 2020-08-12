import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from './models/cliente';
import { ResponseClient } from './models/responseCliente';
import { Tienda } from './models/tienda';
import { ClientTienda } from './models/client-tinda';
import { ICompras } from './models/compras';
import { ResponseG } from './models/response';

const httpOption = { //Sirven p solicitues post
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=utf-8', //'Server-Ptotocol':'SOAP'     
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiTestServiceService {

  url: string = "api/Clientes";
  url2: string = "api/Clientes/";
  urlt: string = "api/RelClienteTienda";
  urltr: string = "api/RelClienteTienda";
  urltrl: string = "api/Tienda/GetCompras";
  

  constructor(private _http: HttpClient) { }


  add(cliente: Cliente) {
    console.log('se ingresará cliente');
    let json = JSON.stringify(cliente);
    let _headers = new Headers().set('Content-Type', 'application/json');
    return this._http.post<ResponseClient>(this.url, json, httpOption);
  }

  editar(cliente: Cliente) {
    console.log('se editará cliente');
    let json = JSON.stringify(cliente);
    return this._http.put<ResponseClient>(this.url2, json, httpOption);
  }

  addtienda(tienda: Tienda) {
    let json = JSON.stringify(tienda);
    return this._http.post<Response>(this.urlt, json,httpOption);
  }

  addcompra(compra: ClientTienda) {
    let json = JSON.stringify(compra);
    console.log('');
    return this._http.post<ResponseG>(this.urltr, json,httpOption);
  }

  // getcompras() {
  //   //let listado;
  //   return this._http.get<ICompras>(this.urltrl,);
  // }

  getCliente() {
    fetch(this.url).then(function (response) {
      return response.json();
    }).then(function (Myjson) {
      console.log(Myjson);
    })
  }

}
