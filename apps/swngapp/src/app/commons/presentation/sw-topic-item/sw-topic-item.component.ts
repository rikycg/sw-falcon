import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'sw-topic-item',
  templateUrl: './sw-topic-item.component.html',
  styleUrls: ['./sw-topic-item.component.scss'],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SwTopicItemComponent implements OnInit {
  @Input() name: string;
  @Input() topic: string;
  @Input() id: number;

  imageUrl: string;

  ngOnInit(): void {
    this.setImageUrl();
  }

  setImageUrl() {
    this.imageUrl = `/assets/images/${this.topic}/${this.id}.jpg`;
  }

  onImageError(event: any): void {
    event.target.src = '/assets/images/common/no-image.jpg';
  }
}