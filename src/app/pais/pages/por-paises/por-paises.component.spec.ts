import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorPaisesComponent } from './por-paises.component';

describe('PorPaisesComponent', () => {
  let component: PorPaisesComponent;
  let fixture: ComponentFixture<PorPaisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorPaisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorPaisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
