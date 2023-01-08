import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';

  countries: Country[] = [];

  constructor( private paisService: PaisService){}

  activarRegion( region: string ){

    if( region === this.regionActiva ) return;

    this.regionActiva = region;
    this.countries = [];

    this.paisService.getPaisPorRegion(this.regionActiva)
                    .subscribe( countries => this.countries = countries )

  }

  getClasesCss( region: string ): string {
    return (region === this.regionActiva)? 'btn btn-primary mx-1' : 'btn btn-outline-primary mx-1';
  }

}
