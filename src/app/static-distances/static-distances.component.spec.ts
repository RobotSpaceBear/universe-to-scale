import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticDistancesComponent } from './static-distances.component';

describe('StaticDistancesComponent', () => {
  let component: StaticDistancesComponent;
  let fixture: ComponentFixture<StaticDistancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaticDistancesComponent]
    });
    fixture = TestBed.createComponent(StaticDistancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
