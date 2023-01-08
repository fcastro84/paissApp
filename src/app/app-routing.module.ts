import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorPaisesComponent } from './pais/pages/por-paises/por-paises.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: '',
    component: PorPaisesComponent,
    pathMatch: 'full'
  },
  {
    path: 'pais',
    component: PorPaisesComponent,
  },
  {
    path: 'capital',
    component: PorCapitalComponent,
  },
  {
    path: 'region',
    component: PorRegionComponent,
  },
  {
    path: 'pais/:id',
    component: VerPaisComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
