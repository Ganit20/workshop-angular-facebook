import { UserService } from './../../wall/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isRegistrationSuccess=false;
  registrationForm = new FormGroup({
    email:new FormControl(),
    password: new FormControl(),
    passwordConfirmation: new FormControl(),
    person: new FormGroup({
      name:new FormControl(),
      surname:new FormControl()
    })
  })
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    const form = this.registrationForm.getRawValue();
    const status = this.userService.addUser({
      email:form.email,
      password: form.password,
      passwordConfirmation: form.passwordConfirmation,
      person:{
        name:form.person.name,
        surname:form.person.surname
      }
    });
    this.isRegistrationSuccess=status;
  }
}
