import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '@swfalcon/swdata';

import { SwTopicInformation } from '../../../../commons/presentation/sw-topic-information/sw-topic-information.component';

@Component({
  selector: 'sw-planet',
  standalone: true,
  templateUrl: './sw-planet.component.html',
  styleUrls: ['./sw-planet.component.scss'],
  imports: [
    CommonModule,
    SwTopicInformation,
  ]
})
export class SwPlanetComponent implements OnInit {
  @Input() planet: Planet;

  imageUrl: string;
  information: KeyValue<string, string>[] = [];

  ngOnInit(): void {
    this.setInfo();
    this.setImageUrl();
  }

  setImageUrl(): void {
    this.imageUrl = `/assets/images/planets/${this.planet.id}.jpg`;
  }

  setInfo(): void {
    this.information = [{
      key: 'Name',
      value: this.planet.name,
    }, {
      key: 'Diameter',
      value: this.planet.diameter,
    }, {
      key: 'Climate',
      value: this.planet.climate,
    }, {
      key: 'Terrain',
      value: this.planet.terrain,
    }, {
      key: 'Population',
      value: `${this.planet.population} residents`,
    }]
  }
}