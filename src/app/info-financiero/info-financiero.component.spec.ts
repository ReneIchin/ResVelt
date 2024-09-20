import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoFinancieroComponent } from './info-financiero.component';

describe('InfoFinancieroComponent', () => {
  let component: InfoFinancieroComponent;
  let fixture: ComponentFixture<InfoFinancieroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoFinancieroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoFinancieroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
