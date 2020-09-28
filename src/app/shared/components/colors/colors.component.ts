import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
  @Input() colors: any;

  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onValueChange(evt): void {
    this.valueChange.emit(evt);
  }
}
