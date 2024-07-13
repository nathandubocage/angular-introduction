// effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ItemActions from './actions';
import { ItemService } from '../items/item.service';

@Injectable()
export class ItemEffects {
  loadItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemActions.loadItems),
      mergeMap(() =>
        this.itemService.getItems().pipe(
          map((items) => ItemActions.loadItemsSuccess({ items })),
          catchError((error) => of(ItemActions.loadItemsFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private itemService: ItemService) {}
}
