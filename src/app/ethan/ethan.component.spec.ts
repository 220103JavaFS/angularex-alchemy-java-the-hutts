import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthanComponent } from './ethan.component';

describe('EthanComponent', () => {
  let component: EthanComponent;
  let fixture: ComponentFixture<EthanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
