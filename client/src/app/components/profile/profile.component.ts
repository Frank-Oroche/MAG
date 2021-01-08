import { Component, OnInit } from '@angular/core';

import { CommunicationService } from '../../services/communication.service';

import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = {
    int_usercodigo: 0,
    vch_userpaterno: '',
    vch_usermaterno: '',
    vch_usernombre: '',
    vch_userciudad: '',
    vch_userdireccion: '',
    vch_usertelefono: '',
    vch_userusuario: '',
    vch_userclave: '',
  };

  constructor(private communicationService: CommunicationService) { }

  ngOnInit(): void {
    this.user = this.communicationService.user;
  }

}
