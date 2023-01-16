import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeartsService } from '../../services/hearts.service';

@Component({
  selector: 'app-c-create-hearts',
  templateUrl: './c-create-hearts.component.html',
  styleUrls: ['./c-create-hearts.component.scss'],
})
export class CCreateHeartsComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private heartsService: HeartsService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      gamecode: ['', [Validators.required]],
    });
  }



  /**
   * handleCreate
   * * Method to create a new room
   * 
   */
  handleCreate = () => {
    const roomRef = this.myForm.value['gamecode'];

    this.heartsService.getDoc(roomRef).then((docSnapshot) => {
      if (docSnapshot.exists) {
       alert('Game already exists');
      }
      else {
        this.heartsService.initGame(this.myForm.controls['gamecode'].value);
      }
      this.myForm.reset();
    })
  };



    /**
   * navigateTo
   * * Method to navigate to a specific path.
   * 
   * @param path Parameter which contains the path to navigate to.
   * 
   */
    navigateTo = (path: string) => {
      this.router.navigate([path]);
    }
}
