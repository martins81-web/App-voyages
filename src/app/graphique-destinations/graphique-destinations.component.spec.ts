import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphiqueDestinationsComponent } from './graphique-destinations.component';

describe('GraphiqueDestinationsComponent', () => {
  let component: GraphiqueDestinationsComponent;
  let fixture: ComponentFixture<GraphiqueDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphiqueDestinationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphiqueDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
