import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiquePrixMoyenPrixTotalDestinationComponent } from './graphique-prix-moyen-prix-total-destination.component';

describe('GraphiquePrixMoyenPrixTotalDestinationComponent', () => {
  let component: GraphiquePrixMoyenPrixTotalDestinationComponent;
  let fixture: ComponentFixture<GraphiquePrixMoyenPrixTotalDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiquePrixMoyenPrixTotalDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiquePrixMoyenPrixTotalDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
