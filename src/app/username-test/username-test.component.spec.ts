import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameTestComponent } from './username-test.component';

describe('UsernameTestComponent', () => {
  let component: UsernameTestComponent;
  let fixture: ComponentFixture<UsernameTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
