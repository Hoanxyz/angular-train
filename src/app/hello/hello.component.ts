import { Component, Input } from '@angular/core';
import { users, User } from '../data-test/users';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent {
  inputType = 'text';
  user = {
    name: 'Hoan',
    age: 27
  };
  @Input() name!:string;
  users: Array<User> = users;
  isDanger = false;
  isWarning = false;

  showMgs() {
    alert('Hello');
  }

  ngOnInit() {
    console.log('Hello Init');
  }

  ngOndestoy() {
    console.log('Hello Destroy');
  }
}
