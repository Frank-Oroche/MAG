import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Games';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesService } from '../../services/games.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: Game = {
    int_usercodigo: 0,
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private gamesService: GamesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gamesService.getGame(params.id).subscribe(
        res => {
          console.log(res);
          this.game = res;
          this.edit = true;
        },
        err => console.error(err)
      );
    }
  }

  validarCampos() {
    if (this.game.title == '' || this.game.description == '' || this.game.image == '') {
      Swal.fire(
        'Campos Incompletos!',
        'Complete los campos porfavor',
        'warning'
      )
      return false;
    } else {
      return true;
    }
  }

  saveNewGame() {
    if (this.validarCampos()) {
      delete this.game.id;
      delete this.game.created_at;
      this.game.int_usercodigo=1;

      this.gamesService.saveGame(this.game).subscribe(
        res => {
          console.log(res);
          Swal.fire(
            'Guardado!',
            'Juego guardado correctamente :D',
            'success'
          )
          this.router.navigate(['/games']);
        },
        err => console.error(err)
      );
    }
  }

  updateGame() {
    if (this.validarCampos()) {
      Swal.fire({
        title: 'Esta seguro de EDITAR?',
        text: "No podras revertir esta accion!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, editalo!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.gamesService.updateGame(String(this.game.id), this.game).subscribe(
            res => {
              console.log(res);
              Swal.fire(
                'Editado!',
                'Juego editado correctamente :D',
                'success'
              )
              this.router.navigate(['/games']);
            },
            err => console.error(err)
          );
        }
      })
    }
  }

  cancel() {
    this.router.navigate(['/games']);
  }

}
