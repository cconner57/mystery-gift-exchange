import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderItemComponent } from './sub-header-item.component';

describe('SubHeaderItemComponent', () => {
  let component: SubHeaderItemComponent;
  let fixture: ComponentFixture<SubHeaderItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubHeaderItemComponent]
    });
    fixture = TestBed.createComponent(SubHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
