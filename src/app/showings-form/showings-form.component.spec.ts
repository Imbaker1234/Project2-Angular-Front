import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowingsFormComponent } from './showings-form.component';

describe('ShowingsFormComponent', () => {
  let component: ShowingsFormComponent;
  let fixture: ComponentFixture<ShowingsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowingsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowingsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
