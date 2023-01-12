import { Component, OnInit } from '@angular/core';
import { docSnapshots } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-c-join',
  templateUrl: './c-join.component.html',
  styleUrls: ['./c-join.component.scss'],
})
export class CJoinComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private chatService: ChatService) { }

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
  navigateToRoom = () => {
    const roomRef = this.myForm.value['roomcode'];

    this.chatService.getDoc(roomRef).then((docSnapshot) => {
      if (docSnapshot.exists) {
        this.router.navigate(['/chat/room/' + roomRef]);
      }
      else {
        alert('Room does not exist');
      }
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
