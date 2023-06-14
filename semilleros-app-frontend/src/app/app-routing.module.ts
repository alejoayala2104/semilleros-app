import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCoordinadorComponent } from './create-coordinador/create-coordinador.component';

const routes: Routes = [
  { path: 'create-coordinador', component: CreateCoordinadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
