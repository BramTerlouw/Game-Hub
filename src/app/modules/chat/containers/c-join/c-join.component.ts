import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c-join',
  templateUrl: './c-join.component.html',
  styleUrls: ['./c-join.component.scss'],
})
export class CJoinComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      roomcode: [''],
    });
  }

  /**
   * navigateTo
   * * Method to navigate to chatroom with roomcode from form.
   * 
   * TODO: Add validation for roomcode.
   */
  navigateTo = () => {
    if (this.myForm.value['roomcode'] !== '') {
      this.router.navigate(['/chat/room/' + this.myForm.value['roomcode']]);
    }
  };
}
