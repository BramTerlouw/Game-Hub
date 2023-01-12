import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }



  /**
   * handleLogin
   * * This method is used to handle the login process
   * 
   */
  handleLogin = () => {
    const credentials = { email: this.myForm.controls['email'].value, password: this.myForm.controls['password'].value };

    this.auth.signIn(credentials)
      .then((res) => {
        this.navigateTo('/home');
      })
      .catch((err) => {
        alert(err);
      })

      this.myForm.reset();
  };



  /**
   * navigateTo
   * * This method is used to navigate to a specific path
   * 
   * @param path Parameter containing the path to navigate to
   * 
   */
  navigateTo = (path: string) => {
    this.router.navigate([path]);
  };

}
