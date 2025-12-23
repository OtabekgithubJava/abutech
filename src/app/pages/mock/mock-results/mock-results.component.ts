import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockAuthService } from '../../../services/mock-auth.service';

@Component({
  selector: 'app-mock-results',
  templateUrl: './mock-results.component.html',
  styleUrl: './mock-results.component.scss'
})
export class MockResultsComponent implements OnInit {

  student: any;

  constructor(
    private mockAuth: MockAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mockAuth.getLoggedStudent().subscribe(student => {
      if (!student) {
        this.router.navigate(['/mock']);
        return;
      }

      this.student = student;
      console.log('STUDENT:', student);
    });
  }

  get listening() {
    return this.student?.listening;
  }

  get reading() {
    return this.student?.reading;
  }

  get writing() {
    return this.student?.writing;
  }

  logout() {
    this.mockAuth.logout();
    this.router.navigate(['/app']);
  }
}
