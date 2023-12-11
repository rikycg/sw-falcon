import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { SwLoadingComponent } from './sw-loading.component';

@Injectable({
  providedIn: 'root'
})
export class SwLoadingService {
  modal: HTMLIonModalElement;

  constructor(
    private modalCtrl: ModalController,
  ) { }

  async show() {
    this.modal = await this.modalCtrl.create({
      component: SwLoadingComponent,
      cssClass: 'sw-loading-modal',
      backdropDismiss: false,
    });

    await this.modal.present();
  }

  hide() {
    if (!this.modal) return;

    this.modal.dismiss();
  }
}