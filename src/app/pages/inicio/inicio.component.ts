import { OfertaService } from './../../services/oferta.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from 'src/app/model/oferta';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public ofertas: Array<Oferta> = [];

  constructor(private ofertaService: OfertaService) {
    this.recuperarOfertas();
   }

  ngOnInit(): void {
    
  }

  recuperarOfertas(): void{
    this.ofertaService.obtenerOfertas().subscribe(
      respuesta =>{
        this.ofertas = respuesta;
        console.log('Ofertas a mostrar' +JSON.stringify(this.ofertas));
        });
     }
}
