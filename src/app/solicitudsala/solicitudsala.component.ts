import { Component, OnInit } from '@angular/core';
import {DynamicFormBuilder, DynamicFormGroup} from 'ngx-dynamic-form-builder';
import { Soli } from '../Modelo/soli';

@Component({
  selector: 'app-solicitudsala',
  templateUrl: './solicitudsala.component.html',
  styleUrls: ['./solicitudsala.component.css']
})
export class SolicitudsalaComponent implements OnInit {
  
  public form: DynamicFormGroup<Soli>;
  constructor(private fb: DynamicFormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group(Soli, {
      date: new Date(), name: '', lab: '', asign: '', teacher: '', faculty: '', 
      students: '', cantMachines: '', cantConsume: '', observation: '', useMachines: false,
      useLab: false, guide: false, aux: false, useConsume: false
    });
  }

}
