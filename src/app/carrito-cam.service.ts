import { Injectable } from '@angular/core';
import { Cam } from './cam-list/cam';

@Injectable({
  providedIn: 'root'
})
export class CarritoCamService {

  listaCarro : Cam[] = []; 

  constructor() { }

  AgregarAlCarrito(cam: Cam) {
    this.listaCarro.push(cam);
   
  }


}
