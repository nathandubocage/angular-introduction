// items.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as ItemActions from '../store/actions';
import * as fromItems from '../store/selectors';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="!(loading$ | async)">
      <ul>
        <li *ngFor="let item of items$ | async">{{ item.name }}</li>
      </ul>
      <p>Total items: {{ itemCount$ | async }}</p>
    </div>
    <div *ngIf="loading$ | async">Loading...</div>
    <div *ngIf="error$ | async as error">Error: {{ error }}</div>
  `,
})
export class ItemsComponent implements OnInit {
  items$: Observable<any[]>;
  loading$: Observable<boolean>;
  error$: Observable<any>;
  itemCount$: Observable<number>;

  constructor(private store: Store) {
    this.items$ = this.store.select(fromItems.selectAllItems);
    this.loading$ = this.store.select(fromItems.selectItemsLoading);
    this.error$ = this.store.select(fromItems.selectItemsError);
    this.itemCount$ = this.store.select(fromItems.selectItemCount);
  }

  ngOnInit() {
    this.store.dispatch(ItemActions.loadItems());
  }
}
