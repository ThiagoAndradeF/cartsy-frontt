import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFirstComponent } from './login-first.component';

describe('LoginFirstComponent', () => {
  let component: LoginFirstComponent;
  let fixture: ComponentFixture<LoginFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFirstComponent]
    });
    fixture = TestBed.createComponent(LoginFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
