import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { User } from 'src/app/models/User';

import { UsersService } from '../../services/users.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  //@HostBinding('class') classes = 'row';

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

  constructor(private userService: UsersService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  validarCampos() {
    if (this.user.vch_userusuario == '' || this.user.vch_userclave == '') {
      Swal.fire(
        'Campos Incompletos!',
        'No puede iniciar sesion sin ingresar los campos.',
        'warning'
      )
      return false;
    } else {
      return true;
    }
  }

  login() {
    if (this.validarCampos()) {
      this.userService.validateUser(this.user.vch_userusuario!).subscribe(
        res => {
          console.log(res);
          this.user = res;
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
            title: `Bienvenido ${this.user.vch_usernombre}!`
          })
          this.router.navigate(['/profile']);
        },
        err => console.error(err)
      );
    }
  }

}
