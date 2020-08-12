import { Component, OnInit } from '@angular/core';
import { ApiTestServiceService } from '../api-test-service.service';
import { NgForm } from '@angular/forms';
import { Tienda } from '../models/tienda';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  mitienda:Tienda;
  tienda= {
    sucursal:'',
    direccion:''
  }
  constructor(private apiService: ApiTestServiceService) { }

  ngOnInit(): void {
  }
  guardar(frm:NgForm){

    let frmcollection=frm.value;
    this.mitienda.id=0;
    this.mitienda.sucursal=frmcollection.nombre;
    this.mitienda.direccion=frmcollection.direccion;

    let result;
    this.apiService.addtienda(this.mitienda).subscribe(resp=>{
      result=resp;
    })
  }

}
