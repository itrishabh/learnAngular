import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  constructor(private router: Router) {}

  onSubmit(event: Event) {
    //event.preventDefault();
  }

  goToLoginPage() {
    this.router.navigate(['login']);
  }
}
