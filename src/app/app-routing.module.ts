import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AddComponent } from './Persona/add/add.component';
import { ListaComponent} from './Facultades/lista/lista.component';
import{UpdateComponent} from './Facultades/update/update.component';
import{InsertComponent} from './Facultades/insert/insert.component';
import { ListBlockComponent } from './Bloques/list-block/list-block.component';
import { EditBlockComponent } from './Bloques/edit-block/edit-block.component';
import { NuevoBlockComponent } from './Bloques/nuevo-block/nuevo-block.component';
import { ListLabComponent } from './Laboratorios/list-lab/list-lab.component';
import { EditLabComponent } from './Laboratorios/edit-lab/edit-lab.component';
import { NewLabComponent } from './Laboratorios/new-lab/new-lab.component';


const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'add', component: AddComponent},
  {path:'edit', component:EditComponent},
  {path: 'lista', component:ListaComponent},
  {path: 'update', component:UpdateComponent},
  {path: 'insert', component:InsertComponent},
  {path: 'list-block', component:ListBlockComponent},
  {path: 'edit-block', component:EditBlockComponent},
  {path: 'nuevo-block', component:NuevoBlockComponent},
  {path: 'list-lab', component:ListLabComponent},
  {path: 'edit-lab', component:EditLabComponent},
  {path: 'new-lab', component:NewLabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
