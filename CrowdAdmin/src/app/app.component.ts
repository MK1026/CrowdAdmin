import { AppService } from './app.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  labels: any;
  login: string;
  constructor(private appService: AppService) {
    this.labels = this.appService.getMainLabels();
    this.login = 'Inloggen';
  }
}
