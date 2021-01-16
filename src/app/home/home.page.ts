import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js'; 

@Component({
  selector: 'app-chat',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
 
  messages: Observable<any[]>;
  newMsg: string;
 
  constructor(private chatService: FirebaseService, private router: Router) { }
 
  ngOnInit() {
    this.messages = this.chatService.getChatMessages();

  }
 
  sendMessage() {
    this.newMsg = CryptoJS.AES.encrypt(this.newMsg.trim(), "marzam23").toString();
    this.chatService.addChatMessage(this.newMsg).then(() => {
      this.newMsg = '';
      this.content.scrollToBottom();
    });
  }
 
  signOut() {
    this.chatService.signOut().then(() => {
      this.router.navigateByUrl('', { replaceUrl: true });
    });
  }
 
}
