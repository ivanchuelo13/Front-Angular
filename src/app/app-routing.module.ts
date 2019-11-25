import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent} from './Facultades/lista/lista.component';
import{UpdateComponent} from './Facultades/update/update.component';
import{InsertComponent} from './Facultades/insert/insert.component';
import { ListBlockComponent } from './Bloques/list-block/list-block.component';
import { EditBlockComponent } from './Bloques/edit-block/edit-block.component';
import { NuevoBlockComponent } from './Bloques/nuevo-block/nuevo-block.component';
import { ListLabComponent } from './Laboratorios/list-lab/list-lab.component';
import { EditLabComponent } from './Laboratorios/edit-lab/edit-lab.component';
import { NewLabComponent } from './Laboratorios/new-lab/new-lab.component';
import { EditUserComponent } from './Usuarios/edit-user/edit-user.component';
import { ListUserComponent } from './Usuarios/list-user/list-user.component';
import { NewUserComponent } from './Usuarios/new-user/new-user.component';
import { HomeComponent } from './Home/home/home.component';
import { SolicitudsalaComponent } from './solicitudsala/solicitudsala.component';
import { AutorizacionComponent } from './autorizacion/autorizacion.component';

const routes: Routes = [
  {path: 'lista', component:ListaComponent},
  {path: 'update', component:UpdateComponent},
  {path: 'insert', component:InsertComponent},
  {path: 'list-block', component:ListBlockComponent},
  {path: 'edit-block', component:EditBlockComponent},
  {path: 'nuevo-block', component:NuevoBlockComponent},
  {path: 'list-lab', component:ListLabComponent},
  {path: 'edit-lab', component:EditLabComponent},
  {path: 'new-lab', component:NewLabComponent},
  {path: 'update-lab', component:UpdateComponent},
  {path: 'edit-user', component:EditUserComponent},
  {path:'list-user', component:ListUserComponent},
  {path: 'new-user', component:NewUserComponent},
  {path: 'home', component:HomeComponent},
  {path: 'solicitudsala' , component:SolicitudsalaComponent},
  {path: 'autorizacion', component:AutorizacionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
