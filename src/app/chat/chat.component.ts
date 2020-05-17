import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SocketIoService } from './socket-io.service';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  user;
  message;
  mensajes: any[];
  @ViewChild('msg_box') private myBox: ElementRef;

  constructor(private socketService: SocketIoService,
              private messageService: MessagesService) {

               }

  ngOnInit(): void {
    this.mensajes = [];
    this.messageService.loadUser();
    this.messageService.loadMessages();
    this.messageService.userSubject.subscribe((data) => {
      this.user = data;
      console.log(this.user);
      this.socketService.getIn(this.user.house);
    });

    this.messageService.historySubject.subscribe((data) => {
      this.mensajes = data;
    });

    this.socketService.getMessage().subscribe(
      (msg) => {
        console.log(msg);
        this.mensajes.push(msg);
        this.scrollToBottom();
      });

  }

  async sendMessage() {
    await this.socketService.sendMessage({
      user: this.user.uid,
      house: this.user.house,
      msg: this.message,
      time: new Date()
    });
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.myBox.nativeElement.scrollTop = this.myBox.nativeElement.scrollHeight;
  }



}
