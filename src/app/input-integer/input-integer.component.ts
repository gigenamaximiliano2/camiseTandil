import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Cam } from '../cam-list/cam';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {

  constructor(){ }

  @Input()
  cantidad!: number;

  @Input()
  max! : number;

  @Output()
  cantidadChange : EventEmitter<number>= new EventEmitter<number>();

   
  ngOnInit() : void {
  }

  incrementar() : void {
    if(this.cantidad < this.max)
      this.cantidad ++;
      this.cantidadChange.emit(this.cantidad);
  }

  decrementar() : void {
    if(this.cantidad > 0)
    this.cantidad --;
    this.cantidadChange.emit(this.cantidad);

  }
  cambiarCantidad(event: { key: any; }):void{
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
  }
}
