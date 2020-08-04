import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {
  // #region Properties (1)

  public email: any;

  // #endregion Properties (1)

  // #region Constructors (1)

  constructor()
   {
     this.email = {
  titulo : 'Titulo del email',
  cuerpo : 'ksjdhbskdnglnvlsanjkgbasjkbgjkasb',
};
  }

  // #endregion Constructors (1)

  // #region Public Methods (1)

  public ngOnInit(): void {
  }

  // #endregion Public Methods (1)
}
