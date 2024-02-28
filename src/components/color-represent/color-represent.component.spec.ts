import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorRepresentComponent } from './color-represent.component';

describe('ColorRepresentComponent', () => {
  let component: ColorRepresentComponent;
  let fixture: ComponentFixture<ColorRepresentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorRepresentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorRepresentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
