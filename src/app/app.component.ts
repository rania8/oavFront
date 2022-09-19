import { Component } from '@angular/core';
import { Options } from 'angular2-notifications';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oav-front';
  public options = {

    position: ['top', 'center'],

    timeOut: 3000,

    lastOnBottom: false

} as Options;
}
