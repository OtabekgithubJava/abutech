import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockResultsComponent } from './mock-results.component';

describe('MockResultsComponent', () => {
  let component: MockResultsComponent;
  let fixture: ComponentFixture<MockResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockResultsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MockResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
