import { Component, OnInit } from '@angular/core';
import { Cam } from './cam';
import { CarritoCamService } from '../carrito-cam.service';

@Component({
  selector: 'app-cam-list',
  templateUrl: './cam-list.component.html',
  styleUrl: './cam-list.component.scss'
})
export class CamListComponent implements OnInit{
  cams:Cam[] = [
    {
      seleccion : "Argentina",
      marca : "Adidas",
      precio : 100000,
      stock : 20,
      image : "assets/img/arg.jpg",
      oferta : false,
      cantidad : 0,
    },
    {
      seleccion : "Francia",
      marca : "Nike",
      precio : 80000,
      stock : 30,
      image : "assets/img/francia.jpeg",
      oferta : true,
      cantidad : 0,
    },

    {
      seleccion : "Brasil",
      marca : "Nike",
      precio : 95000,
      stock : 0,
      image : "assets/img/br2.jpg",
      oferta : false,
      cantidad : 0,
   },

   {
    seleccion : "España",
    marca : "Adidas",
    precio : 95000,
    stock : 25,
    image : "assets/img/esp.jpg",
    oferta : false,
    cantidad : 0,
 }
  ]
  constructor(private carrito : CarritoCamService){ }

  ngOnInit() : void {
    console.log('El componente ha sido inicializado');
  }

  AgregarAlCarrito(cam: Cam):void{
    this.carrito.AgregarAlCarrito(cam);
    cam.stock-= cam.cantidad;
    cam.cantidad = 0;
  }

 
}