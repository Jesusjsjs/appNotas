import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor( private dataSvc: DataService ) { }

  ngOnInit(): void {
    console.log( this.dataSvc.getAllNotes );
  }

}
