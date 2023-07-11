import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private fb: FormBuilder) { }
    loginForm = this.fb.group({
        firstName: ['',Validators.required],
        lastName: [''],
        email: ['',[Validators.required,Validators.email]],
        phoneNumber:['',Validators.required],
        password: ['',[Validators.required,Validators.minLength(8)]]
    })
    hide = true;
    get firstName() { return this.loginForm.get('firstName'); }
    get phoneNumber() { return this.loginForm.get('phoneNumber'); } 
    get email() { return this.loginForm.get('email'); } 
    get password() { return this.loginForm.get('password'); 
}}
