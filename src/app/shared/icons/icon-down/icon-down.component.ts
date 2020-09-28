import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-down',
  templateUrl: './icon-down.component.html',
})
export class IconDownComponent implements OnInit {
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {}
}
