import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  user = {
    username: '',
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('Register submitted:', this.user);
    // Goi API
  }
}
