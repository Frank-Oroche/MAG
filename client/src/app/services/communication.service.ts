import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

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

  constructor() { }

  public UserDefiner(usuario : User) {
    console.log('Se esta definiendo un Usuario');
    this.user = usuario;
    console.log(this.user);
  }

}
