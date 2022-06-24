import {Component, Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  @Input() title: string = 'Default';
  @Input() imageURL: string | null = null
  @Input() height = 64
  constructor() { }
}
