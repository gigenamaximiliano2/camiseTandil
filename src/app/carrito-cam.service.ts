import { Injectable } from '@angular/core';
import { Cam } from './cam-list/cam';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoCamService {

  private _listaCarro : Cam[] =[];
  listaCarro : BehaviorSubject<Cam[]> = new BehaviorSubject<Cam[]>([]); 

  constructor() { }

  AgregarAlCarrito(cam: Cam) {
    let item  : Cam | undefined ;
    item = this._listaCarro.find((v1) => v1.seleccion == cam.seleccion);
    if(!item){
      this._listaCarro.push({...cam});
    }else{
      item.cantidad += cam.cantidad;
    }
    this.listaCarro.next(this._listaCarro);
  }


}
