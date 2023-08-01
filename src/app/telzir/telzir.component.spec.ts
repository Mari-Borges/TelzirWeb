import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelzirComponent } from './telzir.component';

describe('TelzirComponent', () => {
  let component: TelzirComponent;
  let fixture: ComponentFixture<TelzirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelzirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelzirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
