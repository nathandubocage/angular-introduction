import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private http: HttpClient = inject(HttpClient);
  public users = signal<User[]>([]);
  readonly url = 'https://jsonplaceholder.typicode.com/users';

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url).pipe(
      tap((users) => {
        this.users.set(users);
      })
    );
  }
}
