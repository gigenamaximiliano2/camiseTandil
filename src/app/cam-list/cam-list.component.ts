import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cam-list',
  templateUrl: './cam-list.component.html',
  styleUrl: './cam-list.component.scss'
})
export class CamListComponent implements OnInit{
  
  arg = {
    "Seleccion" : "Argentina",
    "Marca" : "Adidas",
    "Precio" : 100000,
    "Stock" : 20,
    "image" : "assets/img/arg.jpeg"
  }
  fra = {
    "Seleccion" : "Francia",
    "Marca" : "Adidas",
    "Precio" : 80000,
    "Stock" : 300,
    "image" : "assets/img/fr.jpg"
  }

  constructor(){ }

  ngOnInit() : void {
    console.log('El componente ha sido inicializado');
  }
}
