import { Component, VERSION } from '@angular/core';
import { SJss } from 'super-jss/lib/super-jss-model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  header: SJss = {
    backgroundColor: 'rgb(22 175 161)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    padding: '3rem',
  };
}
