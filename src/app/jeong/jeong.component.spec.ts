import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeongComponent } from './jeong.component';

describe('JeongComponent', () => {
  let component: JeongComponent;
  let fixture: ComponentFixture<JeongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JeongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JeongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
