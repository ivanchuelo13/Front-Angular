import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {ServiceService}from '../app/Service/service.service';
import {HttpClientModule}from '@angular/common/http';
import { ListaComponent } from './Facultades/lista/lista.component';
import { UpdateComponent } from './Facultades/update/update.component';
import { InsertComponent } from './Facultades/insert/insert.component';
import { ListBlockComponent } from './Bloques/list-block/list-block.component';
import { EditBlockComponent } from './Bloques/edit-block/edit-block.component';
import { NuevoBlockComponent } from './Bloques/nuevo-block/nuevo-block.component';
import { NewLabComponent } from './Laboratorios/new-lab/new-lab.component';
import { ListLabComponent } from './Laboratorios/list-lab/list-lab.component';
import { EditLabComponent } from './Laboratorios/edit-lab/edit-lab.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EditUserComponent } from './Usuarios/edit-user/edit-user.component';
import { ListUserComponent } from './Usuarios/list-user/list-user.component';
import { NewUserComponent } from './Usuarios/new-user/new-user.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    UpdateComponent,
    InsertComponent,
    ListBlockComponent,
    EditBlockComponent,
    NuevoBlockComponent,
    NewLabComponent,
    ListLabComponent,
    EditLabComponent,
    HeaderComponent,
    FooterComponent,
    EditUserComponent,
    ListUserComponent,
    NewUserComponent,
   
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
