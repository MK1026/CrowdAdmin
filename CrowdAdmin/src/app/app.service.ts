import { Injectable } from '@angular/core';

    const mainLabels = [{title: 'Crowdfund investments', login: 'Inloggen', register: 'Registreren' }];

@Injectable()
export class AppService {

  private labels;

  constructor() {
    this.labels = mainLabels;
  }

  getMainLabels() {
    return this.labels;
  }
}
