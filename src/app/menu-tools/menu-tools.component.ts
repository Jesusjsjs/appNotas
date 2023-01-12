import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let data = require( '../models/notas/data/curso.json' )


@Component({
  selector: 'menu-tools',
  templateUrl: './menu-tools.component.html',
  styleUrls: ['./menu-tools.component.css']
})
export class MenuToolsComponent implements OnInit {
  static exportarCurso() {
    throw new Error('Method not implemented.');
  }

  loginForm = new FormGroup({
    title: new FormControl('', Validators.required),
    nota: new FormControl('', Validators.required)
  })


  cursoArray = Object.values( data );

  constructor() { }

  ngOnInit(): void {}

  onLogin(formulario: any){
    this.cursoArray.push(formulario);
    console.log(  this.cursoArray );
  }


}
