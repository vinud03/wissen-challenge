import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../shared/services/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor (private loginService : CommonServiceService, private router: Router) {}

  ngOnInit(): void {
    
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      terms: new FormControl(false,[Validators.requiredTrue])
    });
  }

  onSubmit() {
    if(this.loginForm.valid) {
      const payload = {
        'email': this.loginForm.value.email,
        'password': this.loginForm.value.password
      }
      this.loginService.loginUser(payload).subscribe(res => {
        const tokenObj = res as any;
        localStorage.setItem('loggedIn', tokenObj.token );
        this.router.navigate(['/home']);
      })
    }
  }

}
