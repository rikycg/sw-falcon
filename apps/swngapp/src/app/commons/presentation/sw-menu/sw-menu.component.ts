import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AppService } from '../../../app.service';

@Component({
  selector: 'sw-menu',
  standalone: true,
  templateUrl: './sw-menu.component.html',
  styleUrls: ['./sw-menu.component.scss'],
  imports: [
    RouterModule,
    IonicModule,
  ],
})
export class SwMenuComponent {
  private appService = inject(AppService);

  onCloseMenu() {
    this.appService.closeSidebar();
  }
}