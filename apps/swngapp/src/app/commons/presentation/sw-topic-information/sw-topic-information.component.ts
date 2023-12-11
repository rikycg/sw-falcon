import { CommonModule, KeyValue } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'sw-topic-information',
  standalone: true,
  templateUrl: './sw-topic-information.component.html',
  styleUrls: ['./sw-topic-information.component.scss'],
  imports: [
    CommonModule,
  ],
})
export class SwTopicInformation {
  @Input() imageUrl: string;
  @Input() list: KeyValue<string, string>[] = [];

  onImageError(event: any): void {
    event.target.src = '/assets/images/common/no-image.jpg';
  }
}