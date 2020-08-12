import { Component, OnInit } from '@angular/core';
import { ClientTienda } from '../models/client-tinda';
import { NgForm } from '@angular/forms';
import { ApiTestServiceService } from '../api-test-service.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  result: string = '0';
  mitienda: ClientTienda;
  compra = {
    idcliente: '1',
    cliente: '',
    tienda: '',
    monto: '',
    fecha: ''
  }
  constructor(private apiService: ApiTestServiceService) { }

  ngOnInit(): void {
  }

  guardar(frm: NgForm) {

    var frmcollection = frm.value;
    console.log(frmcollection);

    const mitienda: ClientTienda = {
      id: 0,
      idc: frmcollection.idcliente,
      cliente: frmcollection.cliente,
      tienda: frmcollection.tienda,
      monto: frmcollection.monto,
      fecha: new Date(),
    };
    
    this.apiService.addcompra(mitienda).subscribe(resp => {
      if (resp.Codigo = 200) {
        this.result = resp.Id.toString();
        console.log('guardado');
      };
    },
      resp => console.log('error al insertar compra,' + resp['Error']));
    // })
  }
}
