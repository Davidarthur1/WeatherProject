import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonLabel : string = 'Button Label';
  @Output() buttonClick = new EventEmitter();
  onButtonClick() {
    this.buttonClick.emit
  }

}
