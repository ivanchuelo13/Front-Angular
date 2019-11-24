import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoBlockComponent } from './nuevo-block.component';

describe('NuevoBlockComponent', () => {
  let component: NuevoBlockComponent;
  let fixture: ComponentFixture<NuevoBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
