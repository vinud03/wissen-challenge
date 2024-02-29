import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { CommonServiceService } from '../shared/services/common-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

const res = [{name: 'Vinayak', id: '021'}];
const commonService : Partial <CommonServiceService> = {
  loginUser : (payload:any) => of('userLoggedIn'),

  getUserData: (headers: HttpHeaders) => of(res)
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule, FormsModule, MatTableModule, ReactiveFormsModule],
      providers: [{provide: CommonServiceService, useValue: commonService}]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prepare data', () => {
    localStorage.setItem('loggedIn', 'abc');
    component.ngOnInit()
    expect(component.token).toEqual('abc');
  })
});
