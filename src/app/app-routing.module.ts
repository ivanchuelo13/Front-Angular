import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AddComponent } from './Persona/add/add.component';
import { ListaComponent} from './Facultades/lista/lista.component';
import{UpdateComponent} from './Facultades/update/update.component';
import{InsertComponent} from './Facultades/insert/insert.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component:EditComponent},
  {path: 'lista', component:ListaComponent},
  {path: 'update', component:UpdateComponent},
  {path: 'insert', component:InsertComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
