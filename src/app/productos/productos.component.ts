import { Component, OnInit } from '@angular/core';
const data = require('../models/notas/data/curso.json');



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  arrayCursos = Object.values( data );
  ngOnInit(): void {
    console.log( this.arrayCursos )
  }

  convertArray( valor:any ){
    let valorArrayy = Object.values( valor );
    return valorArrayy;
  }
}
