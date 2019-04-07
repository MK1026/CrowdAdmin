import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AppService } from '../app.service';
import { RegisterService } from './register.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AppService, RegisterService]
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;
    result: any;
    displayResult: any;
    labels: any;

    constructor(
        private appService: AppService,
        private router: Router,
        private formBuilder: FormBuilder,
        private registerService: RegisterService
        ) {

        this.labels = this.appService.getMainLabels();
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group ({
            emailField: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.email]),
            firstname: new FormControl('', [Validators.maxLength(50)]),
            lastname: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            budget: new FormControl('', [Validators.max(999999999.99)]),
            password: new FormControl('', [Validators.required, Validators.maxLength(50)]),
            passwordConfirm: new FormControl('', [Validators.required, Validators.maxLength(50)])
        }, {validator: this.MustMatch('password', 'passwordConfirm')});
    }

    get f() { return this.registerForm.controls; }

    saveRegistration() {
        console.warn(this.registerForm);
        this.submitted = true;

        // tslint:disable-next-line:no-unused-expression
        if (this.registerForm.invalid) {
            return;
        } else {
//            alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
            this.result = this.registerService.saveRegistrationDB(this.registerForm.value);
        }
    }

    cancelRegistration() {
        this.router.navigate(['./home']);
    }


    // custom validator to check that two fields match
    MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

            // set error on matchingControl if validation fails
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            } else {
                matchingControl.setErrors(null);
            }
        };
    }

}
