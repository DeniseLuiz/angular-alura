import { TransferenciaService } from './../services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  // QUESTION: por que a variavel só funciona com o any?

  constructor(private service: TransferenciaService){}

}
