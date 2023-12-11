import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Vehicle } from '@swfalcon/swdata';

import { SwTopicInformation } from '../../../../commons/presentation/sw-topic-information/sw-topic-information.component';

@Component({
  selector: 'sw-vehicle',
  standalone: true,
  templateUrl: './sw-vehicle.component.html',
  styleUrls: ['./sw-vehicle.component.scss'],
  imports: [
    CommonModule,
    SwTopicInformation,
  ]
})
export class SwVehicleComponent implements OnInit {
  @Input() vehicle: Vehicle;

  imageUrl: string;
  information: KeyValue<string, string>[] = [];

  ngOnInit(): void {
    this.setInfo();
    this.setImageUrl();
  }

  setImageUrl(): void {
    this.imageUrl = `/assets/images/vehicles/${this.vehicle.id}.jpg`;
  }

  setInfo(): void {
    this.information = [{
      key: 'Name',
      value: this.vehicle.name,
    }, {
      key: 'Model',
      value: this.vehicle.model,
    }, {
      key: 'Manufacturer',
      value: this.vehicle.manufacturer,
    }, {
      key: 'Cost',
      value: this.vehicle.cost,
    }, {
      key: 'Passengers',
      value: this.vehicle.passengers,
    }, {
      key: 'Speed',
      value: this.vehicle.speed,
    }]
  }
}