import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() checked!: boolean;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Input() header!: string;
  @Input() question!: string;
  @Input() content!: string;
  // @Input() canSkip!: boolean;
  // @Output() skip = new EventEmitter<boolean>();

  toggle() {
    this.checkedChange.emit(!this.checked);
  }
}
