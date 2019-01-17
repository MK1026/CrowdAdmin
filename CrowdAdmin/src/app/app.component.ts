import { AppService } from './app.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent {
  labels: any;
  login: string;
  constructor(private appService: AppService, private titleService: Title) {
    this.labels = this.appService.getMainLabels();

    this.titleService.setTitle (this.labels.title);
  }
}
