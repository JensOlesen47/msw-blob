import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(user: { username: string }) {
    return this.http.post<User>(`/login`, user);
  }

  downloadFile() {
    return this.http.get('/file', {responseType: 'blob', observe: 'response'}).pipe(tap(resp => {
      const blob = resp.body
      console.log(blob);
      const a = document.createElement('a');
      let url = window.URL.createObjectURL(blob)
      a.href = url;
      a.download = 'mocked-file.txt';

      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }));
  }
}
