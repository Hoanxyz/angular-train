import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';
  @Input() set progress(val: number) {
    if (val <= 100) {
      this._progress = val;
    } else {
      this._progress = 100;
    }
  };
  private _progress = 50;
  get progress() {
    return this._progress;
  }

  constructor() {
  }

  ngOnInit(): void {
    console.log('Init: ', this.progress, this.progressColor, this.backgroundColor);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change: ', this.progress, this.progressColor, this.backgroundColor);
  }
}
