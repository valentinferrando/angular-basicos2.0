import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  heroes: string[] = ['spiderman','ironman','thor', 'hulk'];
  heroeBorrado: string ='';
  constructor() { }

  ngOnInit(): void {
  }

  borrarHeroe (){
    // this.heroes.splice(0,0);  // esta es una manera de borrar elementos de un array
    // const heoreBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
   
  }

}
