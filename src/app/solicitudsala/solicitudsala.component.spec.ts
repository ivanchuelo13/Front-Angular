import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudsalaComponent } from './solicitudsala.component';

describe('SolicitudsalaComponent', () => {
  let component: SolicitudsalaComponent;
  let fixture: ComponentFixture<SolicitudsalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudsalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudsalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
