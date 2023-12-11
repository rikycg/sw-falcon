import { WritableSignal, signal } from '@angular/core';
import { Pagination } from '@swfalcon/swdata';

import { ITopicItem } from '../interfaces/topic-item.interface';
import { Topic } from '../types/topic.type';

export abstract class TopicServiceBase {
  abstract getAllCase(page: number, search?: string): Promise<Pagination<Topic>>;
  abstract getByIdCase(id: number): Promise<Topic>;
  
  abstract component: unknown;
  abstract inputsKey: string;
  abstract title: string;
  abstract topicName: string;

  pages: Topic[][] = [];
  page = signal(1);
  total = signal(0);

  async getPage(page: number, search: string = ''): Promise<Topic[]> {
    this.page.set(page);

    if (this.pages[page]) return this.pages[page];

    const response = await this.getAllCase(page, search);

    this.pages[page] = response.data;
    this.total.set(response.total); 

    return this.pages[page];
  }

  async getById(id: number): Promise<ITopicItem> {
    let item = this.pages.flat().find(item => item.id === id);

    if (!item) {
      item = await this.getByIdCase(id);
    }

    return {
      component: this.component,
      data: { [this.inputsKey]: item },
    };
  }

  verifyIfExist(id: number): boolean {
    return !!this.pages.flat().find(item => item.id === id);
  }

  cleanPages() {
    this.pages = [];
  }
}