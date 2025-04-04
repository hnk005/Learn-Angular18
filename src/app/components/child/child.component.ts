import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  @Output() addItemEvent = new EventEmitter<string>();

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
