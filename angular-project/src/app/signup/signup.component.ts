import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  form: any = {
      data: {},
      errorMsg: '',
      successMsg: ''
    }
  
    constructor(private router: Router) { }
  
    signup() {
      console.log("in signup function")
      console.log('form data:', this.form.data.firstName)
      console.log('form data:', this.form.data.lastName)
      console.log('form data:', this.form.data.login)
      console.log('form data:', this.form.data.password)

       if (this.form.data.login == 'admin') {
        this.form.errorMsg = 'login already exists'
    } else {
      this.form.successMsg = 'User Registered successfully'
    }

      
    }

}
