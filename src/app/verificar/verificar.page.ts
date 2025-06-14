import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NavController } from '@ionic/angular';
import { ModalController } from '@ionic/angular'; //

@Component({
  selector: 'app-verificar',
  templateUrl: './verificar.page.html',
  styleUrls: ['./verificar.page.scss'],
})
export class VerificarPage implements OnInit {
  verificationCode: number | null = null;
  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) {}

  ngOnInit() {}
  verifyCode() {}

  async closeModal() {
    this.navCtrl.navigateRoot('/login');
  }
}
