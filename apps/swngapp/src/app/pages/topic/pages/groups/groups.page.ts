import { Component, Inject, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';

import { Topic } from '../../../../commons/types/topic.type';
import { TopicServiceBase } from '../../../../commons/bases/topic-service.base';
import { ProvideKeys } from '../../../../commons/enums/topics.enum';
import { SwTopicItemComponent } from '../../../../commons/presentation/sw-topic-item/sw-topic-item.component';
import { SwLoadingService } from '../../../../commons/presentation/sw-loading/sw-loading.service';
import { AppService } from 'apps/swngapp/src/app/app.service';

@Component({
  standalone: true,
  selector: 'groups-page',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
  imports: [
    CommonModule,
    IonicModule,
    SwTopicItemComponent,
  ]
})
export class GroupsPage implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private swLoadingService = inject(SwLoadingService);
  private appService = inject(AppService);

  page = 1;
  list: Topic[] = [];
  topicName = '';
  searchValue = '';
  routeUrlSubscription: Subscription;

  constructor(
    @Inject(ProvideKeys.TopicService) private topicService: TopicServiceBase,
  ) {}

  ngOnInit(): void {
    this.setRouteUrlSubscription();
  }

  ngOnDestroy(): void {
    this.routeUrlSubscription.unsubscribe();
  }
  
  ionViewWillEnter() {
    this.appService.closeSidebar();
    
    this.setTopic();
  }

  setRouteUrlSubscription() {
    this.routeUrlSubscription = this.route.queryParamMap.subscribe(({ params }: any) => {
      const searchValue = params.search || '';

      if (searchValue !== this.searchValue) {
        this.searchValue = searchValue;
        this.topicService.cleanPages();
      }

      this.setGroup();
    });
  }

  setTopic() {
    this.topicName = this.topicService.topicName;
  }

  async setGroup() {
    try {
      this.page = Number(this.route.snapshot.paramMap.get('page'));
  
      if (!this.topicService.pages[this.page]) {
        await this.swLoadingService.show();
      }
      
      this.list = await this.topicService.getPage(
        Number(this.page),
        this.searchValue,
      );
    } catch (error) {
      this.router.navigate(['/']);
    } finally {
      this.swLoadingService.hide();
    }
  }
}