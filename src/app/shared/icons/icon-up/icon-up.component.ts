import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-up',
  templateUrl: './icon-up.component.html',
})
export class IconUpComponent implements OnInit {
  @Input() color: string;

  constructor() {}

  ngOnInit(): void {}
}
