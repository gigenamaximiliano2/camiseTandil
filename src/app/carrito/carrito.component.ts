import { Component, OnInit } from '@angular/core';
import { CarritoCamService } from '../carrito-cam.service';
import { Cam } from '../cam-list/cam';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {

  listaCarro$ : Observable<Cam[]> | undefined ;
  constructor(private carrito: CarritoCamService){
    this.listaCarro$ = carrito.listaCarro.asObservable() ;
   }

  ngOnInit(): void {
    
  }

}
