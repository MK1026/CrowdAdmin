import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [AppService]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('should return object', inject([AppService], (service: AppService) => {
    const labels = service.getMainLabels();
    expect(Object.keys(labels).length).toBe(11);
    expect(labels.title).toEqual('Crowdfunds investments');
    expect(labels.login).toEqual('Inloggen');
    expect(labels.register).toEqual('Registreren');
    expect(labels.investment).toEqual('Investering');
    expect(labels.payment).toEqual('Betaling');
    expect(labels.costs).toEqual('Kosten');
    expect(labels.platform).toEqual('Platform');
    expect(labels.home).toEqual('Home');
    expect(labels.welcome).toEqual('Welkom bij Crowdfunds Administratie');
    expect(labels.text).toEqual('Inleidende text voor de crowdfund admin.');
    expect(labels.registerFormTitle).toEqual('Registreren bij CrowdAdmin');
  }));

});
