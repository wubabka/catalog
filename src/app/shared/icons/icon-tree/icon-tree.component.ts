import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-tree',
  templateUrl: './icon-tree.component.html',
})
export class IconTreeComponent implements OnInit {
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {}
}
