import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})

// Manages socket.io actions
export class SocketService {
  constructor(private socket: Socket) { }

  // Sends message and userId to backend
  sendChat(message: string, userId: string) {
    this.socket.emit("chat", { message, userId })
  }

  // gets response from socket
  onSendChat() {
    return this.socket.fromEvent('chat');
  }
}
