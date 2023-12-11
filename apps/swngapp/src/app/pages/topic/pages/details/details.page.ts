import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TopicServiceBase } from '../../../../commons/bases/topic-service.base';
import { ITopicItem } from '../../../../commons/interfaces/topic-item.interface';
import { CommonModule } from '@angular/common';
import { SwLoadingService } from 'apps/swngapp/src/app/commons/presentation/sw-loading/sw-loading.service';
import { ProvideKeys } from 'apps/swngapp/src/app/commons/enums/topics.enum';
import { IonicModule } from '@ionic/angular';

@Component({
  standalone: true,
  selector: 'details-page',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
  ],
})
export class DetailsPage  {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private swLoadingService = inject(SwLoadingService);
  
  item: ITopicItem;

  constructor(
    @Inject(ProvideKeys.TopicService) private topicService: TopicServiceBase,
  ) {}

  ionViewWillEnter() {
    this.setItem();
  }

  async setItem() {
    try {
      const { id } = this.route.snapshot.params;
  
      if (!this.topicService.verifyIfExist(+id)) {
        await this.swLoadingService.show();
      }
  
      this.item = await this.topicService.getById(+id);
      this.swLoadingService.hide();
    } catch (error) {
      this.router.navigate(['../../'], { relativeTo: this.route });
    } finally {
      this.swLoadingService.hide();
    }
  }
}