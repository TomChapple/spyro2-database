import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisedTextComponent } from './localised-text.component';

describe('LocalisedTextComponent', () => {
  let component: LocalisedTextComponent;
  let fixture: ComponentFixture<LocalisedTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalisedTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalisedTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
