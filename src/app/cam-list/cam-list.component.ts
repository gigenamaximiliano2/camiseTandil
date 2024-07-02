import { Component, OnInit } from '@angular/core';
import { Cam } from './cam';

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
  constructor(){ }

  ngOnInit() : void {
    console.log('El componente ha sido inicializado');
  }

  incrementar(cam : Cam) : void {
    if(cam.cantidad < cam.stock)
    cam.cantidad ++;
  }

  decrementar(cam : Cam) : void {
    if(cam.cantidad > 0)
    cam.cantidad --;
  }
}
