import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-paises',
  templateUrl: './por-paises.component.html',
  styleUrls: ['./por-paises.component.css']
})
export class PorPaisesComponent {

  termino: string = '';
  existe: boolean = false;
  countries: Country[] = [];
  countriesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor( private paisService: PaisService){}

  buscar( termino: string ){

    this.existe = false;
    this.termino = termino;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais( this.termino ).subscribe(
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
    this.termino = valor;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(valor)
                    .subscribe(paises => this.countriesSugeridos = paises.splice(0, 5));

  }

  buscarSugerido( termino: string){
    this.buscar(termino);
  }

}
