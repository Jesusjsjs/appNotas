import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
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
    description: new FormControl('', Validators.required)
  })

  @Input() productoInChild : any;


  cursoArray = Object.values( data );

  constructor() {
    this.productoInChild ={};
  }
  element = {}

  ngOnInit(): void {}

  onLogin(formulario: any){
    this.productoInChild.push( formulario.value );
    console.log( this.productoInChild );
  }


}
