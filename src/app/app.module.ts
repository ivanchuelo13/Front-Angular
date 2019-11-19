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

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListarComponent,
    AddComponent,
    ListaComponent,
    UpdateComponent,
    InsertComponent,
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
