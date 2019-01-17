import { AppPage } from './app.po';

describe('crowd-admin2 App', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should display welcome message', () => {
    expect(element(by.css('app-root h1')).getText()).toEqual('Welkom bij Crowdfunds Administratie');
  });
  
  it('should display text', () => {
    expect(element(by.css('app-root p')).getText()).toEqual('Inleidende text voor de crowdfund admin.');
  });
  
  it ('should display page title', () => {
    expect(browser.getTitle()).toEqual('Crowdfunds investments')
  });
  
  it ('should contain menu uptions', () => {
    expect(element.all(by.css('app-root li')).count()).toBe(7);
    expect(element(by.css('.active')).getText()).toEqual('Home');
    expect(element.all(by.css('app-root li')).getText()).toContain('Investering');
    expect(element.all(by.css('app-root li')).getText()).toContain('Betaling');
    expect(element.all(by.css('app-root li')).getText()).toContain('Kosten');
    expect(element.all(by.css('app-root li')).getText()).toContain('Platform');
    expect(element.all(by.css('app-root li')).getText()).toContain('Registreren');
    expect(element.all(by.css('app-root li')).getText()).toContain('Inloggen');
  });
});
