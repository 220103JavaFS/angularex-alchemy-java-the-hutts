import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaehyunComponent } from './jaehyun.component';

describe('JaehyunComponent', () => {
  let component: JaehyunComponent;
  let fixture: ComponentFixture<JaehyunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JaehyunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JaehyunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
