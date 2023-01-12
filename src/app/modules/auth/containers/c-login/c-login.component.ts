import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-c-login',
  templateUrl: './c-login.component.html',
  styleUrls: ['./c-login.component.scss'],
})
export class CLoginComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }

  handleLogin = () => {
    const credentials = { email: this.myForm.controls['email'].value, password: this.myForm.controls['password'].value };

    this.auth.signIn(credentials)
      .then((res) => {
        console.log(res);
        this.navigateTo('/home');
      })
      .catch((err) => {
        alert(err);
      })
  };

  navigateTo = (path: string) => {
    this.router.navigate([path]);
  };

}
