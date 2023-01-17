import { Component } from '@angular/core';
const data = require('./models/notas/data/curso.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  object = []



  objectCursos = data;
  arrayData = Object.values( data );
}
