import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-c-registration',
  templateUrl: './c-registration.component.html',
  styleUrls: ['./c-registration.component.scss'],
})
export class CRegistrationComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [''],
      username: [''],
      password: ['']
    });
  }

  HandleRegistration = () => {
    this.auth.signUp(
      {
        email: this.myForm.controls['email'].value, 
        password: this.myForm.controls['password'].value, 
        displayName: this.myForm.controls['username'].value
      }
    )
  }

  navigateTo = (path: string) => {
    this.router.navigate([path]);
  };
}
