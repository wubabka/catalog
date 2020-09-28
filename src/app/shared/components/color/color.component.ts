import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
})
export class ColorComponent implements OnInit {
  @Input() color: string;
  @Input() id: number | string;
  @Input() name: string;
  @Input() value: string;

  @Output() valueChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onValueChange(evt): void {
    this.valueChange.emit(evt);
  }
}
