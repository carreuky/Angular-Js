import { Component } from '@angular/core';
import { LoginForm } from 'src/app/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: LoginForm = {
    email: '',
    password: ''
  }

  submit(){
    console.log(this.form)
  }
}
