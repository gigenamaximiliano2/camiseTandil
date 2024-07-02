import { Component, OnInit } from '@angular/core';
import { CarritoCamService } from '../carrito-cam.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {
  constructor(private carrito: CarritoCamService){ }
  
  ngOnInit(): void {
    
  }

}
