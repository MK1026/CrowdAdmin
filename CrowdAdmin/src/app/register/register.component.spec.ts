import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RegisterComponent', () => {
    let component: RegisterComponent;
    let fixture: ComponentFixture<RegisterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule, RouterTestingModule, HttpClientModule],
            declarations: [ RegisterComponent ]
        });

        fixture = TestBed.createComponent(RegisterComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('form invalid when empty', () => {
        expect(component.registerForm.valid).toBeFalsy();
    });

    it('email field validity', () => {
        let errors = {};
        const email = component.registerForm.controls['emailField'];

        errors = email.errors || {};
        expect(errors['required']).toBeTruthy();
        expect(errors['email']).toBeTruthy();

        email.setValue('test');
        errors = email.errors || {};
        expect(errors['email']).toBeTruthy();
        expect(errors['required']).toBeFalsy();

        email.setValue('a23456789012345678901234567890123456789012345678901');
        errors = email.errors || {};
        expect(errors['email']).toBeTruthy();
        expect(errors['maxlength']).toBeTruthy();

        email.setValue('a234567890123456789012345678901234567@901234567.nl');
        errors = email.errors || {};
        expect(errors['email']).toBeFalsy();
        expect(errors['maxlength']).toBeFalsy();
        expect(email.valid).toBeTruthy();
    });

    it('firstname field validity', () => {
        let errors = {};
        const firstname = component.registerForm.controls['firstname'];

        errors = firstname.errors || {};
        expect(errors['required']).toBeFalsy();

        firstname.setValue('test');
        expect(firstname.valid).toBeTruthy();

        firstname.setValue('a23456789012345678901234567890123456789012345678901');
        errors = firstname.errors || {};
        expect(errors['maxlength']).toBeTruthy();

        firstname.setValue('a2345678901234567890123456789012345678901234567890');
        errors = firstname.errors || {};
        expect(errors['maxlength']).toBeFalsy();
        expect(firstname.valid).toBeTruthy();
    });

    it('lastname field validity', () => {
        let errors = {};
        const lastname = component.registerForm.controls['lastname'];

        errors = lastname.errors || {};
        expect(errors['required']).toBeTruthy();

        lastname.setValue('test');
        errors = lastname.errors || {};
        expect(errors['required']).toBeFalsy();

        lastname.setValue('a23456789012345678901234567890123456789012345678901');
        errors = lastname.errors || {};
        expect(errors['maxlength']).toBeTruthy();

        lastname.setValue('a2345678901234567890123456789012345678901234567890');
        errors = lastname.errors || {};
        expect(errors['maxlength']).toBeFalsy();
        expect(lastname.valid).toBeTruthy();
    });

    it('budget field validity', () => {
        let errors = {};
        const budget = component.registerForm.controls['budget'];

        budget.setValue('1234.56');
        errors = budget.errors || {};
        expect(errors['required']).toBeFalsy();

        budget.setValue('1000000000');
        errors = budget.errors || {};
        expect(errors['max']).toBeTruthy();

        budget.setValue('999999999.99');
        errors = budget.errors || {};
        expect(errors['max']).toBeFalsy();
        expect(budget.valid).toBeTruthy();
    });

    it('password field validity', () => {
        let errors = {};
        const password = component.registerForm.controls['password'];

        errors = password.errors || {};
        expect(errors['required']).toBeTruthy();

        password.setValue('test');
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();

        password.setValue('a23456789012345678901234567890123456789012345678901');
        errors = password.errors || {};
        expect(errors['maxlength']).toBeTruthy();

        password.setValue('a2345678901234567890123456789012345678901234567890');
        errors = password.errors || {};
        expect(errors['maxlength']).toBeFalsy();
        expect(password.valid).toBeTruthy();
    });

    it('passwordConfirm field validity', () => {
        let errors = {};
        const passwordConfirm = component.registerForm.controls['passwordConfirm'];

        errors = passwordConfirm.errors || {};
        expect(errors['required']).toBeTruthy();

        passwordConfirm.setValue('test');
        errors = passwordConfirm.errors || {};
        expect(errors['required']).toBeFalsy();

        passwordConfirm.setValue('a23456789012345678901234567890123456789012345678901');
        errors = passwordConfirm.errors || {};
        expect(errors['maxlength']).toBeTruthy();

        passwordConfirm.setValue('a2345678901234567890123456789012345678901234567890');
        errors = passwordConfirm.errors || {};
        expect(errors['maxlength']).toBeFalsy();
        expect(passwordConfirm.valid).toBeFalsy();
    });

    it('password matching field validity', () => {
        let errors = {};
        const password = component.registerForm.controls['password'];
        const passwordConfirm = component.registerForm.controls['passwordConfirm'];

        passwordConfirm.setValue('test1');
        password.setValue('test');
        errors = passwordConfirm.errors || {};
        expect(errors['mustMatch']).toBeTruthy();

        passwordConfirm.setValue('test');
        password.setValue('test');
        errors = passwordConfirm.errors || {};
        expect(errors['mustMatch']).toBeFalsy();
    });

    it('form valid when mandatory fields filled.', () => {
        const password = component.registerForm.controls['password'];
        const passwordConfirm = component.registerForm.controls['passwordConfirm'];
        const lastname = component.registerForm.controls['lastname'];
        const email = component.registerForm.controls['emailField'];

        email.setValue('test@a.nl');
        lastname.setValue('test');
        passwordConfirm.setValue('test');
        password.setValue('test');
        expect(component.registerForm.valid).toBeTruthy();
    });
});
