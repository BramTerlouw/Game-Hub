import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HeartsService } from '../../services/hearts.service';

@Component({
  selector: 'app-c-join-hearts',
  templateUrl: './c-join-hearts.component.html',
  styleUrls: ['./c-join-hearts.component.scss'],
})
export class CJoinHeartsComponent implements OnInit {

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
   * navigateTo
   * * Method to navigate to chatroom with roomcode from form.
   * 
   * TODO: Add validation for gamecode.
   */
  navigateToGame = () => {
    const gameRef = this.myForm.value['gamecode'];

    this.heartsService.getDoc(gameRef).then((docSnapshot) => {
      
      if (docSnapshot.exists) {
        this.heartsService.joinGame(gameRef);
        
        this.router.navigate(['/hearts/game/' + gameRef]);
      }
      else {
        alert('Game does not exist');
      }
    })

    this.myForm.reset();
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
