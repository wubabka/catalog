import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { Section } from '../../interfaces/section';

import { MenuService } from '../../menu.service';
import { PopoverService } from '../../../popover/popover.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss', '../catalog/common.scss'],
})
export class SectionComponent implements OnInit {
  @Input() section: Section;
  @Input() type: 'first' | 'second';
  @Input() isShowContent: boolean;
  @Input() isUpButton = true;
  @Input() isDownButton = true;

  @Output() clickUp = new EventEmitter();
  @Output() clickDown = new EventEmitter();
  @Output() clickMenu = new EventEmitter();

  @ViewChild('sectionElement', { static: false }) sectionElement: ElementRef;

  constructor(
    public menuService: MenuService,
    private popoverService: PopoverService
  ) {}

  ngOnInit(): void {}

  toggleList(): void {
    this.menuService.clearCommonList();

    this.isShowContent = !this.isShowContent;
  }

  onClickUp(): void {
    this.clickUp.emit(this.section);
  }

  onClickDown(): void {
    this.clickDown.emit(this.section);
  }

  onClickMenu(evt): void {
    this.menuService.clearCommonList();

    this.clickMenu.emit(evt);
  }

  showMenu(evt, item, type): void {
    this.popoverService.getPopoverData(evt);
    this.popoverService.getPopoverType(type);

    this.menuService.getCurrentElement(item);
  }

  addActive(): void {
    this.menuService.clearCommonList();

    this.sectionElement.nativeElement.classList.add('common--active');
  }
}
