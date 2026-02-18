import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotreConceptComponent } from './notre-concept-component';

describe('NotreConceptComponent', () => {
  let component: NotreConceptComponent;
  let fixture: ComponentFixture<NotreConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotreConceptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotreConceptComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
