import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Specie } from '@swfalcon/swdata';

import { SwTopicInformation } from '../../../../commons/presentation/sw-topic-information/sw-topic-information.component';

@Component({
  selector: 'sw-specie',
  standalone: true,
  templateUrl: './sw-specie.component.html',
  styleUrls: ['./sw-specie.component.scss'],
  imports: [
    CommonModule,
    SwTopicInformation,
  ]
})
export class SwSpecieComponent implements OnInit {
  @Input() specie: Specie;

  imageUrl: string;
  information: KeyValue<string, string>[] = [];

  ngOnInit(): void {
    this.setInfo();
    this.setImageUrl();
  }

  setImageUrl(): void {
    this.imageUrl = `/assets/images/species/${this.specie.id}.jpg`;
  }

  setInfo(): void {
    this.information = [{
      key: 'Name',
      value: this.specie.name,
    }, {
      key: 'Average Height',
      value: `${this.specie.averageHeight}cm`,
    }, {
      key: 'Language',
      value: this.specie.language,
    }]
  }
}