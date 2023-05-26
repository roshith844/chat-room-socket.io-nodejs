import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket.service';
import { FormBuilder } from '@angular/forms';
import { nanoid } from 'nanoid' // for creating random Id
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chatroom';
  chat: any = [] 

  sendMessageForm = this.formBuilder.group({
    message: ''
  })

  constructor(
    private socketService: SocketService,
    private formBuilder: FormBuilder
  ) { }

  userId = nanoid(4) // creates 4 character unique id

  // sends message when form submits
  onSubmit() {
    if (!this.sendMessageForm.value.message) return
    this.socketService.sendChat(this.sendMessageForm.value.message, this.userId)
    this.sendMessageForm.reset()
  }

  // gets data from the backend
  ngOnInit(): void {
    this.socketService.onSendChat().subscribe((data: any) => {
      this.chat.unshift(data)
    })
  }
}
