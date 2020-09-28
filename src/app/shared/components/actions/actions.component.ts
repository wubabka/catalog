import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuService } from '../../../menu/menu.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent implements OnInit {
  constructor(private router: Router, private menuService: MenuService) {}

  ngOnInit(): void {}

  goToSection(): void {
    this.router.navigate(['/menu/add-section']);
    this.setCurrentElement();
  }

  goToItem(): void {
    this.router.navigate(['/menu/add-item']);
    this.setCurrentElement();
  }

  setCurrentElement(): void {
    this.menuService.currentElement = this.menuService.catalog;
  }
}
