import { Component, OnInit } from '@angular/core';
import {Route, Router} from '@angular/router'
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //  loginForm = new FormGroup({
  //   email: new FormControl('abc@gamil.com'),
  //   password:new FormControl('123')
  //  })
  loginResponse = '';
  loginClass = '';
  constructor(private fb: FormBuilder, private authService: AuthService,private router:Router) {}
  loginForm = this.fb.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(6)]],
  });

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  ngOnInit(): void {}
  onSubmitHandler() {
    this.authService.login(this.loginForm.value).subscribe(
      (response) => {
        this.loginResponse = 'Login Successfully, Thank you';
        this.loginClass = 'alert-success';
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigateByUrl('home');
      },
      (error) => {
        this.loginResponse = 'Login failed, try again';
        this.loginClass = 'alert-danger';
      }
    );
  }
}
