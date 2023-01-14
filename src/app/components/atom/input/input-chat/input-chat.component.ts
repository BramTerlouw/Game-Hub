import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-chat',
  templateUrl: './input-chat.component.html',
  styleUrls: ['./input-chat.component.scss'],
})
export class InputChatComponent implements OnInit {

  @Input() inputName!: string;
  @Output() messageEmitter = new EventEmitter();

  myForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() { 
    this.myForm = this.fb.group({
      message: ['']
    });
  }

  emitMessage = () => {
    this.messageEmitter.emit(this.myForm.value.message);
    this.myForm.reset();
  };
}
