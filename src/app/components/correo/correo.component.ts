import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {
  // #region Properties (1)

  @Input() email: any;
@Output() accionRealizada: EventEmitter<any> = new EventEmitter();
  // #endregion Properties (1)

  // #region Constructors (1)

  constructor()
   {
  }

  // #endregion Constructors (1)

  // #region Public Methods (1)

  public ngOnInit(): void {
    // tslint:disable-next-line: triple-equals
    if (this.email !=  undefined){
      this.email = {
        titulo : this.email.titulo,
        cuerpo: this.email.cuerpo
      };
      console.log(this.email);
    }
  }
  // tslint:disable-next-line: typedef
  onReset(){ this.accionRealizada.emit();
  }

  // #endregion Public Methods (1)
}
