import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  constructor(private socket: Socket) {

   }

   public getIn(house) {
     console.log('Entre');
     this.socket.emit('entrar', house);
   }

   public getOut(house) {
    this.socket.emit('salir', house);
  }

   public sendMessage(message) {
    console.log('Enviar');
    this.socket.emit('chatear', message);
   }

   public getMessage() {
     return new Observable( (observer) =>
      this.socket.on('chatear', (message) => {
        observer.next(message);
      })
     );
   }
}
