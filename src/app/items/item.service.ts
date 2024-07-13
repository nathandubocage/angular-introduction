// item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  getItems() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }
}
