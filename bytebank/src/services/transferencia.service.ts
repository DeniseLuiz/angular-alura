import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transferencia } from 'src/app/model/transferencia.model';


@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];
   }

   get transferencias(){
     return this.listaTransferencia;
   }

   todasTransferencias() : Observable<Transferencia[]>{
     return this.httpClient.get<Transferencia[]>(this.url)
   }

   adicionar(transferencia: Transferencia): Observable<Transferencia>{
     this.tratarData(transferencia);
     return this.httpClient.post<Transferencia>(this.url, transferencia);
   }

   private tratarData(transferencia: any){
     transferencia.data = new Date();
   }
}
