import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-menu',
  templateUrl: './icon-menu.component.html',
})
export class IconMenuComponent implements OnInit {
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {}
}
