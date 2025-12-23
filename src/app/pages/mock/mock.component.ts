import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MockAuthService } from '../../services/mock-auth.service';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrl: './mock.component.scss'
})
export class MockComponent {

  password = '';
  error = '';
  showPassword = false;

  constructor(
    private mockAuth: MockAuthService,
    private router: Router
  ) {}


  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  login() {
    this.mockAuth.login(this.password).subscribe(students => {
      const student = students.find(s => s.password === this.password);

      if (!student) {
        this.error = 'Parol xato';
        return;
      }

      this.mockAuth.saveStudent(student.id);
      this.router.navigate(['/mock/results']);
    });
  }
}
