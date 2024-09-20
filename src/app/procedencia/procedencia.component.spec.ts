import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedenciaComponent } from './procedencia.component';

describe('ProcedenciaComponent', () => {
  let component: ProcedenciaComponent;
  let fixture: ComponentFixture<ProcedenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProcedenciaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProcedenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
