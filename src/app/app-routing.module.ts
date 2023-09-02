import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
   path: 'star-wars',
   loadChildren: () => import('./modules/star-wars/star-wars.module').then(m => m.StarWarsModule)
  },
  {
    path:'',
    pathMatch: 'full',
    redirectTo: 'star-wars'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
