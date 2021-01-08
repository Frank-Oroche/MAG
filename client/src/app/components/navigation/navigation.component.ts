import { Component, OnInit } from '@angular/core';

import { CommunicationService } from '../../services/communication.service';

import { User } from 'src/app/models/User';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  // usr : boolean = false;

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

  userlogout: User = {
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

  constructor(private communicationService: CommunicationService) { 
    // if (communicationService.user.int_usercodigo != 0) {
    //   this.usuario = true;
    // } else {
    //   this.usuario = false;
    // }
    this.user = this.communicationService.user;
    console.log(this.user);
  }

  ngOnInit(): void {
    // this.user = this.communicationService.user;
    // console.log(this.user);
  }

  logout() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    Toast.fire({
      icon: 'success',
      title: 'Hasta luego, te esperamos! <i class="far fa-smile-wink"> </i>'
    })
    this.communicationService.UserDefiner(this.userlogout);
  }

}
