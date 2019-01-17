import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { Injectable } from '@angular/core';

const mockMainLabels = {title: 'Crowdfunds investments',
      login: 'Login',
      register: 'Register',
      investment: 'Investment',
      payment: 'Payment',
      costs: 'Cost',
      platform: 'Platform',
      home: 'Home test',
      welcome: 'Welcome testmessage',
      text: 'Preface for the crowdfund admin.'
};

@Injectable()
class MockAppService {

  private labels;

  constructor() {
    this.labels = mockMainLabels;
  }

  getMainLabels() {
    return this.labels;
  }
}



describe('AppComponent', () => {
  let appService: AppService
  var fixture; 
    
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{provide: AppService, useClass: MockAppService}]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });
  
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
  }));
  
/*  it('should render welcome message in a h1 tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome testmessage');
  }));
  
  it('should have Home Test in ul tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul').textContent).toContain('Home Test');
  }));*/
});
