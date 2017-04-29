import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  public doSomething(): void {
    console.log('click works2!');
    this.title = 'click works2!';
  }
}
