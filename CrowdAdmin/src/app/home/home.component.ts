import { Component, OnInit } from '@angular/core';

import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AppService]

})
export class HomeComponent implements OnInit {
    labels: any;

  constructor(private appService: AppService) {
          this.labels = this.appService.getMainLabels();
  }

  ngOnInit() {
  }

}
