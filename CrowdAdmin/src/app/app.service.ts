import { Injectable } from '@angular/core';

const mainLabels = {title: 'Crowdfunds investments',
      login: 'Inloggen',
      register: 'Registreren',
      investment: 'Investering',
      payment: 'Betaling',
      costs: 'Kosten',
      platform: 'Platform',
      home: 'Home',
      welcome: 'Welkom bij Crowdfunds Administratie',
      text: 'Inleidende text voor de crowdfund admin.'
};

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
