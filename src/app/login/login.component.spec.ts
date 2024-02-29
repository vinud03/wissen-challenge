import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LoginComponent } from './login.component';

import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

import { CommonServiceService } from '../shared/services/common-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const commonService : Partial <CommonServiceService> = {
  loginUser : (payload:any) => of('userLoggedIn'),

  getUserData: (headers: HttpHeaders) => of('UsersDetails')
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [HttpClientTestingModule, FormsModule,
        ReactiveFormsModule],
      providers: [{provide: CommonServiceService, useValue: commonService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login form Created', ()=> {
    component.ngOnInit();
    expect(component.loginForm).toBeDefined();
  })
});
