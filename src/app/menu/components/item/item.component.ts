import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { Item } from '../../interfaces/item';

import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss', '../catalog/common.scss'],
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  @Input() isUpButton = true;
  @Input() isDownButton = true;

  @Output() clickUp = new EventEmitter();
  @Output() clickDown = new EventEmitter();
  @Output() clickMenu = new EventEmitter();

  @ViewChild('itemElement', { static: false }) itemElement: ElementRef;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {}

  onClickUp(): void {
    this.clickUp.emit(this.item);
  }

  onClickDown(): void {
    this.clickDown.emit(this.item);
  }

  onClickMenu(evt): void {
    this.menuService.clearCommonList();

    this.clickMenu.emit(evt);
  }

  addActive(): void {
    this.menuService.clearCommonList();

    this.itemElement.nativeElement.classList.add('common--active');
  }
}
