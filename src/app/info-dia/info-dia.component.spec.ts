import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDiaComponent } from './info-dia.component';

describe('InfoDiaComponent', () => {
  let component: InfoDiaComponent;
  let fixture: ComponentFixture<InfoDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
