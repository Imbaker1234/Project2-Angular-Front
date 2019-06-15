import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StumbleButtonComponent } from './stumble-button.component';

describe('StumbleButtonComponent', () => {
  let component: StumbleButtonComponent;
  let fixture: ComponentFixture<StumbleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StumbleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StumbleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
