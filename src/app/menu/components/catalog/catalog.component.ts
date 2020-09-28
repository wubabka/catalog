import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';

import menu from '../../menu.json';

import { MenuService } from '../../menu.service';
import { PopoverService } from '../../../popover/popover.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  currentElement = null;

  @ViewChild('popover', { static: false }) popover: ElementRef;

  @HostListener('document:click', ['$event'])
  onOutsideClick(evt): any {
    const path = evt.path || (evt.composedPath && evt.composedPath());

    for (const val of path) {
      if (val?.classList?.contains('popover-detect')) {
        if (this.currentElement === val && this.popover) {
          this.popoverService.hidePopover();
        } else {
          this.popoverService.showPopover();
        }

        this.currentElement = val;

        break;
      }
    }

    if (!path.some((el) => el === this.currentElement)) {
      this.popoverService.hidePopover();
    }
  }

  constructor(
    public menuService: MenuService,
    public popoverService: PopoverService,
    private router: Router
  ) {
    if (this.menuService.getFromLocalStorage('menu')) {
      this.menuService.catalog = this.menuService.getFromLocalStorage('menu');
    } else {
      this.menuService.setToLocalStorage('menu', menu);
      this.menuService.catalog = this.menuService.getFromLocalStorage('menu');
    }
  }

  ngOnInit(): void {
    if (!this.menuService.catalog.length) {
      this.router.navigate(['/menu/empty']);
    }
  }

  showPopover(evt, item, type): void {
    this.popoverService.getPopoverData(evt);
    this.popoverService.getPopoverType(type);

    this.menuService.getCurrentElement(item);
  }

  popoverCoords(): any {
    return {
      top: this.popoverService.popover.top + 'px',
      left: this.popoverService.popover.left + 'px',
      width: 'calc(100% - ' + this.popoverService.popover.width + 'px)',
    };
  }
}
