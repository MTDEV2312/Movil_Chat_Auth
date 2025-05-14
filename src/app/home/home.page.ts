import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { AvatarService } from '../services/avatar.service';
import {Message,ChatService} from '../services/chat.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile = null;
  messages: Message[] = [];
  newMessage = '';
  userName = '';
  constructor(
    private avatarService: AvatarService,
    private authService: AuthService,
    private router: Router,
    private chatService: ChatService
  ) {
    this.avatarService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
    // Obtener el email del usuario autenticado
    const auth: any = (this.authService as any).auth;
    if (auth && auth.currentUser) {
      this.userName = auth.currentUser.email;
    }
  }

  ngOnInit() {
    this.chatService.getMessages().subscribe(res => {
      this.messages = res;
    });
  }

    sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.chatService.sendMessages(this.newMessage, this.userName);
      this.newMessage = '';
    }
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }



}
