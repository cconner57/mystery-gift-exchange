import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftLinksComponent } from './gift-links.component';

describe('GiftLinksComponent', () => {
  let component: GiftLinksComponent;
  let fixture: ComponentFixture<GiftLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
