import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  termino: string = '';
  existe: boolean = false;
  countries: Country[] = [];

  constructor(private paisService: PaisService){}

  buscar( termino: string ){

    this.existe = false;
    this.termino = termino;

    this.paisService.buscarCapital( this.termino ).subscribe(
      (paises) => {
        this.countries = paises;
      },
      (error) => {
        this.existe = true;
        this.countries = [];
      }
    )

  }

  sugerencias( valor: string){
    this.existe = false;

  }

}
