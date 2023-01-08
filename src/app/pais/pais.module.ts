import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorPaisesComponent } from './pages/por-paises/por-paises.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorPaisesComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  exports: [
    PorPaisesComponent,
    PorRegionComponent,
    PorCapitalComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
