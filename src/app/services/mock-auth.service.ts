import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockAuthService {
  private url = '/assets/students.json';

  constructor(private http: HttpClient) {}

  login(password: string) {
    return this.http.get<any[]>(this.url);
  }

  getLoggedStudent(): Observable<any | null> {
    const id = this.getStudentId();
    if (!id) {
      return new Observable(obs => {
        obs.next(null);
        obs.complete();
      });
    }

    return this.http.get<any[]>(this.url).pipe(
      map(students =>
        students.find(s => String(s.id) === String(id))
      )
    );
  }

  saveStudent(id: string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('mockStudentId', String(id));
    }
  }


  getStudentId(): string | null {
    if (typeof window === 'undefined') {
      return null;
    }
    return localStorage.getItem('mockStudentId');
  }


  logout() {
    localStorage.removeItem('mockStudentId');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('mockStudentId');
  }
}
