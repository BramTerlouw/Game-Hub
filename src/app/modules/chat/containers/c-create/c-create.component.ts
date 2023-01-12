import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-c-create',
  templateUrl: './c-create.component.html',
  styleUrls: ['./c-create.component.scss'],
})
export class CCreateComponent implements OnInit {

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
   * handleCreate
   * * Method to create a new room
   * 
   */
  handleCreate = () => {
    const roomRef = this.myForm.value['roomcode'];

    this.chatService.getDoc(roomRef).then((docSnapshot) => {
      if (docSnapshot.exists) {
       alert('Room already exists');
      }
      else {
        this.chatService.createRoom(this.myForm.controls['roomcode'].value);
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
