import { Component, computed, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { SwMenuComponent } from './commons/presentation/sw-menu/sw-menu.component';
import { AppService } from './app.service';

@Component({
  standalone: true,
  selector: 'swfalcon-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterModule,
    IonicModule,
    SwMenuComponent
  ],
})
export class AppComponent {
  private appService = inject(AppService);

  isSidebarOpened = computed(() => this.appService.isSidebarOpened());
}
