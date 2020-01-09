import { TestBed, inject, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
    let injector: TestBed;
    let service: RegisterService;
    let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [RegisterService]
    });
    injector = getTestBed();
    service = injector.get(RegisterService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should be created', inject([RegisterService], (service: RegisterService) => {
    expect(service).toBeTruthy();
  }));

  it('#saveRegistrationDB method', () => {
      const dummyParams = JSON.parse(JSON.stringify([
            { emailField: 'a@b.nl'},
            { firstname: 'Jan'},
            { lastname: 'de Tester'},
            { budget: 9000},
            { password: 'abc'},
            { passwordConfirm: 'abc'}
      ]));

      service.saveRegistrationDB(dummyParams)
//      .subscribe(data => {
//          expect(data).toEqual('User was created');
//      });
  });
});
