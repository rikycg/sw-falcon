import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, computed, inject } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';

import { TopicServiceBase } from '../../bases/topic-service.base';

@Component({
  selector: 'sw-navigation',
  standalone: true,
  templateUrl: './sw-navigation.component.html',
  styleUrls: ['./sw-navigation.component.scss'],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
  ]
})
export class SwNavigationComponent implements OnInit, OnDestroy {
  @Input() title: string = '';

  @Output() prev = new EventEmitter<void>();
  @Output() search = new EventEmitter<string>();
  @Output() openMenu = new EventEmitter<void>();

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private topicService = inject(TopicServiceBase);

  routeUrlSubscription: Subscription;
  routeQueryParamsSubscription: Subscription;
  isOnDetailsPage: boolean = false;
  isSearching = false;
  searchValue = '';

  prevDisabled = computed(() => this.topicService.page() === 1);
  nextDisabled = computed(() => {
    const total = this.topicService.total();
    const page = this.topicService.page();

    return (page * 10) >= total;
  });

  ngOnInit(): void {
    this.setRouteSubscriptions();
  }

  ngOnDestroy(): void {
    this.routeUrlSubscription.unsubscribe();
    this.routeQueryParamsSubscription.unsubscribe();
  }

  setRouteSubscriptions(): void {
    this.routeUrlSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isOnDetailsPage = event.url.includes('details');
      }
    });

    this.routeQueryParamsSubscription = this.route.queryParamMap.subscribe(({ params }: any) => {
      this.searchValue = params.search || '';
      this.isSearching = !!this.searchValue
    });
  }

  onBack(): void {
    this.router.navigate(
      ['/', this.topicService.topicName, 'groups', this.topicService.page()],
      { relativeTo: this.route }
    );
  }

  onNext(): void {
    if (this.nextDisabled()) return;

    this.goToGroup(this.topicService.page() + 1);
  }

  onPrev(): void {
    if (this.prevDisabled()) return;

    this.goToGroup(this.topicService.page() - 1);
  }

  goToGroup(page: number): void {
    this.router.navigate(
      ['../', this.topicService.topicName, 'groups', page],
      { relativeTo: this.route }
    );
  }

  onOpenMenu(): void {
    this.openMenu.emit();
  }

  onActivateSearch(value: boolean): void {
    this.isSearching = value;
  }

  onSearchCleared(): void  {
    this.searchValue = '';
    this.onActivateSearch(false);
    this.onSearch();
  }

  onSearch(): void {
    this.router.navigate(
      ['../', this.topicService.topicName, 'groups', 1],
      { 
        relativeTo: this.route,
        queryParams: { search: this.searchValue }
      }
    );
  }
}