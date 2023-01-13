import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-settings-bar',
  templateUrl: './settings-bar.component.html',
  styleUrls: ['./settings-bar.component.scss'],
})
export class SettingsBarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {}

  logout = () => {
    this.auth.signOut();
  };

}
