import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';/* manejar submit*/
import { Cliente } from '../models/cliente';
//import { ResponseClient } from '../models/responseCliente';
import { ApiTestServiceService } from '../api-test-service.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public micliente: Cliente;
  result: string = '';
  dispara: boolean = false;

  usuario = {
    nombre: '',
    apellidos: '',
    direccion: ''
  }
  constructor(private apiCliente: ApiTestServiceService) { }

  ngOnInit(): void {
  }
  guardar(forma: NgForm) {
    console.log(forma.control);
    var collectionFrm = forma.value;
    for (let itm in collectionFrm) {
      console.log(`${forma.value[itm]} `);//, ${forma[itm]}`);           
    }

    const cliente: Cliente = {
      id: 0,
      nombre: collectionFrm.nombre,
      apellidos: collectionFrm.apellidos,
      direccion: collectionFrm.direccion
    };

    this.apiCliente.add(cliente).subscribe(respons => {
      //alert('mandando'+cliente.nombre+' '+cliente.apellidos);
      if (respons.CodigoRespuesta == 200) {
        this.result = respons.Id.toString();
        this.dispara = true;
        this.mostrarAlerta();
        this.apiCliente.getCliente();
      };
    },
      response => console.log('error al insertar Cliente,' + response['Error']));

    if (forma.invalid) {
      Object.values(forma.controls).forEach(control => { //Object.values extrae valores de form
        control.markAsTouched();//ésto marca controles como tocados, p indicar q No son válidos
      })
      return;
    }    

  }
  mostrarAlerta() {
    setTimeout(() => this.dispara = false, 3000);

  }

}
