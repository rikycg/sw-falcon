import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Starship } from '@swfalcon/swdata';

import { SwTopicInformation } from '../../../../commons/presentation/sw-topic-information/sw-topic-information.component';

@Component({
  selector: 'sw-starship',
  standalone: true,
  templateUrl: './sw-starship.component.html',
  styleUrls: ['./sw-starship.component.scss'],
  imports: [
    CommonModule,
    SwTopicInformation,
  ]
})
export class SwStarshipComponent implements OnInit {
  @Input() starship: Starship;

  imageUrl: string;
  information: KeyValue<string, string>[] = [];

  ngOnInit(): void {
    this.setInfo();
    this.setImageUrl();
  }

  setImageUrl(): void {
    this.imageUrl = `/assets/images/starships/${this.starship.id}.jpg`;
  }

  setInfo(): void {
    this.information = [{
      key: 'Name',
      value: this.starship.name,
    }, {
      key: 'Model',
      value: this.starship.model,
    }, {
      key: 'Manufacturer',
      value: this.starship.manufacturer,
    }, {
      key: 'Cost',
      value: this.starship.cost,
    }, {
      key: 'Passengers',
      value: this.starship.passengers,
    }, {
      key: 'Speed',
      value: this.starship.speed,
    }, {
      key: 'Class',
      value: this.starship.starshipClass,
    }]
  }
}