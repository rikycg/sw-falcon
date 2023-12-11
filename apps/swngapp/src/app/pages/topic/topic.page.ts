import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppService } from '../../app.service';
import { TopicServiceBase } from '../../commons/bases/topic-service.base';
import { SwNavigationComponent } from '../../commons/presentation/sw-navigation/sw-navigation.component';

@Component({
  selector: 'topic',
  standalone: true,
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    SwNavigationComponent,
  ],
})
export class TopicPage {
  private appService = inject(AppService);
  private topicService = inject(TopicServiceBase);

  title: string = this.topicService.title;

  ionViewWillEnter() {
    this.appService.closeSidebar();
  }

  openSidebar() {
    this.appService.openSidebar();
  }
}