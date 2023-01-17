import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {
  @Input() productoInChild: object;

  Object = Object;
  constructor(){
    this.productoInChild = {};
  }

  ngOnInit(): void {}


  convertArray( valor:any ){
    let valorArrayy = Object.values( valor );
    return valorArrayy;
  }
}
