import { TestBed, async, fakeAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { appRoutes } from './app.module';

describe('AppComponent', () => {
    let location: Location;
    let router: Router;
    let fixture;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(appRoutes)],
      declarations: [AppComponent, HomeComponent],
      providers: [{provide: AppService}],
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have Home Test in ul tag', async(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul').textContent).toContain('Home');
  }));

  it('navigate to "" redirects to /home', fakeAsync(() => {
      router.navigate(['']).then(() => {
          expect(location.path()).toBe('/home');
      });
  }));

  it('navigate to "home" takes you to /home', fakeAsync(() => {
      router.navigate(['/home']).then(() => {
          expect(location.path()).toBe('/home');
      });
  }));
});
