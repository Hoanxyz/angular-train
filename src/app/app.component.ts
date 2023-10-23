import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('toggleComp', {static: true}) toggleComp!: ToggleComponent;
  // @ViewChild(ToggleComponent) toggleComp!: ToggleComponent;
  @ViewChildren(ToggleComponent) toggleComps!: QueryList<ToggleComponent>;
  @ViewChild('toggleBtn', {static: true}) toggleBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild('nameInput', {static: true}) nameInput!: ElementRef<HTMLInputElement>;
  title = 'train-angular';
  currentProgress = 70;
  name = "Angular";
  isChecked = true;
  showLast = true;
  question = {
    question1: true,
    question2: false
  }

  ngOnInit() {
    console.log('On Init: ', this.toggleComp, this.toggleBtn);
    this.nameInput.nativeElement.focus();
    this.toggleBtn.nativeElement.addEventListener('click', () => {this.toggleComp.toggle()});
  }

  ngAfterViewInit() {
    console.log(this.toggleComp);
    setTimeout(() => {this.toggleComp.toggle()}, 1000);
    this.toggleComps.changes.subscribe(console.log);
  }
}
