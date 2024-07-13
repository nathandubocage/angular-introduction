// actions.ts
import { createAction, props } from '@ngrx/store';

export const loadItems = createAction('[Items] Load');

export const loadItemsSuccess = createAction(
  '[Items] Load Success',
  props<{ items: any[] }>()
);
export const loadItemsFailure = createAction(
  '[Items] Load Failure',
  props<{ error: any }>()
);
