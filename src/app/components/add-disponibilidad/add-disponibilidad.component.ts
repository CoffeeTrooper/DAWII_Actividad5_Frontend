import { Component, OnInit } from '@angular/core';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UtilService } from 'src/app/services/util.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';
@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  lstUsuarios: Usuario[] = [];
  lstCiclos: Ciclo[] = [];
  disponibilidad: Disponibilidad = {
    ciclo:{
      idCiclo:0
    },
    usuario:{
      idUsuario:0
    }
  };

  constructor(private utilService: UtilService, private disponibilidadService: DisponibilidadService) {

    this.listarUsuarios().subscribe((usuarios) => this.lstUsuarios = usuarios);
    console.log(this.lstUsuarios);

    this.listarCiclos().subscribe((ciclos) => this.lstCiclos = ciclos);
    console.log(this.lstCiclos);

   }

  ngOnInit(): void {
  }

  listarUsuarios(){
    return this.utilService.listarUsuarios();
  }

  listarCiclos(){
    return this.utilService.listarCiclos();
  }

  registrarDisponibilidad(){
    this.disponibilidadService.registrar(this.disponibilidad).subscribe(
      response => {
        console.log(response.mensaje);
        alert(response.mensaje);
      },
      error => {
        console.log(error);
      }
    );
  }

}
