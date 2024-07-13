// selectors.ts
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ItemState } from './reducer';

// Sélecteur de feature pour accéder à l'état des items
export const selectItemState = createFeatureSelector<ItemState>('items');

// Sélecteur pour obtenir tous les items
export const selectAllItems = createSelector(
  selectItemState,
  (state: ItemState) => state.items
);

// Sélecteur pour obtenir l'état de chargement
export const selectItemsLoading = createSelector(
  selectItemState,
  (state: ItemState) => state.loading
);

// Sélecteur pour obtenir l'erreur
export const selectItemsError = createSelector(
  selectItemState,
  (state: ItemState) => state.error
);

// Exemple de sélecteur plus complexe : compter le nombre d'items
export const selectItemCount = createSelector(
  selectAllItems,
  (items) => items.length
);
