import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Login2faComponent } from './login2fa.component';

xdescribe('Login2faComponent', () => {
  let component: Login2faComponent;
  let fixture: ComponentFixture<Login2faComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Login2faComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Login2faComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
