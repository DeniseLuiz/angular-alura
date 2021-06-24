import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() aoTransferir = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  valor: number;
  destino: number;

  transferir(){
    console.log("Nova transferência solicitada");
    const valorEmitir = {
      valor: this.valor,
      destino: this.destino
    }
    this.aoTransferir.emit(valorEmitir)
  }

}
