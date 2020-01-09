import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RegisterService {

  constructor(private http: HttpClient) { }

  saveRegistrationDB (regValues: JSON) {
    // Sla registratie op

    const inData = JSON.parse(JSON.stringify(regValues));

    // json to send
    const regToStore = {
      'email': inData.emailField,
      'firstname': inData.firstname,
      'lastname': inData.lastname,
      'budget': inData.budget,
      'password': inData.password
    };

    const url = '/api/user/createUser.php';
    this.http.post(url, regToStore).subscribe(
        data => {
            console.log('POST Request is successful, ', data);
            alert('Gegevens opgeslagen.');
            return 'Gegevens opgeslagen.';

        },
        error => {
            console.log('Error', error);
            switch (error.status) {
                case 503:
                    alert ('Email adres bestaat al');
                    break;
                default:
                    alert ('Er is iets fout gegaan. Probeer later opnieuw');
                    break;
            }

            return error.status;
        }
    );

  }
}
