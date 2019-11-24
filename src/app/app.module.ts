import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { FormsModule } from '@angular/forms';
import {ServiceService}from '../app/Service/service.service';
import {HttpClientModule}from '@angular/common/http';
import { AddComponent } from './Persona/add/add.component';
import { ListaComponent } from './Facultades/lista/lista.component';
import { UpdateComponent } from './Facultades/update/update.component';
import { InsertComponent } from './Facultades/insert/insert.component';
import { ListBlockComponent } from './Bloques/list-block/list-block.component';
import { EditBlockComponent } from './Bloques/edit-block/edit-block.component';
import { NuevoBlockComponent } from './Bloques/nuevo-block/nuevo-block.component';
import { NewLabComponent } from './Laboratorios/new-lab/new-lab.component';
import { ListLabComponent } from './Laboratorios/list-lab/list-lab.component';
import { EditLabComponent } from './Laboratorios/edit-lab/edit-lab.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListarComponent,
    AddComponent,
    ListaComponent,
    UpdateComponent,
    InsertComponent,
    ListBlockComponent,
    EditBlockComponent,
    NuevoBlockComponent,
    NewLabComponent,
    ListLabComponent,
    EditLabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
