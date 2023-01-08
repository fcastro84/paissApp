import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from "rxjs/operators";
import { Country} from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activedRoute: ActivatedRoute,
    private paisService: PaisService
    ){}

  ngOnInit() {

    this.activedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorCodigo( id )),
        tap( console.log)
      )
      .subscribe( (resp) =>  {this.pais = resp;} )

    // this.activedRoute.params
    //   .subscribe( ({ id }) => {
    //     console.log(id);
    //     this.paisService.getPaisPorCodigo( id )
    //       .subscribe()
    //   });

  }



}
