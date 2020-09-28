import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Popover } from '../popover';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() popover: Popover;

  @Output() clickItem = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClickItem(evt): void {
    this.clickItem.emit(evt);
  }
}
