import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { People } from '@swfalcon/swdata';
import { SwTopicInformation } from 'apps/swngapp/src/app/commons/presentation/sw-topic-information/sw-topic-information.component';

@Component({
  selector: 'sw-people',
  standalone: true,
  templateUrl: './sw-people.component.html',
  styleUrls: ['./sw-people.component.scss'],
  imports: [
    CommonModule,
    SwTopicInformation,
  ]
})
export class SwPeopleComponent implements OnInit {
  @Input() people: People;

  imageUrl: string;
  information: KeyValue<string, string>[] = [];

  ngOnInit(): void {
    this.setInfo();
    this.setImageUrl();
  }

  setImageUrl(): void {
    this.imageUrl = `/assets/images/people/${this.people.id}.jpg`;
  }

  setInfo(): void {
    this.information = [{
      key: 'Name',
      value: this.people.name,
    }, {
      key: 'Height',
      value: this.people.height,
    }, {
      key: 'Hair Color',
      value: this.people.hairColor,
    }, {
      key: 'Skin Color',
      value: this.people.skinColor,
    }, {
      key: 'Eye Color',
      value: this.people.eyeColor,
    }, {
      key: 'Gender',
      value: this.people.gender,
    }]
  }
}