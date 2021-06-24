import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias : any[] = [];
  // QUESTION: por que a variavel só funciona com o any?

  transferir($event){
    const transferencia = {...$event, data: new Date()}
    this.transferencias.push(transferencia);
  }
}
