import { Route } from '@angular/router';

import { TopicPage } from './topic.page';
import { TopicServiceBase } from '../../commons/bases/topic-service.base';
import { ProvideKeys } from '../../commons/enums/topics.enum';

export const routes: Route[] = [
  {
    path: '',
    component: TopicPage,
    children: [
      {
        path: '',
        redirectTo: 'groups/1',
        pathMatch: 'full',
      },
      {
        path: ':id/details',
        loadComponent: () => import('./pages/details/details.page').then(m => m.DetailsPage),
        providers: [
          {
            provide: ProvideKeys.TopicService,
            useExisting: TopicServiceBase,
          },
        ]
      },
      {
        path: 'groups/:page',
        loadComponent: () => import('./pages/groups/groups.page').then(m => m.GroupsPage),
        providers: [
          {
            provide: ProvideKeys.TopicService,
            useExisting: TopicServiceBase,
          },
        ]
      },
    ]
  },
];