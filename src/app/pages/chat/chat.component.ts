import { Component } from '@angular/core';

interface Message {
  text: string;
  type: 'incoming' | 'outgoing';
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messages: Message[] = [
    { text: 'Hola, ¿cómo estás?', type: 'incoming' },
    { text: 'Hola! Bien, ¿y tú?', type: 'outgoing' },
    { text: 'Todo bien, gracias', type: 'incoming' }
  ];

  newMessage: string = '';

  sendMessage() {
    if (this.newMessage.trim() === '') {
      return;
    }

    this.messages.push({ text: this.newMessage, type: 'outgoing' });
    this.newMessage = '';
  }
}
