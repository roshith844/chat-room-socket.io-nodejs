import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  constructor(private socket: Socket) { }
  sendChat(message: string, userId: string) {
    this.socket.emit("chat", { message, userId })
  }
  onSendChat() {
    return this.socket.fromEvent('chat');
  }
}
