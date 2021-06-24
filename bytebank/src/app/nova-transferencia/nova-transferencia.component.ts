import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output()

  constructor() { }

  ngOnInit(): void {
  }

  valor: number;
  destino: number;

  transferir(){
    console.log("Nova transferência solicitada");
    console.log(this.valor);
    console.log(this.destino);
  }

}
